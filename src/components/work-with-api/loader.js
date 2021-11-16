export default function () {
    return (
        <div className="w-100 d-flex justify-content-center align-items-center" style={{ height: 'calc(100vh - 200px)' }}>
            <div className="spinner-border" style={{ width: '10rem', height: '10rem' }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}