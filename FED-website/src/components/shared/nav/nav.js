import "./nav.scss";
import React from "react";
import closeIcon from "../../../assets/homePagelogo.png";
import homeIcon from "../../../assets/home-icon.png";
import logo from "../../../assets/homePagelogo.png";
import { HashLink as Link } from "react-router-hash-link";
import Slider from "react-slick";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleLogoClick(){
    document.getElementById('menu-trigger').click();
  }
  handleClick(e, status) {
    if(status === 'close'){
      window.location.href = '/';
    }else{
      this.setState({
        condition: !this.state.condition
      });
    }
    
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    }
 
    return (
      <div>
        <div className="headerTop">
         
            <div className="logoTop">
              <a href="javascript:void(0)" onClick={this.handleLogoClick}>
                <img src={logo} alt="logo" className="logo" />
              </a>
            </div>
         

          <div className="menu-trigger">
            <span id="menu-trigger" onClick={this.handleClick}><img src={homeIcon} alt="logo" className="logo" /></span>
          </div>
        </div>

        <div
          className={`${this.props.customClass} ${
            this.state.condition ? "menu menu--open" : "menu"
          }`}
        >
          <div className="menu__item menu__item--1" data-direction="bt">
            <div className="menu__item-inner">
              <div className="mainmenu">
                {/* <Link
                  to="/fed"
                  className="mainmenu__item"
                  onClick={this.handleClick}
                >
                  FED
                </Link> */}
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
          <div className="menu__item menu__item--2" data-direction="lr">
            <div className="menu__item-inner">
              <div className="menu__item-map"></div>
              <Link
                to="/fed"
                className="menu__item-hoverlink"
                onClick={this.handleClick}
              >
                The Coders
              </Link>
            </div>
          </div>
          <div className="menu__item menu__item--3" data-direction="bt">
            <div className="menu__item-inner">
              <div className="sidemenu">
                <Link
                  to="/panel-supportPortal"
                  className="sidemenu__item"
                  onClick={this.handleClick}
                >
                  <span className="sidemenu__item-inner">Support Portal</span>
                </Link>
                <Link
                  to="/panel-community"
                  className="sidemenu__item"
                  onClick={this.handleClick}
                >
                  <span className="sidemenu__item-inner">Community</span>
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
          <div className="menu__item menu__item--4" data-direction="rl">
            <div className="menu__item-inner">
              <p className="label label--topleft label--line">Join us now</p>
              <a href="#">Learn how to participate</a>
            </div>
          </div>
          <div className="menu__item " data-direction="tb">

          <Slider {...settings}>
            <div className="menu__item-inner">
              <p className="quote">
                We build website pixel perfect, were pixel have purpose{" "}
              </p>
            </div>
            <div className="menu__item-inner">
              <p className="quote">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
            <div className="menu__item-inner">
              <p className="quote">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </p>
            </div>
            <div className="menu__item-inner">
              <p className="quote">
              dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
              </p>
            </div>
            </Slider>
          </div>
         
          <button className="action action--close" onClick={()=>{this.handleClick('e','close')}}>
            <img src={closeIcon} alt="" />
          </button>
        </div>
      </div>
    );
  }
}

export default Menu;
