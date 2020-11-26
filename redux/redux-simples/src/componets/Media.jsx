import React from 'react'


import Card from './Card'

export default props => {

    const { min, max } = props

    return (
        <Card title="Media dos Números" green>

            <div>
                <span>
                    <strong> Resultado: </strong>
                    <span>{(max + min) / 2 }</span>
                </span>
            </div>

        </Card>
    )
} 