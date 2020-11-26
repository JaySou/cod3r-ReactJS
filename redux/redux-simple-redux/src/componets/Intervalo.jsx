import './Intervalo.css'
import React from 'react'
import { connect } from 'react-redux'


import Card from './Card'
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numerosAction'

function Intervalo(props) {

    const {min, max} = props.numeros

    return (
        <Card title="Intervalo de Números" red>

            <div className="Intervalo">
                <span>
                    <strong> Minimo: </strong>
                    <input type="number" value={min} onChange={e => props.alterarMinino(+e.target.value)} />
                </span>
                <span>
                    <strong> Maximo: </strong>
                    <input type="number" value={max} onChange={e => props.alterarMaximo(+e.target.value)} />
                </span>
            </div>

        </Card>
    )
}

function mapStateToProps(state){
    return {
        numeros: state.numeros
    }
}

function mapDispatchToProps(dispatch){

    return {
        alterarMinino(novoNumero) {
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },

        alterarMaximo(novonumero) {
            const action = alterarNumeroMaximo(novonumero)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)