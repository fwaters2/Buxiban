import React from "react";
import Schedule from "./Components/Schedule";
import Chatroom from "./Components/Chatroom";
import NoticeBoard from "./Components/NoticeBoard";
import CalGeneral from "./Components/CalGeneral";
import CalDynamic from "./Components/CalDynamic";
const pages = [
  "Chat Room",
  "Class Schedule",
  "Notice Board",
  "Payslip Generator",
  "Dynamic Schedule"
];
function App() {
  const [devPage, togglePage] = React.useState("");
  function changePage(e) {
    togglePage(e.target.id);
  }

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        Jeff's Buxiban
        <br />
        <div>Goals: Buxiban more efficient, Reduce paperwork</div>
      </div>
      <ol>
        <li>Chat room for teachers and managers</li>
        <li>Class schedule</li>
        <li>Notice board</li>
        <li>Payslip generator</li>
        <li>
          Course schedule tailored to each teacher Calendar with leave dates for
          each teacher (combined together so all can see)
        </li>
      </ol>
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

export default App;
