//import "./App.css";
import "../src/stylesheet/main.scss";
import React, { useState } from "react";
import Background from "./components/shared/background/index";
import ReactDOM from "react-dom";
import { Route, HashRouter as Router } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Menu from "./components/shared/nav/nav-latest";
// import Menu from "./components/shared/nav/nav";
import Fed from "./components/fed/fed";
import Projects from "./components/projects/projects";
import Talks from "./components/talks/talks";
import Training from "./components/training/traning";
import Title from "./components/title/title";
import Panel from "./components/panel/panel";
import Slider from "./components/slider/slider";
import TechTalksForm from "./components/forms/techtalksform";
import CodeBestPractices from "./components/forms/codebestpractices";
import GitBestPractices from "./components/forms/gitbestpractices";
import JiraBestPractices from "./components/forms/jirabestpractices";

const Main = () => {
  const [showMenu, setState] = useState(false);
  const [showpopup, setpopupState] = useState(false);
  const [itemClick, setclickState] = useState(false);
  const menuClick = () => {
    setState(true);
    setpopupState(true);
  };

  const click = () => {
    setclickState(true);
    setState(false);
  };

  return (
    <React.Fragment>
      <Router>
        <Menu
          customClass={showMenu ? "menu menu--open" : "menu"}
          handlelinkClick={click}
        />

        <Route exact path="/" component={Background} />
        <Route
          exact
          path="/"
          render={props => <Background {...props} handleClick={menuClick} />}
        />
        <Route exact path="/fed" component={Fed} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/talks" component={Talks} />
        <Route exact path="/training" component={Training} />
        <Route exact path="/title" component={Title} />
        <Route exact path="/panel-:id" component={Panel} />
        <Route exact path="/slider" component={Slider} />
        {<Route exact path="/techtalksform" component={TechTalksForm} />}
        {
          <Route
            exact
            path="/codebestpractices"
            component={CodeBestPractices}
          />
        }
        {<Route exact path="/gitbestpractices" component={GitBestPractices} />}
        {
          <Route
            exact
            path="/jirabestpractices"
            component={JiraBestPractices}
          />
        }
      </Router>
    </React.Fragment>
  );
};

export default Main;
