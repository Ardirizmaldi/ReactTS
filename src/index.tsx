import ReactDOM from "react-dom";
import React from "react";
import EventComponent from "./events/eventComponent";
import UserSearch from "./refs/userSearch";

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
