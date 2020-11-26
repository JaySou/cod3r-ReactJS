

import React from 'react'
import IcomButton from '../template/IconButton'


export default props => {

    const renderRows = () => {

        const list = props.list || []

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markeAsDone' : ''}>{todo.description}</td>
                <td>
                    <IcomButton 
                        style="success" 
                        icon="check" 
                        onClick={() => props.handleMarkAsDone(todo)}
                        hide={todo.done}
                    />

                    <IcomButton 
                        style="warning" 
                        icon="undo" 
                        onClick={() => props.handleMarkAsPendind(todo)}
                        hide={!todo.done}
                    />

                    <IcomButton 
                        style="danger" 
                        icon="trash-o" 
                        onClick={() => props.handleRemove(todo)}
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