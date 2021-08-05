import './fed.scss';
import React, { Component } from "react";
import axios from "axios";
import cors from 'cors';
import imgAvatar from "./../../assets/imgAvatar.png";
import Title from "../title/title"
import { API_URI } from '../../axiosConfig';

export default class Fed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      associates: []
    };
  }

  componentDidMount() {
    const url = `${API_URI}/admin/team-member`;

    axios.get(url)
      .then((Response) => {
        console.log(Response.data.associate);
        this.setState({
          associates: Response.data.associate
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="team-wrapper">
        <div className="container-fluid">
          <div className="row">
              <div className="col-sm-12 text-center">
              <Title pageName="Team" />
              </div>
                <div className="d-md-none d-lg-block col-lg-3 col-xl-2"></div>
                <div className="col-md-12 col-lg-9 col-xl-10 team-cont-col">
                  <div className="team-cont-wrap">
                    {this.state.associates.map(associate => (
                      <div className="team-card-wrap">
                        <div className="fed-image-wrap">
                          { associate.associate_img =='' &&
                            <img src={imgAvatar} alt="" className="image" />
                          }
                          <img src={associate.associate_img} alt="" className="image" />
                        </div>
                        <div className="overlay">
                          <h4 className="name" title={associate.associate_name}> {associate.associate_name} </h4>
                          <p className="designation"> {associate.associate_designation} </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
