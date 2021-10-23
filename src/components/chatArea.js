import React from 'react';

export class ChatArea extends React.Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.list.length !== this.props.list.length) {
            document.getElementById("chat-area").scrollTop += 200
        }
    }

    render() {
        return (
            <div id="chat-area"
                 className="d-flex flex-column w-100 border border-primary rounded p-3 my-3 overflow-auto"
                 style={{height: '60vh'}}>
                {this.props.list && this.props.list.map(({message, user, key}) =>
                    <div className="alert alert-success text-start d-flex" key={key}>
                        <strong>{user}:</strong>
                        <p className="mb-0 mx-1">{message}</p>
                    </div>
                )}
            </div>
        )
    }
}