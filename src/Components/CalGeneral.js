import React, { Component } from "react";
import "./CalGeneral.css";
const teachers = ["Beth", "Jeff", "Steve", "Trish"];
const times = ["2:00 - 4:30","5:00 - 7:00","7:30 - 9:30"]

export default class CalGeneral extends Component {
  render() {
    return (
      <div>
        <div className="Day-Title">General Tuesday Schedule</div>
        <table>
          <thead>
            <tr>
              <td>Time</td>
              {teachers.map(teacher => (
                <td>{teacher}</td>
              ))}
            </tr>
          </thead>
          <tbody>
                {times.map(slot => (
                    <tr>
                        <td>{slot}</td>
                        {teachers.map(teacher=>(
                            <td>Avail.</td>
                        ))}
                    </tr>
                ))}
          </tbody>
        </table>
      </div>
    );
  }
}
