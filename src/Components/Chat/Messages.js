import React, { Component } from 'react'
import Firebase from '../../Utils/Firebase'

export default class Messages extends Component {
    constructor(props){
        super(props)
        this.state={
            messages:[{text:"Test"}]
        }
    }
    componentDidMount(){
        const db = Firebase.firestore();
        var newMessages = [];
        db.collection("Messages").onSnapshot(snapshot =>{
            snapshot.forEach(doc => {
                newMessages.push({ text: doc.data().text })
            })
            this.setState({ messages: newMessages })
            newMessages = []
        })
    }
    render() {
        return (
            
        <div>
          {this.state.messages.map(message => (
            <div>{message.text}</div>
          ))}
        </div>
        
        )
    }
}
