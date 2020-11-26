import React from 'react'
import { connect } from 'react-redux'


import Card from './Card'

function Soma(props){

    const { min, max } = props.numeros

    return (
        <Card title="Soma dos Números" blue>

            <div>
                <span>
                    <strong> Resultado: </strong>
                    <span>{(max + min)}</span>
                </span>
            </div>

        </Card>
    )
} 

function mapStateToProps(state) {
    return {
        numeros: state.numeros
    }
}

export default connect(mapStateToProps)(Soma)