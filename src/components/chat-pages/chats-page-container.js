
import { useHistory, Redirect } from "react-router-dom";

import ChatsPageView from './chats-page-view'

const chatsPageRedirect = () => {
    const history = useHistory()
    if (history.location.pathname === '/chats') {
        return <Redirect to="/chats/main_room" />
    }
    return <ChatsPageView />
}

export default chatsPageRedirect