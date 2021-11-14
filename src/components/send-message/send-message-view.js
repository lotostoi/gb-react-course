export default function ({ inputElementRef, formRef, sendMessage }) {
    return (
        <form
            ref={formRef}
            style={{
                display: 'flex',
                padding: '10px',
                border: '1px solid blue',
                borderColor: 'gray',
                borderRadius: '5px',
                marginTop: '10px',
                justifyContent: 'space-between'
            }}
        >

            <input type="text" className="form-control w-75" ref={inputElementRef} />
            <button
                className="btn btn-primary"
                onClick={sendMessage}
            >
                Send Message
            </button>
        </form>
    )
}