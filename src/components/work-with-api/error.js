export default function ({ getListPhotos }) {
    return (
        <div className="alert alert-danger">
            <p>Server error! Try again or reload this page</p>
            <button className="btn btn-primary" onClick={getListPhotos}> Try again... </button>
        </div>
    )
}