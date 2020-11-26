import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IcomButton from '../template/IconButton'
import { markAsDone, markAsPending, remove } from '../main/todoActions'


const TodoList = props => {

    const renderRows = () => {

        const list = props.list || []

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markeAsDone' : ''}>{todo.description}</td>
                <td>
                    <IcomButton 
                        style="success" 
                        icon="check" 
                        onClick={() => props.markAsDone(todo)}
                        hide={todo.done}
                    />

                    <IcomButton 
                        style="warning" 
                        icon="undo" 
                        onClick={() => props.markAsPending(todo)}
                        hide={!todo.done}
                    />

                    <IcomButton 
                        style="danger" 
                        icon="trash-o" 
                        onClick={() => props.remove(todo)}
                        hide={!todo.done}
                    />
                </td>
            </tr>
        ))
    }

    return (
        
        <table className="table">
            <thead>
                <tr>
                    <th> Descrição </th>
                    <th className="tableActions"> Acões </th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
    
        </table>
    )
}

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)