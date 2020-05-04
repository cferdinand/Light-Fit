import React, { Component } from "react";
import axios from "axios";
import actions from "../helpers/messageActions";
import MessageList from "./MessageList";

class Messages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prompts: [],
      selected: "Morning",
      string: "",
      entry: "",
      loading: true,
    };

    //CRUD
    this.postEntries = this.postEntries.bind(this);

    //Input Handlers
    this.handleSubmit = this.handleSubmit.bind(this);
    this.filter = this.filter.bind(this);
    this.addActiveTab = this.addActiveTab.bind(this);
    this.removeActiveTab = this.removeActiveTab.bind(this);
  }

  componentDidMount() {
    actions.getEntries("Morning").then((entries) => {
      this.setState({ prompts: entries });
    });
    this.setState({ loading: false });
  }

  postEntries(newMessage) {
    return actions
      .post(newMessage)
      .then(() => {
        return actions.getEntries(selected);
      })
      .then((entries) => {
        this.setState({ prompts: entries, loading: false });
      })
      .catch((err) => console.log(err));
  }

  updateEntries(obj) {
    actions
      .edit(obj)
      .then(() => {
        return actions.getEntries(selected);
      })
      .then((entries) => {
        this.setState({ prompts: entries });
      })
      .catch((err) => console.log(err));
  }

  handleSubmit(newMessage) {
    this.setState({ loading: true });
    this.postEntries(newMessage);
  }

  filter(event) {
    event.persist();
    let tab = event.target;
    this.removeActiveTab();
    this.addActiveTab(tab);
    this.setState({ selected: tab.innerText });
    actions.getEntries(tab.innerText).then((entries) => {
      this.setState({ prompts: entries });
    });
  }

  removeActiveTab() {
    const tabs = document.querySelectorAll("li.time_picker_item");
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
  }

  addActiveTab(tab) {
    tab.classList.add("active");
  }

  render() {
    const loading = this.state.loading;

    if (loading) {
      return null;
    }

    const TimeSelector = () => {
      let classes = "";
      let times = ["Morning", "MidDay", "Afternoon", "Evening"];
      return times.map((time, idx) => {
        if (time === this.state.selected) {
          classes = "time_picker_item active";
        } else {
          classes = "time_picker_item";
        }
        return (
          <li
            className={classes}
            onClick={(event) => {
              this.filter(event);
            }}
          >
            {time}
          </li>
        );
      });
    };

    return (
      <div className="loader">
        <table className="prompts_table">
          <thead className="header message_list_header">
            <tr className="header_row time_picker_row">
              <th className="time_picker_header" colSpan="3">
                <ul className="time_picker">
                  <TimeSelector />
                </ul>
              </th>
            </tr>
            <tr className="header_row list_header">
              <th>Prompt</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="all_prompt_messages">
            <MessageList list={this.state.prompts} context={this} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Messages;
