import React from "react";
import ListDescription from "./listdescription";
import { CSSTransition } from "react-transition-group";
import {Nav,TabContent,Tab,Table} from 'react-bootstrap';
import Moment from 'react-moment';

export default class Fedpopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // this.setState({ key: this.props.card.popupContent[0].key });
  }
  render() {
    let selectedCard = true;
    const frontendArr = this.props.card.tech_stack.frontend.map((item, index) =>  <span key={index}>{item}</span>);
    const backendArr = this.props.card.tech_stack.backend.map((item, index) =>  <p key={index}>{item}</p>);
    const otherTechArr = this.props.card.tech_stack.other.map((item, index) =>  <p key={index}>{item}</p>);
    return (
      <div className="popup_Blk">
        <a
          href="javascript:void(0)"
          onClick={this.props.handleCloseClick}
          className="close"
        >
          close
        </a>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <CSSTransition in={true} appear={true} timeout={600} classNames="slide">
        
          <div className="blk_left">
            <h2 className="proj_Name">
              {this.props.card.project_name}
            </h2>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Project Information</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Technology</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Project Installation</Nav.Link>
              </Nav.Item>
              <Nav.Item className={this.props.card.brands.length? '':'d-none'}>
                <Nav.Link eventKey="fourth">Brands</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </CSSTransition>
        {selectedCard ? (
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <CSSTransition
              in={true}
              appear={true}
              timeout={600}
              classNames="scale"
            >
              <div
                className="blk_right"
                style={{
                  // backgroundImage: `url(${this.props.popupBackground})`
                  backgroundImage: `url(https://liquidplanner-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/HiRes-17.jpg)`
                }}
              >
                {/* <ListDescription description={selectedCard.description} /> */}
                <div class="innerContainer">
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                  <h4 className="projTab">Demographics</h4>
                  <Table  bordered hover>
                    <tbody>
                      <tr>
                        <td>Start Date</td>
                        <td><Moment format="DD/MMM/YYYY">{this.props.card.project_start_date}</Moment></td>
                      </tr>
                      <tr>
                        <td>Overall Progress</td>
                        <td>{this.props.card.overall_status}</td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        {/* <div dangerouslySetInnerHTML={{ __html: this.props.card.project_desc }}></div> */}
                        <td><p dangerouslySetInnerHTML={{ __html: this.props.card.project_desc }}></p></td>
                      </tr>
                      <tr>
                        <td>Project Manager</td>
                        <td>{this.props.card.project_manager}</td>
                      </tr>
                      <tr>
                        <td>Git</td>
                        <td>{this.props.card.git}</td>
                      </tr>
                      <tr>
                        <td>Jira</td>
                        <td>{this.props.card.jira}</td>
                      </tr>
                      <tr>
                        <td>Keywords</td>
                        <td>{this.props.card.keywords}</td>
                      </tr>
                      <tr>
                        <td>Creative</td>
                        <td>{this.props.card.creative}</td>
                      </tr>
                      <tr>
                        <td>Tech Documentation</td>
                        <td>{this.props.card.tech_doc}</td>
                      </tr>
                      <tr>
                        <td>Useful Links</td>
                        <td>{this.props.card.useful_links}</td>
                      </tr>
                    </tbody>
                  </Table>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                  <h4 className="projTab">Technology</h4>
                  <Table  bordered hover>
                    <tbody>
                      <tr>
                        <td>Front end</td>
                        <td>{frontendArr}</td>
                      </tr>
                      <tr>
                        <td>Back end</td>
                        <td>{backendArr}</td>
                      </tr>
                      <tr>
                        <td>Other</td>
                        <td>{otherTechArr}</td>
                      </tr>
                    </tbody>
                  </Table>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                  <h4 className="projTab">Project Installation</h4>
                  <Table  bordered hover>
                    <tbody>
                      <tr>
                        <td>Dependency</td>
                        <td>{this.props.card.command_line.dependency}</td>
                      </tr>
                      <tr>
                        <td>Run</td>
                        <td>{this.props.card.command_line.run}</td>
                      </tr>
                      <tr>
                        <td>Build</td>
                        <td>{this.props.card.command_line.build}</td>
                      </tr>
                    </tbody>
                  </Table>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth" className={this.props.card.brands.length? '': 'd-none'}>
                  <h4 className="projTab">Brands</h4>
                  <Table  bordered hover>
                    {this.props.card.brands.map((brand,i) => (
                      <tbody>
                        <tr>
                          <td>Name</td>
                          <td>{brand.name}</td>
                        </tr>
                        <tr>
                          <td>Creative</td>
                          <td>{brand.creative}</td>
                        </tr>
                        <tr>
                          <td>Github</td>
                          <td>{brand.git}</td>
                        </tr>
                        <tr>
                          <td>Status</td>
                          <td>{brand.status}</td>
                        </tr>
                      </tbody>
                    ))}
                    
                  </Table>
                  </Tab.Pane>
                </Tab.Content>
                </div>
              </div>
            </CSSTransition>
          </div>
        ) : (
          ""
        )}
        </Tab.Container>
      </div>
    );
  }
}
