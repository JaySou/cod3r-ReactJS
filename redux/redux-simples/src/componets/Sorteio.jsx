import React from 'react'


import Card from './Card'

export default props => {

    const { min, max } = props
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