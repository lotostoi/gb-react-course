export const ADD_MESSAGE = 'ADD_MESSAGE'

export const addMessage = (newMessage) => ({
    type: ADD_MESSAGE,
    payload: newMessage,
});

