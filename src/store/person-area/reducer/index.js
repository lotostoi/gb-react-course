
import { SHOW_NAME, HIDE_NAME } from '../actions'

const initialState = {
    showName: true
}

export default function (state = initialState, { type }) {
    switch (type) {
        case SHOW_NAME: {
            return {
                showName: true,
            }
        }
        case HIDE_NAME: {
            return {
                showName: false,
            }
        }
        default: {
            return state
        }
    }

}