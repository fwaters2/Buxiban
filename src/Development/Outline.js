import React, { Component } from "react";

export default class Outline extends Component {
  render() {
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
            Course schedule tailored to each teacher Calendar with leave dates
            for each teacher (combined together so all can see)
          </li>
        </ol>
      </div>
    );
  }
}
