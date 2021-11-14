import uniqid from 'uniqid'

export const ADD_MESSAGE = 'ADD_MESSAGE'
export const DELETE_MESSAGES = 'DELETE_MESSAGES'


export const addMessage = (newMessage) => ({
    type: ADD_MESSAGE,
    payload: newMessage,
});
export const deleteMessages = (idChat) => ({
    type: DELETE_MESSAGES,
    payload: idChat,
});

export const addMessageWithThunk = ({ idChat, message }) => (dispatch) => {

    dispatch(addMessage({ idChat, message }));

    if (message.user !== '[bot]') {
        const botMessage = {
            id: uniqid(),
            user: '[bot]',
            message: `Hello ${message.user}`,
        }
        setTimeout(() => dispatch(addMessage({ idChat, message: botMessage })), 2000);
    }
}


