import { createStore } from 'redux';

import showName from './person-area/reducer';

export default createStore(
    showName,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)