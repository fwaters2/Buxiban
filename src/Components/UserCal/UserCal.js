import React from "react";
import "./UserCal.css";
import star from "./star.png";

export default function UserCal(props) {
  const rows = ["14:00", "15:30", "17:00", "18:30"];
  const columns = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <div>
      <h4 style={{ textAlign: "center" }}>{props.user}'s Weekly Schedule</h4>
      <table className="UserCal-Container">
        <thead>
          <tr>
            <td>Time</td>
            <td>Mon</td>
            <td>Tues</td>
            <td>Wed</td>
            <td>Thurs</td>
            <td>Fri</td>
          </tr>
        </thead>
        <tbody>
          {rows.map(time => (
            <tr>
              <td>{time}</td>
              {columns.map(day =>
                props.classDB.filter(
                  aClass => aClass.Day === day && aClass.Time === time
                )[0] === undefined ? (
                  <td style={{ backgroundColor: "salmon" }} />
                ) : (
                  <td style={{ backgroundColor: "lightgreen" }}>
                    {
                      props.classDB.filter(aClass => aClass.Day === day)[0]
                        .Class
                    }
                    {props.classDB.filter(aClass => aClass.Day === day)[0]
                      .Note === undefined ? null : (
                      <img
                        onClick={() =>
                          alert(
                            props.classDB.filter(
                              aClass => aClass.Day === day
                            )[0].Note
                          )
                        }
                        src={star}
                        alt="star"
                      />
                    )}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
