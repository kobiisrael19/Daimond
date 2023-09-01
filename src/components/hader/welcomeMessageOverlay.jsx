import React from "react";
import "./welcomeMessageOverlay.css"

const WelcomeMessageOverlay = ({ username }) => {
  return (
    <div className="overlay">
      <div className="welcome-message-modal">
        <p>ברוך הבא, {username}!</p>
       <p>תודה על הרשמתך , הרשמתך נקלטה בהצלחה.</p>
       <p className="fw-bold">נא בצע התחברות לחשבונך...</p>
      </div>
    </div>
  );
};

export default WelcomeMessageOverlay;
