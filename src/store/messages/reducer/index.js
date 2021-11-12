import { ADD_MESSAGE } from '../actions'

const initialState = {
    messages: {}
}

export default function (state = initialState, { type, payload }) {
    switch (type) {
        
        case ADD_MESSAGE: {
            if (payload.idChat in state.messages) {
                const newMassages = { ...state.messages }
                newMassages[`${payload.idChat}`].push(payload.message)
                return { ...state, messages: newMassages }
            }

            const newMessages = { ...state.messages}
            newMessages[`${payload.idChat}`] = [payload.message]
            return { ...state, messages:  newMessages}
        }
        default: {
            return state
        }
    }
}