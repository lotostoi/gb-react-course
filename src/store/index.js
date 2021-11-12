import { createStore, combineReducers } from 'redux';

import showName from './person-area/reducer';
import chats from './chats/reducer';
import messages from './messages/reducer';

export default createStore(
    combineReducers({
        showName,
        chats,
        messages
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)