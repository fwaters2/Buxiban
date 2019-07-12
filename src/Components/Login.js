import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            {/*<div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >*/}
        {user === "Guest" ? (
            <form className="NewUser" onSubmit={updateUser}>
              <input
                placeholder="New User"
                value={userInput}
                onChange={handleUserChange}
              />
              <button onClick={updateUser}>Update Identity</button>
            </form>
          ) : (
            <button onClick={revertUser}>Change User</button>
          )}
        )
    }
}
