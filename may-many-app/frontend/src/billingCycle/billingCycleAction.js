import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabAction'

import { BILLING_CYCLES_FETCHED } from './billingCycleTypes'


const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = { credits: [{}], debts: [{}]}


// Metodo default para submit de formulario, será usado no POST, PUT e DELETE

function submit(values, method ) {

    return dispatch => {

        const id = values._id ? values._id : ''

        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
                .then(resp => {
                    toastr.success('Sucesso', 'Operação realizada com sucesso')
                    dispatch(init())
                })
                .catch(e => {
                    const msg = !e.response.data.errors ? 'Erro ao tentar salvar os dados': 'Campos sem preenchimento'
                    if(!e.response.data.errors){
                        toastr.error('Erro', 'Erro ao tentar salvar os dados, verifique os campos!')                }
                    else {
                        e.response.data.errors.forEach(error => toastr.error('Erro', error))
                    }
               })
    }
    
}


// Extrair Lista de billingCycle

export function getList(){

    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: BILLING_CYCLES_FETCHED,
        payload: request
    }
}

// criar novo billingCycle POST

export function create(values) {
    return submit(values, 'post')
}

// Altera um billingCycle PUT

export function update(values){
    return submit(values, 'put')
}

// Remove um billingCycle DELETE

export function remove(values){
    return submit(values, 'delete')
}

// Volta o Formulario para o stado inicial vazio, habilita tabList e tabCreate, esconde demais tabs

export function init(){
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}

// Ao selecionar a opção de alterar habilita e exibi a aba e o conteudo de tabUpdate

export function showUpdate(billingCycle){
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

// Ao selecionar a opção de excluir habilita e exibi a aba e o conteudo de tabDelete

export function showDelete(billingCycle){
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}
