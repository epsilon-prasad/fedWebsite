//import "./App.css";
import React from "react";

import Main from "./main";

class App extends React.Component {
  render() {
    let showBg = window.location.hash === "#/";
    return (
      <React.Fragment>
        <div className="container-fluid">
          <Main />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
