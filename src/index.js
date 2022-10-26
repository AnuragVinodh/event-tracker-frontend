import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CalendarBody } from "./Components/CalendarBody.js";

class Main extends React.Component {
  render() {
    // console.table(getMonth(1));
    return (
      <div className="p-5">
        <CalendarBody value="1" />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
