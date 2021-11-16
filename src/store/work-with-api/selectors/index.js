import workWithApi from "../../../components/work-with-api"

export function getListPhotos(state) {
    return state?.workWithApi?.listPhotos || []
}
export function getIsLoad(state) {
    return state?.workWithApi?.isLoad
}
export function getIsError(state) {
    return state?.workWithApi?.isError
}