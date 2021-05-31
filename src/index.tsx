import ReactDOM from "react-dom";
import React from "react";
import UserSearch from "./state/userSearch";

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
