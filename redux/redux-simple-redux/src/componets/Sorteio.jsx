import React from 'react'
import { connect } from 'react-redux'


import Card from './Card'

function Sorteio(props){

    const {min, max} = props.numeros
    const aleatorio = parseInt(Math.random() * (max - min)) + min

    return (
        <Card title="Sorteio de um Número" purple>

            <div>
                <span>
                    <strong> Resultado: </strong>
                    <span>{aleatorio}</span>
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

export default connect(mapStateToProps)(Sorteio)