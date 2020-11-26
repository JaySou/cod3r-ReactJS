import { NUM_MIN_ALTERADO, NUM_MAX_ALTERADO  } from '../actions/actionTypes'


const aleatorio1 = parseInt(Math.random() * (20 - 1)) + 1
const aleatorio2 = parseInt(Math.random() * (20 - 1)) + 1

const initialState = {
    min: aleatorio1,
    max: aleatorio2
}


export default function numerosReducer(state = initialState, action) {

    switch(action.type){
        case NUM_MIN_ALTERADO:
            return {
               ...state,
                min: action.payload
            }

        case NUM_MAX_ALTERADO:
            return {
                ...state,
                max: action.payload
            }
        default:
            return state
    }

}