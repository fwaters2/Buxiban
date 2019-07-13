import React from "react";
import Schedule from "./Components/Schedule";
import Chatroom from "./Components/Chatroom";
import NoticeBoard from "./Components/NoticeBoard";
import CalGeneral from "./Components/CalGeneral";
import Outline from "./Development/Outline";
import Login from "./Components/Header/Login";
import Form from "./Components/UserCal/Form";
const pages = ["Chat Room", "Class Schedule", "Notice Board", "My Schedule"];
export default function Home(props) {
  const [devPage, togglePage] = React.useState("");
  function changePage(e) {
    togglePage(e.target.id);
  }

  return (
    <div>
      <button style={{ width: "100%" }} onClick={props.toggleOutline}>
        Toggle Outline
      </button>
      {props.outline ? <Outline /> : null}
      <Login user={props.user} changeUser={props.changeUser} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        {pages.map(page => (
          <div key={page}>
            <button id={page} onClick={changePage}>
              {page}
            </button>
          </div>
        ))}
      </div>
      <hr />
      {devPage === "Chat Room" ? <Chatroom user={props.user} /> : <div />}
      {devPage === "Class Schedule" ? (
        <div>
          <Schedule content={<CalGeneral />} />
        </div>
      ) : (
        <div />
      )}
      {devPage === "Notice Board" ? <NoticeBoard /> : <div />}
      {devPage === "My Schedule" ? (
        <div>
          {props.user === "Guest" ? (
            <h2>Please sign in</h2>
          ) : (
            <Form user={props.user} />
          )}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
