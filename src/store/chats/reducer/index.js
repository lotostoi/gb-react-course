import { ADD_CHAT, DELETE_CHAT } from '../actions'

const initialState = {
    chats: [{ id: 'dfe33de', name: "Main room" }]
}

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case ADD_CHAT: {
            return {
                chats: [...state.chats, payload],
            }
        }
        case DELETE_CHAT: {
            const newChats = [...state.chats].filter(({ id }) => id !== payload.id)
            return { ...state, chats: newChats }
        }
        default: {
            return state
        }
    }
}