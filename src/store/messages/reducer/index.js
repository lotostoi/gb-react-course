import { ADD_MESSAGE, DELETE_MESSAGES } from '../actions'

const initialState = {
    messages: {}
}

export default function (state = initialState, { type, payload }) {
    switch (type) {

        case ADD_MESSAGE: {
            if (payload.idChat in state.messages) {
                const newMassages = { ...state.messages }
                newMassages[payload.idChat].push(payload.message)
                return { messages: newMassages }
            }

            const newMessages = { ...state.messages }
            newMessages[payload.idChat] = [payload.message]
            return { messages: newMessages }
        }

        case DELETE_MESSAGES: {
            if (payload.id in state.messages) {
                const newMassages = { ...state.messages }
                delete newMassages[payload.id]
                return { messages: newMassages }
            }
            return state
        }
        default: {
            return state
        }
    }
}