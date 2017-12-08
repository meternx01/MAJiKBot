import React, { Component } from "react";
import "./Modal.css";
import $ from 'jquery';

class Modal extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleLogin = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (this.state.email === 'mari.vlz13@gmail.com' && this.state.password === 'bootcamp') {
      this.props.login();
      $(".modal").hide();
      $('.modal-backdrop').hide();
      $('.modal-footer').hide();
    }
     else {

      alert('Wrong email or password!');

    }

    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    return(
      <div>
        <div className="modal fade" data-toggle="modal" id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog">
        		<div className="modal-content">
        			<div className="modal-header" align="center">
        				<img className="img-circle" alt="majikbot logo" id="img_logo" src="/images/majlogo.png"/>
        				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
        					<span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
        				</button>
        			</div>

              <div id="div-forms">

                <form className="form-group" id="login-form">
        		       <div className="modal-body">
        				    	<div id="div-login-msg">
                        <span id="text-login-msg">Type your email and password.</span>
                      </div>
        				    	<input
                        id="login_username"
                        className="form-control logname"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value = {this.state.email}
                        onChange= {this.handleInputChange}
                        required/>
        				    	<input
                        id="login_password"
                        className="form-control logname"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value = {this.state.password}
                        onChange= {this.handleInputChange}
                        required/>
                      <div className="checkbox">
                        <label className="check-lab">
                          <input type="checkbox"/> Remember me
                        </label>
                      </div>
                	 </div>
        				   <div className="modal-footer">
                      <div className="mfootc">
                        <button onClick={this.handleLogin} type="submit" className="btn btn-primary login-btn">Login</button>
                      </div>
        				  </div>
                  <div>
                    <small id="login_lost_btn" className="lost-pw"><a>Lost Password?</a></small>
                  </div>
                </form>

              </div>
        		</div>
        	</div>
        </div>
      </div>
    );
  };
}

export default Modal;
