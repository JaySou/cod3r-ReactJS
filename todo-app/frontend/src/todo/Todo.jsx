import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props) {

        super(props)
        
        this.state = {
            description: '',
            list: []
        }
        
        this.refresh = this.refresh.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPendind = this.handleMarkAsPendind.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }

    refresh(description = ''){

        const search = description ? `&description__regex=/${description}/` : ''

        axios.get(`${URL}?sort=-createdAt${search}`)
                .then(res => this.setState({ ...this.state, description, list: res.data }))
                .catch(err => alert(`Erro ao tentar buscar as tarefas!`))
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })    
                .then(res => this.refresh())
                .catch(err => alert(`Erro ao tentar salvar tarefa!`))
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
                .then(res => this.refresh(this.state.description))
                .catch(err => alert(`Erro ao tentar excluir tarefa!`))
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
                .then(res => this.refresh(this.state.description))
                .catch(err => alert(`Erro ao tentar modificar a tarefa!`))
    }

    handleMarkAsPendind(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
                .then(res => this.refresh(this.state.description))
                .catch(err => alert(`Erro ao tentar modificar a tarefa!`))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleClear() {
        this.refresh()
    }

    render() {

        return (
            <div>

               <PageHeader name="Tarefas" small="Cadastro" />

               <TodoForm 
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                    description={this.state.description}

                />

               <TodoList 
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPendind={this.handleMarkAsPendind}

               />

            </div>
        )
    }
}