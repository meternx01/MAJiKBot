import React, { Component } from "react";
import "./JumbotronLogged.css";
import $ from 'jquery';

class JumbotronLogged extends Component {
  handleGetStarted = event => {
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
          &&
          window.location.hostname === this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
  }

  render(){
    return(
      <div className="header-container">
        <div className="video-container">
          <video preload="true" autoPlay="true" loop="loop" muted>
            <source src="/images/womantype.mp4" type="video/mp4"/>
          </video>

          <div className="bot-desc">
            <h2 className="desc-title">Welcome to MAJiKBot!</h2>
            <p className="desc-txt">MAJiKBot is a chat interface used to interact with an automated teller over the internet to administrate accounts held by the user. Transfer money, check your accounts, and manage your finances in a simple and convenient way. Time to type and go!</p>
          </div>

          <div className="container btn-desc">
            <a href="#two" onClick={this.handleGetStarted} className="btn btn-primary btn-lggd">Get Started</a>
            <a href="?" className="btn btn-primary btn-lggd">Log Out</a>
          </div>
        </div>
      </div>
    );
  };
}

export default JumbotronLogged;
