import React from "react";
import Schedule from "./Components/Schedule";
import Chatroom from "./Components/Chatroom";
import NoticeBoard from "./Components/NoticeBoard";
import CalGeneral from "./Components/CalGeneral";
import CalDynamic from "./Components/CalDynamic";
import Outline from "./Development/Outline";
const pages = [
  "Chat Room",
  "Class Schedule",
  "Notice Board",
  "Payslip Generator",
  "Dynamic Schedule"
];
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

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        {pages.map(page => (
          <div>
            <button id={page} onClick={changePage}>
              {page}
            </button>
          </div>
        ))}
      </div>
      <hr />
      {devPage === "Chat Room" ? <Chatroom /> : <div />}
      {devPage === "Class Schedule" ? (
        <div>
          We are looking at the class schedule
          <Schedule content={<CalGeneral />} />
        </div>
      ) : (
        <div />
      )}
      {devPage === "Notice Board" ? <NoticeBoard /> : <div />}
      {devPage === "Payslip Generator" ? (
        <div>
          We are checking out Payslip Generator
          <div>
            23 hours taught
            <br />
            $13,800 owed
          </div>
        </div>
      ) : (
        <div />
      )}
      {devPage === "Dynamic Schedule" ? (
        <div>
          <div>We are checking out the dynamic schedule</div>
          <Schedule content={<CalDynamic />} />
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
