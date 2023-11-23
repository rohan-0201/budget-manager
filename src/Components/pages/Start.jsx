import React from "react";
import "/Users/sahana/Documents/college/WT/REACT/project copy/src/Components/styles.css";

class ImageComponent extends React.Component {
  render() {
    return (
      <div className="page">
        <div>
        <img id='pig' src="pig.png" alt="Where Every Dollar Finds Its Purpose" />
        <h2 className="head">" Where every penny matters"</h2>
        </div>
        <div>
        <label className="text">
          Welcome to PIGGY PURSE your go-to platform for simple and effective
          budget management. Take control of your finances effortlessly with our
          intuitive dashboard, smart expense tracking, and customizable budgets.
          Set goals, plan for the future, and enjoy the security of our
          state-of-the-art encryption. Sign up today and achieve financial
          well-being with ease!
        </label></div>
        <div className="footer">
          <div className="social-links">
            <a href="https://www.facebook.com">Facebook</a>
            <a href="https://www.instagram.com">Instagram</a>
            <a href="https://www.reddit.com">Reddit</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageComponent;