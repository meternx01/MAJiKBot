import React, { Component } from "react";
import "./Form.css";
import Modal from "../Modal"

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (this.state.firstName || this.state.lastName) {
      alert("Fill out your first and last name please!");
    } else if(this.state.email) {
      alert("You must provide a valid email!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.firstName} ${this.state
          .lastName}`
      );
    } else if (this.state.password !== this.state.confirmPassword) {
      alert(
        `Passwords do not match!`
      );
    }
     else {
      alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    }

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  render() {

    return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card regform">
            <div className="card-block">

              <h3 className="card-title regtitle">Sign Up Today</h3>
              <span className="sexy_line"></span>
                <form className="regforminp">
                  <div className="row">
                    <div className="form-group col-sm-6">
                       <input
                         className="form-control reginput"
                         value={this.state.firstName}
                         name="firstName"
                         onChange={this.handleInputChange}
                         type="text"
                         placeholder="First Name"/>
                    </div>

                    <div className="form-group col-sm-6">
                      <input
                        className="form-control reginput"
                        value={this.state.lastName}
                        name="lastName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Last Name"/>
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control reginput"
                      value = {this.state.email}
                      placeholder="Enter email"
                      name= "email"
                      onChange={this.handleInputChange}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>

                   <div className="form-group">
                    <input
                     type="password"
                     className="form-control reginput"
                     value = {this.state.password}
                     placeholder="Password"
                     name="password"
                     onChange = {this.handleInputChange}
                     />
                     <small id="passwordReq" className="form-text text-muted">Password must be a minimum of 6 characters.</small>
                   </div>

                   <div className="form-group">
                    <input
                      type="password"
                      className="form-control reginput"
                      value = {this.state.confirmPassword}
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      onChange = {this.handleInputChange}
                      />
                  </div>

                </form>
              <div className="btndiv">
                <div className="row">
                  <div className="col-sm-12">
                    <button onClick={this.handleFormSubmit} className="btn btn-primary formbtn">Create an Account</button>
                  </div>
                </div>

                <span className="form-inline smtxt">
                  <small className="form-text">Already have an account? <a href="#" data-toggle="modal" data-target="#login-modal">Login here.</a></small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal/>
    </div>
  );

  }
}

export default Form;
