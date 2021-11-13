export const ADD_MESSAGE = 'ADD_MESSAGE'
export const DELETE_MESSAGES = 'DELETE_MESSAGES'

export const addMessage = (newMessage) => ({
    type: ADD_MESSAGE,
    payload: newMessage,
});
export const deleteMessages= (idChat) => ({
    type: DELETE_MESSAGES,
    payload: idChat,
});

