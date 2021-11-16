
import { useDispatch, useSelector } from "react-redux";

import { SHOW_NAME, HIDE_NAME } from '../../store/person-area/actions'

import PersonAreaView from './person-area-view.js';

export default function () {

    const { showName } = useSelector((state) => state.showName)

    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
        if (target.checked) {
            dispatch({ type: SHOW_NAME })
        } else {
            dispatch({ type: HIDE_NAME })
        }
    }

    return <PersonAreaView {...{ showName, handleChange }} />
}