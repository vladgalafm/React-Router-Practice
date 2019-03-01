import React, { Component } from 'react';
import UserInfo from './../UserInfo/UserInfo';
import './style.scss';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      allPersonsData: [],
      personData: {},
    };
    this.showPersonsOptionList = this.showPersonsOptionList.bind(this);
    this.showSelectedPersonInfo = this.showSelectedPersonInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.identifyKey = this.identifyKey.bind(this);
  }

  identifyKey(str) {
    const match = /\/people\/(\d+)\//.exec(str);
    return match[1];
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          allPersonsData: data.results,
        });
      });
  }

  handleChange(e) {
    const select = e.target;
    const selectedOption = select.options[select.selectedIndex];
    const optionUrl = this.state.allPersonsData.find(person => selectedOption.value === person.name).url;

    fetch(optionUrl)
      .then(response => response.json())
      .then(data => this.setState({
        personData: data,
      }));
  }

  showPersonsOptionList() {
    return this.state.allPersonsData.map(person => <option key={this.identifyKey(person.url)} value={person.name}>{person.name}</option>);
  }

  showSelectedPersonInfo() {
    return (Object.keys(this.state.personData).length !== 0 && <UserInfo data={this.state.personData} />);
  }

  render() {
    return (
      <div className="users">
        <span className="users__title">
          Choose character:
        </span>
        <select className="users__select" size="1" onChange={this.handleChange.bind(this)}>
          {this.showPersonsOptionList()}
        </select>
        {this.showSelectedPersonInfo()}
      </div>
    );
  }
}

export default Users;