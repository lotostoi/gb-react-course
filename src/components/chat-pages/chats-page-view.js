import ListChats from '../list-chats';
import ChatArea from '../chat-area'
import { Switch, Route} from "react-router-dom";

export default function () {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '10px 0',

        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <ListChats></ListChats>
                <Switch>
                    <Route path='/chats/:chatName' component={ChatArea} />
                </Switch>
            </div>
        </div>
    )
}