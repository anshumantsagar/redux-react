import * as actionType from './action';
const initialState = {
    persons : []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.ADD_PERSON:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Anshumant',
                age: Math.floor( Math.random() * 22 )
            }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }
        case actionType.REMOVE_PERSON:
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== action.personId)
            }
        default:
            return state
    }    
}

export default reducer;

