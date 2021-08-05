import "./panel.scss";
import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Slider from "../slider/slider";
import "react-tabs/style/react-tabs.css";
export default class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          ids: "onboarding",
          tabheading: "Onboarding",
          content:
            "<div>" +
            "<p>" +
            "Welcome on board! We’re delighted that you have joined us. On behalf of all the members and the management, we would like to extend our warmest welcome and good wishes! We want to ensure that you feel comfortable and hit the ground running. To help you familiarize yourself with the company and the initial steps we have formulated the below details. " +
            "</p>" +
            "<ul>" +
            "<li>Please reset your password using the “<a href='https://update.publicisgroupe.net/' target='_blank'>Update password</a>”. </li>" +
            "<li>Post successful password update, please login to Outlook, Skype, Microsoft Teams using your Lion Login id and password only. </li>" +
            "<li>" +
            "Create an Epsilon github id. Format should be “Epsilon-YourName”." +
            "</li>" +
            "<li>" +
            "Please raise the tech requests as mentioned below. Refer to the Misc section for the links: " +
            "<ul>" +
            "<li>Node js and Git </li>" +
            "<li>Epsilon Jira account creation </li>" +
            "</ul>" +
            "</li>" +
            "<li>Timesheets are submitted on a weekly basis. They are due every Friday 6 PM. Ensure that you have access to your timesheet. Incase of issues, please reach out to Rashmi Badami. </li>" +
            "</ul>" +
            "</div>",
        },
        {
          ids: "funCrew",
          tabheading: "Fun Crew",
          content:
            "<div>" +
            "<p>" +
            "We are the fun champs of our team. We are specialized in ensuring to keep you motivated through are various non-work activities. To name a few, we have conducted the following: " +
            "</p>" +
            "<ul>" +
            "<li>Back to School </li>" +
            "<li>Potluck</li>" +
            "<li>Independence Day celebrations </li>" +
            "<li>Weekly fun activity </li>" +
            "</ul>" +
            "<p>With the new normal, we all are accommodating with virtual activities. We conducted the below activities: </p>" +
            "<ul>" +
            "<li>Tambola</li>" +
            "<li>DIY activity</li>" +
            "</ul>" +
            "</div>",
        },
        {
          ids: "misc",
          tabheading: "Misc",
          content:
            "<div>" +
            "<div>" +
            '<h5>Timesheet - <a href="https://roar.pub/" target="_blank">https://roar.pub/</a></h5>' +
            "</div>" +
            "<div class='border-blk'>" +
            "<p>If allocated to a project, then ask the code from your Project Manager. </p>" +
            "<p>For others use as below: </p>" +
            "<ul>" +
            "    <li>Training:  " +
            "    <ol>" +
            "    <li>Search for “Conversant NonClient Admin Activities”  </li>" +
            "    <li>In the drop down – select “Training” </li>" +
            "    </ol>" +
            "    </li>" +
            "    <li>Holiday/ Leave: " +
            "    <ol>" +
            "    <li>Search for “Conversant Absence Tracking “ </li>" +
            "    <li>" +
            "    In the drop down – select “Holiday” or “Leave” accordingly. " +
            "    </li>" +
            "    </ol>" +
            "    </li>" +
            "</ul>" +
            "</div>" +
            "</div>" +
            "<div>" +
            "<div>" +
            '<h5>Support Portal - <a href="https://support.epsilon.com/sp" target="_blank">https://support.epsilon.com/sp</a></h5></div>' +
            "<div style='margin-bottom:20px;'>" +
            "<h6>New Software request: </h6>" +
            "<p>Home > “Request Something” section > Left vertical menu - Software > New Software Request</p>" +
            "</div>" +
            "<div>" +
            "<h6>" +
            "Github Access:  " +
            "</h6>" +
            "<p>Home > “Request Something” section > Left vertical menu - DST Custom > DST Access Request.  </p>" +
            "</div>" +
            "<div class='border-blk'>" +
            "<p>Note: In the description, please provide your epsilon github id and the repo name. </p>" +
            "</div>" +
            "</div>" +
            "<div class='border-blk'>" +
            ' <h5>Jira - <a href="https://epsilondigital.atlassian.net/servicedesk/customer/portal/1/group/3/create/3 " target="_blank">https://epsilondigital.atlassian.net/servicedesk/customer/portal/1/group/3/create/3</a></h5>' +
            "    " +
            "</div>" +
            "<div class='border-blk'>" +
            '<h5> Goals - <a href="javascript:void(0);">TBD</a></h5>' +
            "</div>" +
            "<div class='border-blk'>" +
            ' <h5>Allsech - <a href="https://www.allsechro.com/epsilon/Common/web_Signon.aspx#! " target="_blank">https://www.allsechro.com/epsilon/Common/web_Signon.aspx#!</a></h5>' +
            "</div>" +
            "<div class='border-blk'>" +
            '<h5>Expense Tool - <a href="https://altair.publicisgroupe.net/irj/portal/#Shell-home " target="_blank">https://altair.publicisgroupe.net/irj/portal/#Shell-home</a></h5>' +
            "</div>" +
            "<div class='border-blk'>" +
            '<h5>Career Destination - <a href="https://epsilon.csod.com/EPM/Reviews/UserReview.aspx " target="_blank">https://epsilon.csod.com/EPM/Reviews/UserReview.aspx</a></h5>' +
            "</div>" +
            "<div>" +
            '<h5>Career Settings - <a href="careersettings.publicisgroupe.net" target="_blank">careersettings.publicisgroupe.net </a></h5>' +
            "</div>" +
            "</div>",
        },
        {
          ids: "DL",
          tabheading: "DLs",
          content:
            "<div>" +
            "<p>FED Team - EBR-Digital-Delivery-DX-FED EBR-Digital-Delivery-DX-FED@epsilonconversant.com </p>" +
            "<p>Fun Crew: fun.crew@epsilonconversant.com </p>" +
            "</div>",
        },
      ],
    };
  }

  componentWillMount() {
    this.setState({ tabIndex: this.getTabIndex(this.props.match.params.id) });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.id !== this.props.match.params.id) {
      this.setState({ tabIndex: this.getTabIndex(newProps.match.params.id) });
    }
  }

  getTabIndex = (tabName) => {
    let currIndex = 0;
    this.state.data.forEach((tabs, index) => {
      if (tabs.ids === tabName) {
        currIndex = index;
      }
    });
    return currIndex;
  };

  render() {
    return (
      <div className="panel-blk">
        <Tabs
          selectedIndex={this.state.tabIndex}
          onSelect={(tabIndex) => this.setState({ tabIndex })}
        >
          <TabList>
            {this.state.data.map((item) => (
              <Tab>{item.tabheading}</Tab>
            ))}
          </TabList>
          {this.state.data.map((item) => {
            if (item.ids === "funCrew") {
              return (
                <div className={item.ids}>
                  <TabPanel>
                    <h2>{item.heading}</h2>
                    <div dangerouslySetInnerHTML={{ __html: item.content }} />
                    <div>
                      <Slider />
                    </div>
                  </TabPanel>
                </div>
              );
            }
            return (
              <div className={item.ids}>
                <TabPanel>
                  <h2>{item.heading}</h2>
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </TabPanel>
              </div>
            );
          })}
        </Tabs>
      </div>
    );
  }
}
