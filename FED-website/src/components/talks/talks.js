import "./talks.scss";
import React, { Component } from "react";
import axios from "axios";
import TrainingList from "./talklist";
import { API_URI } from '../../axiosConfig';

export default class Talks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      training: [],
    };
  }

  componentDidMount() {
    const url = `${API_URI}/fed/training`;
    axios
      .get(`${API_URI}/fed/training`)
      .then((Response) => {
        console.log(Response.data)
        this.setState({
          training: Response.data.training,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="TrainingBlock">
        <TrainingList training={this.state.training}/>
      </div>
    );
  }
}
