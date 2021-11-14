export default function ({ showName, handleChange }) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: 'calc(100vh - 200px)'
        }}>

            <input
                type="checkbox"
                checked={showName}
                onChange={handleChange}
            />

            <h1>
                {showName ? "Person area" : "Hide"}
            </h1>

        </div>
    )
}