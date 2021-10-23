import '../src/assets/scss/App.scss';
import {SendMessage} from "./components/sendMessage";
import {ChatArea} from "./components/chatArea";
import {useState, useEffect} from "react";
import uniqid from "uniqid";

const users = [
    'Jon',
    'Alex',
    'Nicole'
]


function App(props) {

    const [messageList, setList] = useState([])

    const setMessageList = ({user, message, key}) => {
        const newMessageList = [...messageList, {user, message, key}]
        setList(newMessageList)
    }

    useEffect(() => {
        if (messageList.length) {
            const lastUser = messageList[messageList.length - 1].user
            if (lastUser !== "bot") {
                setTimeout(() => {
                    setMessageList({user: "bot", message: `Hallow ${lastUser}`, key: uniqid()})
                }, 1000)
            }
        }
    })

    return (
        <div className="App">
            <ChatArea list={messageList} key="ChatArea"/>
            {users.map((userName) => <SendMessage key={userName} user={userName} getMessage={setMessageList}/>)}
        </div>
    );
}

export default App;
