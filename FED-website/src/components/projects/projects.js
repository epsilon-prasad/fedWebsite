/* eslint-disable no-unused-expressions */
import React from "react";
import Slick from "react-slick";
// import {FED, Email, Gigya} from './projectsnew.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import "./projects.css";
import Fedpopup from "./popup";
import Title from "../title/title";
import axios from 'axios';
import { API_URI } from '../../axiosConfig';


export default class projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopUp: false,
      cards: {}
    };
  } 
  
  componentDidMount(){
       axios.get(`${API_URI}/fed/project-list`)
       .then(response => response.data)
       .then(data => {
         let projArr = data.projects;
         let emailProjects = projArr.filter(proj=>{
                return proj.project_category.toUpperCase() === 'EMAIL';           
          }) 
          let fedProjects = projArr.filter(proj=>{
                return proj.project_category.toUpperCase() === 'FED';           
          }) 
          let gigyaProjects = projArr.filter(proj=>{
                return proj.project_category.toUpperCase() === 'GIGYA';           
          })
          let manageProj = {"Email":emailProjects, "FED":fedProjects, "Gigya":gigyaProjects}
          // console.log(manageProj)
          this.setState({ cards: manageProj });
          // console.log(this.state.cards)
       })

  }
  listClick = ({_id,project_category}) => {
    // console.log(_id)
    this.setState(prevState => ({
      showPopUp: !prevState.showPopUp,
      id: _id,
      project_category: project_category
    }));
  };
  handleClick = () => {
    this.setState({ showPopUp: false });
  };
  render() {
    let {cards} = this.state;  
    let settings = {
      dots: false,
      useCSS: true,
      useTransform: false,
      arrows: true,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
    return (
      
      <React.Fragment>
        
        <Title pageName="Our Work" />
        { this.state.showPopUp && (
          <Fedpopup
            card={cards[this.state.project_category].find(item => item._id === this.state.id)}
            handleCloseClick={this.handleClick}
            popupBackground={
              cards[this.state.project_category].find(item => item._id === this.state.id).background
            }
          />
        )} 
        <div className="container">
          <div className="Fed_List"> 
          {console.log(cards.Email)}
               { 
                Object.keys(cards).map((key, i) => (
                  <div className={cards[key].length> 0? 'wrapper': 'd-none' } key={i}>
                      <h2 className="domain-name">{key}</h2> 
                      <Slick {...settings}>  
                      { cards[key].map((card, i) => ( 
                          <div className={`project-list project-list-${card['_id']}`} onClick={() => this.listClick(card)}  key={i}>
                            <div
                              className="Fed_image"
                              id={card['_id']}
                              style={{ backgroundImage: `url(https://mir-s3-cdn-cf.behance.net/project_modules/disp/4f610e38294007.575c36d5b34c8.jpg)` }}
                            >
                              <div className="Fed_bg">
                                <span>{card.project_name}</span>
                                <span><b>Status: </b>{card.overall_status}</span>
                              </div> 
                            </div> 
                          </div>  
                          )) }
                      </Slick>    
                  </div>
                ))
               }   
          </div>
        </div>
      </React.Fragment>
    );
  }
}
