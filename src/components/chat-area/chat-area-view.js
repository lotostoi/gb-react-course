
import P404 from '../error404'
import ChatRoom from './chat-room'

export default function ({ room }) {
    return (
        <div style={{ width: 'calc(100% - 262px)', }}>
            <div 
                style={{
                    padding: '5px',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '5px',
                    border: '1px solid blue',
                    borderColor: '#42a5f5',
                    width: '100%',
                    height: '85vh',
                    overflow: 'auto',
                    boxSizing: 'border-box'
                }}>
                {
                    room ? <ChatRoom name={room.name} id={room.id} /> : <P404 />
                }
            </div>
        </div>
    )
}