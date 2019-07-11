import React, { Component } from "react";

export default class CalDynamic extends Component {
  render() {
    return (
      <div>
        <div className="Day-Title">JEFF'S Tuesday Schedule</div>
        <div className="Container-Time">
          <h3>4:50-6:50 1LQ Lvl 3</h3>
          <p>
            {
              "Nulla est est pariatur velit irure commodo cillum in pariatur cillum laborum. Sint ex consectetur quis non. Tempor incididunt mollit aliqua ipsum excepteur fugiat eiusmod culpa minim laboris excepteur minim excepteur."
            }
          </p>
        </div>
        <div className="Container-Time">
          <h3>7:00-9:00 2PT Lvl 4 </h3>
          <p>
            {
              "Nulla est est pariatur velit irure commodo cillum in pariatur cillum laborum. Sint ex consectetur quis non. Tempor incididunt mollit aliqua ipsum excepteur fugiat eiusmod culpa minim laboris excepteur minim excepteur."
            }
          </p>
        </div>
      </div>
    );
  }
}
