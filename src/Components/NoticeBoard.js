import React, { Component } from 'react'
import './NoticeBoard.css'

export default class NoticeBoard extends Component {
    render() {
        return (
            <div className="Bulletinroom-Container">
            Notice Board
            <div
              className="BulletinBox"
              style={{ border: "2px solid black", height: "200px" }}
            >
              <div className="Notice">Meeting on 12/25: Consumerism and you</div>
              <div className="Notice">Teachers to take over janitorial duties this Friday. Don't forget to bring sanitation gloves!</div>
             
            </div>
           
          </div>
        )
    }
}
