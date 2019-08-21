// There is a React template. Your goal is to create a simple form at the top
// that allows the user to enter in a first name, last name, and phone number
// and there should be a submit button. Once the submit button is pressed, the
// information should be displayed in a list below (automatically sorted by last
// name) along with all the previous information that was entered. This way the
// application can function as a simple phone book.

// Do not worry about the CSS, simply display all the information in a table
// and keep the form as simple as possible as well.

//Submit your code once it is complete and our system will validate your output.

import React from 'react';
import ReactDOM from 'react-dom';

class InformationTable extends React.Component {
  render() {
    const { phoneBookEntries } = this.props

    const listElements = phoneBookEntries.sort((a, b) => (a.lastName.toLowerCase() > b.lastName.toLowerCase()) ? 1 : -1).map((entry) => {
      return (
        <tr>
          <td>{entry.firstName}</td>
          <td>{entry.lastName}</td>
          <td>{entry.phoneNumber}</td>
        </tr>
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {listElements}
        </tbody>
      </table>
    )
  }
}

class PhoneBookForm extends React.Component {
  constructor(props) {
    super(props)

    this.initialState = {
      firstName: '',
      lastName: '',
      phoneNumber: ''
    }

    this.state = this.initialState
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { firstName, lastName, phoneNumber } = this.state;

    return (
      <form>
        <label>First name</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={this.handleChange} />
        <label>Last name</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={this.handleChange} />
        <label>Phone number</label>
        <input
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          onChange={this.handleChange} />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

class Application extends React.Component {
  state = {
    phoneBookEntries: [
      {
        firstName: 'Ed',
        lastName: 'Gim',
        phoneNumber: 999992343,
      },
      {
        firstName: 'Another',
        lastName: 'Name',
        phoneNumber: 5235552342,
      }
    ]
  }

  handleSubmit = phoneBookEntry => {
    const errors = validate(phoneBookEntry.firstName, phoneBookEntry.lastName, phoneBookEntry.phoneNumber);

    if (!errors.length > 0) {
      this.setState({ phoneBookEntries: [...this.state.phoneBookEntries, phoneBookEntry] })
    }
  }

  render() {
    const { phoneBookEntries } = this.state

    return (
      <div className="App">
        <PhoneBookForm handleSubmit={this.handleSubmit}/>
        <InformationTable phoneBookEntries={phoneBookEntries}/>
      </div>
    );
  }
}

function validate(firstName, lastName, phoneNumber) {
  const errors = [];

  if (firstName.length === 0) {
    errors.push("First Name can't be empty");
  }
  if (lastName.length === 0) {
    errors.push("Last Name can't be empty");
  }
  if (phoneNumber.length === 0) {
    errors.push("Phone Number can't be empty");
  }

  return errors;
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);
