// import "./nav.scss";
import "./nav-latest.scss";
import React from "react";
import closeIcon from "../../../assets/homePagelogo.png";
import homeIcon from "../../../assets/home-icon.png";
import logo from "../../../assets/homePagelogo.png";
import { HashLink as Link } from "react-router-hash-link";
import Slider from "react-slick";
import video from "../../../assets/epsilon-dx-video.mp4";
import history from "./history";
import axios from "axios";
import { API_URI } from '../../../axiosConfig';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: false,
      training: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleLogoClick() {
    document.getElementById("menu-trigger").click();
  }
  handleClick(e, status) {
    if (status === "close") {
      window.location.href = "/";
    }
    // else if(status === 'main'){
    //   window.location.href = '#/FED-website';
    // }
    else {
      this.setState({
        condition: !this.state.condition,
      });
    }
    history.push("#/");
  }

  componentDidMount() {
    axios
      .get(`${API_URI}/fed/training`)
      .then((Response) => {
        this.setState({
          training: Response.data.training,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    return (
      <div>
        <div className="headerTop">
          <div className="logoTop">
            <a href="javascript:void(0)" onClick={this.handleLogoClick}>
              <img src={logo} alt="logo" className="logo" />
            </a>
          </div>
          <div className="menu-trigger">
            <span id="menu-trigger" onClick={this.handleClick}>
              <img src={homeIcon} alt="logo" className="logo" />
            </span>
          </div>
        </div>
        <div
          className={`${this.props.customClass} ${
            this.state.condition ? "menu menu--open" : "menu"
            }`}
        >
          <div className="main-menu-wrapper">
            <div className="item1 menu__item--1 order-lg-1 order-3">
              <div className="subitem1">
                <div className="menu__item-inner">
                  <div className="sidemenu">
                    <Link
                      to="/panel-supportPortal"
                      className="sidemenu__item"
                      onClick={this.handleClick}
                    >
                      <span className="sidemenu__item-inner">Onboarding</span>
                    </Link>
                    <Link
                      to="/panel-funCrew"
                      className="sidemenu__item"
                      onClick={this.handleClick}
                    >
                      <span className="sidemenu__item-inner">Fun Crew</span>
                    </Link>
                    <Link
                      to="/panel-misc"
                      className="sidemenu__item"
                      onClick={this.handleClick}
                    >
                      <span className="sidemenu__item-inner">Misc</span>
                    </Link>
                    <Link
                      to="/panel-DL"
                      className="sidemenu__item"
                      onClick={this.handleClick}
                    >
                      <span className="sidemenu__item-inner">DL's</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="subitem2">
                <div className="menu__item-inner">
                  <h4 className="label label--topleft label--line">
                    Join us now
                  </h4>

                  <React.Fragment>
                    {this.state.training
                      .filter(
                      (training) => training.training_status.toUpperCase() === "UPCOMING"
                      )
                      .sort(function (a, b) {
                        return (
                          new Date(a.training_date) - new Date(b.training_date)
                        );
                      })
                      .slice(0, 3)
                      .map((item) => (
                        <div className="joinus-blk" key={item._id}>
                          <div className="joinus-img">
                            <img src="https://liquidplanner-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/HiRes-17.jpg" />
                          </div>
                          <div className="joinus-desc">
                            <p>{item.training_title}</p>
                            <p>{item.training_date}</p>
                          </div>
                          {/* <div className="joinus-time">Time</div> */}
                        </div>
                      ))}
                  </React.Fragment>

                  {/* <div className="joinus-blk">
                    <div className="joinus-img">
                      <img src="https://liquidplanner-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/HiRes-17.jpg" />
                    </div>
                    <div className="joinus-desc">
                      <p>Title</p>
                      <p>Date</p>
                    </div>
                    <div className="joinus-time">Time</div>
                  </div> */}

                  <div>
                    <Link
                      to="/talks"
                      className="btn-text btn-hover"
                      onClick={this.handleClick}
                      data-text="More"
                    >
                      <span>More</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item2 menu__item--2 order-lg-2 order-2">
              <div className="subitem1">
                <div className="menu__item-inner">
                  <Link
                    to="/fed"
                    className="menu__item-hoverlink"
                    onClick={this.handleClick}
                  >
                    <video loop autoPlay muted>
                      <source src={video} type="video/mp4" />
                    </video>

                    <div className="overlay">
                      <div className="video-text">The Coders</div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="subitem2">
                <Slider {...settings}>
                  <div className="menu__item-inner">
                    <p className="quote">
                      "If debugging is the process of removing software bugs, then programming must be the process of putting them in" – Edsger Dijkstra
                    </p>
                  </div>
                  <div className="menu__item-inner">
                    <p className="quote">
                      It's not a bug. It's an undocumented feature!
                    </p>
                  </div>
                  <div className="menu__item-inner">
                    <p className="quote">
                      "Software Developer" – An organism that turns caffeine into software
                    </p>
                  </div>
                  <div className="menu__item-inner">
                    <p className="quote">
                      A user interface is like a joke. If you have to explain it, it's not that good.
                    </p>
                  </div>
                  <div className="menu__item-inner">
                    <p className="quote">
                      My code DOESN'T work, I have no idea why. My code WORKS, I have no idea why.
                    </p>
                  </div>
                  <div className="menu__item-inner">
                    <p className="quote">
                      "One man's crappy software is another man's full time job" – Jessica Gaston
                    </p>
                  </div>
                  <div className="menu__item-inner">
                    <p className="quote">
                      Software undergoes beta testing shortly before it's released. Beta is Latin for "still doesn’t work".
                    </p>
                  </div>
                  <div className="menu__item-inner">
                    <p className="quote">
                      A good programmer looks both ways before crossing a one-way street.
                    </p>
                  </div>
                  <div className="menu__item-inner">
                    <p className="quote">
                      Only half of programming is coding. The other 90% is debugging.
                    </p>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="item3 menu__item--3 order-lg-3 order-1">
              <div className="subitem1">
                <div className="menu__item-inner">
                  <div className="mainmenu">
                    <Link
                      to="/projects"
                      className="mainmenu__item"
                      onClick={this.handleClick}
                    >
                      Our Work
                    </Link>
                    <Link
                      to="/talks"
                      className="mainmenu__item"
                      onClick={this.handleClick}
                    >
                      Training
                    </Link>
                    <a
                      href="http://15.206.221.177:3001/"
                      className="mainmenu__item"
                      target="_blank"
                    >
                      Blog
                    </a>
                    <Link
                      to="/training"
                      className="mainmenu__item"
                      onClick={this.handleClick}
                    >
                      Best Practices
                    </Link>
                  </div>
                  <p className="label label--topleft label--vert-mirror">
                    the important stuff
                  </p>
                  <p className="label label--bottomright label--vert">
                    made in bannockburn
                  </p>
                </div>
              </div>
              <div className="subitem2">
                <Slider {...settings}>
                  <div className="menu__item-inner">
                    <p className="quote">
                      "If debugging is the process of removing software bugs, then programming must be the process of putting them in" – Edsger Dijkstra
                    </p>
                  </div>
                  <div className="menu__item-inner">
                    <p className="quote">
                      It's not a bug. It's an undocumented feature!
                    </p>
                  </div>
                  <div className="menu__item-inner">
                    <p className="quote">
                      "Software Developer" – An organism that turns caffeine into software
                    </p>
                  </div>
                  <div className="menu__item-inner">
                    <p className="quote">
                      A user interface is like a joke. If you have to explain it, it's not that good.
                    </p>
                  </div>
                  <div className="menu__item-inner">
                    <p className="quote">
                      My code DOESN'T work, I have no idea why. My code WORKS, I have no idea why.
                    </p>
                  </div>
                  <div className="menu__item-inner">
                    <p className="quote">
                      "One man's crappy software is another man's full time job" – Jessica Gaston
                    </p>
                  </div>
                  <div className="menu__item-inner">
                    <p className="quote">
                      Software undergoes beta testing shortly before it's released. Beta is Latin for "still doesn’t work".
                    </p>
                  </div>
                  <div className="menu__item-inner">
                    <p className="quote">
                      A good programmer looks both ways before crossing a one-way street.
                    </p>
                  </div>
                  <div className="menu__item-inner">
                    <p className="quote">
                      Only half of programming is coding. The other 90% is debugging.
                    </p>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <button
            className="action action--close"
            onClick={() => {
              this.handleClick("e", "close");
            }}
          >
            <img src={closeIcon} alt="" />
          </button>
        </div>
      </div>
    );
  }
}

export default Menu;
