import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import buttonStyles from '../../shared-components/mui/buttonStyles';
import { Link } from 'react-router-dom';
import './landing.css';

class Landing extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="columns small-12 landing-container">
          <div className="row align-center text-center">
            <div className="columns small-12">
              <h1 className="app-title">Nutrition Planner</h1>
            </div>
          </div>
          <div className="row align-center">
            <div className="columns small-8">
              <p className="landing-paragraph">The Nutrition Planner is Marc’s revolutionary program that will give you the tools to reach your fitness goals through a personalized breakdown of your macronutrient and caloric needs.</p>
              <p className="landing-paragraph sub1">You’ll have the ability to calculate your caloric needs with ease, thanks to the built-in calorie calculator. Enter a few personal statistics and you'll be given all the information you need to begin building your diet.</p>
            </div>
            <div className="columns small-12 text-center">
              <Link to="/calculator">
                <RaisedButton
                  buttonStyle={buttonStyles.buttonStyle}
                  className='landing-cta'
                  labelStyle={buttonStyles.buttonLabelStyle}
                  label="Get Started"
                  secondary={false}
                />
              </Link>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
};

export default Landing;
