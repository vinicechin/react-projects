import * as actionTypes from './actions'

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.person.name,
                age: action.person.age
            }
            
            return {
                ...state,
                persons: [...state.persons, newPerson]
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