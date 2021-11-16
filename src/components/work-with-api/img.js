import { useState, useEffect, useRef } from 'react'

export { useState } from 'react'

export default function ({ url }) {

    const imgRef = useRef(null)

    const [isLoad, setIsLoad] = useState(false)

    let image = null

    useEffect(() => {
        const img = document.createElement('img')
        img.src = url
        img.style.cssText = `
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: 'center center`;

        img.onload = () => {
            setIsLoad(true)
            imgRef.current?.appendChild(img)
        }
    }, [url])


    return isLoad ? (
        <>
            <div className="p-1 border border-primary rounded" style={{
                width: '100%',
                height: '200px',
            }}
                ref={imgRef}>
            </div>
        </>
    ) : (
        <div className="p-1 border border-primary rounded" style={{
            width: '100%',
            height: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )

}