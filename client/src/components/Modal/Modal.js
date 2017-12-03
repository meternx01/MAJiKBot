import React from "react";
import "./Modal.css";

const Modal = () => (

  <div className="modal fade" id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-dialog">
  		<div className="modal-content">
  			<div className="modal-header" align="center">
  				<img className="img-circle" alt="majikbot logo" id="img_logo" src="/images/majikbot.png"/>
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
  				    	<input id="login_username" className="form-control logname" type="email" placeholder="Email" required/>
  				    	<input id="login_password" className="form-control logname" type="password" placeholder="Password" required/>
                <div className="checkbox">
                  <label className="check-lab">
                    <input type="checkbox"/> Remember me
                  </label>
                </div>
          	 </div>
  				   <div className="modal-footer">
                <div className="mfootc">
                  <button type="submit" className="btn btn-primary login-btn">Login</button>
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

);

export default Modal;
