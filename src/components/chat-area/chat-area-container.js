import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getChats } from '../../store/chats/selectors';


import ChatAreaView from './chat-area-view'

const ChatArea = () => {

    const chats = useSelector(getChats)
    let { chatName } = useParams()
    const room = chats.find(({ name }) => name.toString().toLowerCase().replace(' ', '_') === chatName)

    return <ChatAreaView room={room} />
}

export default ChatArea;