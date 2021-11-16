
import { GET_LIST_PFOTOS, TOGLE_IS_LOAD, TOGLE_IS_ERROR } from '../actions'

const initialState = {
    listPhotos: [],
    isError: false,
    isLoad: false,
}

export default function (state = initialState, { type, payload }) {

    switch (type) {
        case GET_LIST_PFOTOS: {
            return { ...state, listPhotos: payload || [] }
        }
        case TOGLE_IS_LOAD: {
            return { ...state, isLoad: payload }
        }
        case TOGLE_IS_ERROR: {
            return { ...state, isError: payload }
        }
        default: {
            return state
        }
    }
}