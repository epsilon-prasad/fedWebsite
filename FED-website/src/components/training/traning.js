import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./training.css";
import Title from "../title/title";
import fed from "./../../assets/FED.png";
import email from "./../../assets/email.png";
import gigya from "./../../assets/gigya.png";


export default () => (
  <React.Fragment>
    <Title pageName="Best Practices" />

    <Tabs>
      <div className="image-block">
        <TabList>
          <Tab>
            <img src={fed} />
            <div><span>FED</span></div>
          </Tab>
          <Tab>
            <img src={email} />
            <div><span>Email</span></div>
          </Tab>
          <Tab>
            <img src={gigya} />
            <div><span>Gigya</span></div>
          </Tab>
        </TabList>
      </div>
      <TabPanel>
        <ul className="content-list">
          <li>
            <a href="#" className="training-desc-blk">
              <div className="training-index">1</div>
              <div className="pointer">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="training-desc">Lorem ipsum</div>
            </a>
          </li>
          <li>
            <a href="#" className="training-desc-blk">
              <div className="training-index">2</div>
              <div className="pointer">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="training-desc">Lorem ipsum</div>
            </a>
          </li>
          <li>
            <a href="#" className="training-desc-blk">
              <div className="training-index">3</div>
              <div className="pointer">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="training-desc">Lorem ipsum</div>
            </a>
          </li>
        </ul>
      </TabPanel>
      <TabPanel>
      <ul className="content-list">
          <li>
            <a href="#" className="training-desc-blk">
              <div className="training-index">1</div>
              <div className="pointer">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="training-desc">Lorem ipsum</div>
            </a>
          </li>
          <li>
            <a href="#" className="training-desc-blk">
              <div className="training-index">2</div>
              <div className="pointer">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="training-desc">Lorem ipsum</div>
            </a>
          </li>
          <li>
            <a href="#" className="training-desc-blk">
              <div className="training-index">3</div>
              <div className="pointer">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="training-desc">Lorem ipsum</div>
            </a>
          </li>
        </ul>
      </TabPanel>
      <TabPanel>
      <ul className="content-list">
          <li>
            <a href="#" className="training-desc-blk">
              <div className="training-index">1</div>
              <div className="pointer">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="training-desc">Lorem ipsum</div>
            </a>
          </li>
          <li>
            <a href="#" className="training-desc-blk">
              <div className="training-index">2</div>
              <div className="pointer">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="training-desc">Lorem ipsum</div>
            </a>
          </li>
          <li>
            <a href="#" className="training-desc-blk">
              <div className="training-index">3</div>
              <div className="pointer">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="training-desc">Lorem ipsum</div>
            </a>
          </li>
        </ul>
      </TabPanel>
    </Tabs>
  </React.Fragment>
);
