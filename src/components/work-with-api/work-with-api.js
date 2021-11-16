
import { useState, useEffect, useCallback } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import Error from './error'
import ImageComponet from './img'
import Loader from './loader'


import { getIsLoad } from '../../store/work-with-api/selectors'
import { getIsError } from '../../store/work-with-api/selectors'
import { getListPhotos } from '../../store/work-with-api/selectors'
import { getListWithThunk } from '../../store/work-with-api/actions'


export default function () {

    const isLoad = useSelector(getIsLoad, shallowEqual)
    const isError = useSelector(getIsError, shallowEqual)
    const listPhotos = useSelector(getListPhotos, shallowEqual)
    const dispatch = useDispatch()

    const getList = useCallback(() => dispatch(getListWithThunk()), [])

    useEffect(async () => getList(), [])

    return (
        <div className="row m-3">
            {isLoad && < Loader />}
            {isError && <Error getListPhotos={getList} />}
            {
                listPhotos &&
                listPhotos.length > 0 &&
                listPhotos.map(({ id, download_url }) => {
                    return (<div className="col-4 p-1" key={id}>
                        <ImageComponet url={download_url} />
                    </div>)
                })
            }
        </div>
    )

}