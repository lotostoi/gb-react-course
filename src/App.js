import '../src/assets/scss/App.scss';
import {Message} from "./components/message";

function App(props) {
    return (
        <div className="App">
            <Message myContent={props.content}/>
        </div>
    );
}

export default App;
