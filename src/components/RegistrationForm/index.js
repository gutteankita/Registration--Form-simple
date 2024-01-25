// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showErrorFirstName: false,
    showErrorLastName: false,
    isFormSubmitted: false,
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    const isValid = firstName === ''
    this.setState({
      showErrorFirstName: isValid,
    })
  }
  onBlurLastName = () => {
    const {lastName} = this.state
    const isValid = lastName === ''
    this.setState({
      showErrorLastName: isValid,
    })
  }

  onChangeFirstName = event => {
    this.setState({
      firstName: event.target.value,
      showErrorFirstName: false,
    })
  }
  onChangeLastName = event => {
    this.setState({
      lastName: event.target.value,
      showErrorLastName: false,
    })
  }
  onFirstNameInput = () => {
    const {showErrorFirstName} = this.state
    return (
      <>
        <label htmlFor="firstname" className="label">
          First Name
        </label>
        <input
          id="firstname"
          type="text"
          className="input"
          placeholder="First name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
        {showErrorFirstName && <p className="error">required</p>}
      </>
    )
  }

  onLastNameInput = () => {
    const {showErrorLastName} = this.state
    return (
      <>
        <label htmlFor="lastname" className="label">
          Last Name
        </label>
        <input
          id="lastname"
          type="text"
          className="input"
          placeholder="Last name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
        {showErrorLastName && <p className="error">required</p>}
      </>
    )
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    const userDetails = {firstName, lastName}
    console.log(userDetails)

    if (firstName === '') {
      this.setState({
        showErrorFirstName: true,
      })
      return
    } else if (lastName === '') {
      this.setState({
        showErrorLastName: true,
      })
      return
    } else if (firstName === '' && lastName === '') {
      this.setState({
        showErrorFirstName: true,
        showErrorLastName: true,
      })
      return
    }

    this.setState({
      isFormSubmitted: true,
    })
  }
  returnRegistrationForm = event => {
    event.preventDefault()
    this.setState({
      firstName: '',
      lastName: '',
      showErrorFirstName: false,
      showErrorLastName: false,
      isFormSubmitted: false,
    })
  }

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="registration-container">
        <h1 className="heading">Registration</h1>

        {!isFormSubmitted ? (
          <form className="registration-form" onSubmit={this.onSubmitForm}>
            <div className="inputs">{this.onFirstNameInput()}</div>
            <div className="inputs">{this.onLastNameInput()}</div>
            <button type="submit" className="submit-btn">
              submit
            </button>
          </form>
        ) : (
          <form
            className="registration-form"
            onSubmit={this.returnRegistrationForm}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="img"
            />
            <p className="submitted">Submitted Successfully</p>
            <button type="submit" className="submit-btn">
              Submit another Response
            </button>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
