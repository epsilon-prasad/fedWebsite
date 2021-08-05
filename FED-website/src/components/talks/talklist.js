import React from "react";
import Title from "../title/title";
import Moment from 'react-moment';


const TrainingList = (props) => {
  return (
    <div className="talksPage">
      <Title pageName="Tech Talks" />
      
      <React.Fragment>
        <h1>Upcoming Training</h1>
        <div className="grid-container innerCntainer">
          {props.training
            .filter((training) => training.training_status.toUpperCase() === "UPCOMING")
            .map((item) => (
              <div className="grid-item" key={item._id}>
                <div className="events">
                  <img
                    src={item.training_url}
                    alt=""
                    className="subject-logo"
                  />
                  <h3 className="subject-name">{item.training_title}</h3>
                  <p className="Date"><Moment format="DD/MM/YYYY">{item.training_date}</Moment></p>
                  <p className="author"> {item.trainer_name}</p>
                  <p className="description">{item.training_description}</p>
                  {/* <div>{item.training_status}</div> */}
                </div>
              </div>
            ))}
        </div>
      </React.Fragment>
      <React.Fragment>
        <h1>Past Training</h1>
        <div className="grid-container innerCntainer">
          {props.training
            .filter((training) => training.training_status.toUpperCase() === "COMPLETED")
            .map((item) => (
              <div className="grid-item" key={item._id}>
                <div className="events">
                  <img
                    src={item.training_url}
                    alt=""
                    className="subject-logo"
                  />
                  <h3 className="subject-name">{item.training_title}</h3>
                  <p className="Date"><Moment format="DD/MM/YYYY">{item.training_date}</Moment></p>
                  <p className="author"> {item.trainer_name}</p>
                  <p className="description">{item.training_description}</p>
                  {/* <div>{item.training_status}</div> */}
                </div>
              </div>
            ))}
        </div>
      </React.Fragment>
    </div>
  );
};

export default TrainingList;
