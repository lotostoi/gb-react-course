import { getListPhotos } from "../../../api/work-with-api"; 

export const GET_LIST_PFOTOS = 'GET_LIST_PFOTOS'
export const TOGLE_IS_LOAD = 'TOGLE_IS_LOAD'
export const TOGLE_IS_ERROR = 'TOGLE_IS_ERROR'


export const getList = (list) => ({
    type: GET_LIST_PFOTOS,
    payload: list,
});

export const toggleIsLoad = (trueFalse) => ({
    type: TOGLE_IS_LOAD,
    payload: trueFalse,
});

export const toggleIsError = (trueFalse) => ({
    type: TOGLE_IS_ERROR,
    payload: trueFalse,
});


export const getListWithThunk = () => async (dispatch) => {
    dispatch(toggleIsLoad(true))
    try {
        dispatch(getList([]))
        dispatch(toggleIsError(false))
        const listPhotos = await getListPhotos()
        dispatch(getList(listPhotos))
    } catch (error) {
        console.error(error);
        dispatch(toggleIsError(true))
    }
    dispatch(toggleIsLoad(false))
}


