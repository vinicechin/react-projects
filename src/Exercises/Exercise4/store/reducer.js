import * as actionTypes from './actions'

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD:
            return {
                ...state,
                persons: [...state.persons, action.person]
            }
        case actionTypes.DEL:
            return {
                ...state,
                persons: state.persons.filter(person => {
                    return person.id !== action.id
                })
            }
        default: 
            return state
    }
}

export default reducer