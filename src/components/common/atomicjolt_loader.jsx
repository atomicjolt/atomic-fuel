import React from 'react';
import PropTypes from 'prop-types';
import addStyles from '../../libs/styles';

import { withSettings } from '../settings';

function renderStyles(logoColor = '#444', backgroundColor1 = '#FFEA00', backgroundColor2 = '#FFFF56') {
  addStyles(`.aj-loader{
    position: relative;
  }`);
  addStyles(`.atomicjolt-loading-animation {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 48px auto;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background-image: linear-gradient(to top right, ${backgroundColor1}, ${backgroundColor2});
    box-shadow: -2px 3px 6px rgba(0,0,0,0.25);
  }`);
  addStyles(`.atomicjolt-loading-animation svg {
    width: 38px;
    position: relative;
    left: -2px;
    top: -1px;
  }`);
  addStyles(`.atomicjolt-loading-animation svg polygon, .atomicjolt-loading-animation svg polyline {
    fill: none;
    stroke: ${logoColor};
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 8px;
  }`);
  addStyles(`.atomicjolt-loading-animation svg .cls-1 {
    stroke-dasharray: 0 250;
    animation: line1 1.5s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }`);
  addStyles(`.atomicjolt-loading-animation svg .cls-2 {
    stroke-dasharray: 0 270;
    animation: line2 1.5s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }`);
  addStyles(`@keyframes line1 {
    0% {
      stroke-dasharray: 0 250;
   }
    40% {
      stroke-dasharray: 250 250;
   }
    60% {
      stroke-dasharray: 250 250;
   }
    100% {
      stroke-dasharray: 0 250;
   }
  }`);
  addStyles(`@keyframes line2 {
    0% {
      stroke-dasharray: 0 270;
   }
    40% {
      stroke-dasharray: 270 270;
   }
    60% {
      stroke-dasharray: 270 270;
   }
    100% {
      stroke-dasharray: 0 270;
   }
  }`);
  addStyles(`.loader-text{
    font-size: 24px;
    font-family: 'Lato', Arial, Helvetica, sans-serif;
    font-weight: 500;
    color: #222;
    text-align: center;
    margin: 0 0 48px;
  }`);
}

export class Loader extends React.PureComponent {

  static propTypes = {
    message: PropTypes.string,
    logoColor: PropTypes.string,
    backgroundColor1: PropTypes.string,
    backgroundColor2: PropTypes.string,
    aj_loader: {
      logoColor: PropTypes.string,
      backgroundColor1: PropTypes.string,
      backgroundColor2: PropTypes.string,
    }
  };

  render() {
    const logoColor = this.props.settings.aj_loader.logoColor || this.props.logoColor || '#444';
    const backgroundColor1 = this.props.settings.aj_loader.backgroundColor1 || this.props.backgroundColor1 || '#FFEA00';
    const backgroundColor2 = this.props.settings.aj_loader.backgroundColor2 || this.props.backgroundColor2 || '#FFFF56';

    renderStyles(logoColor, backgroundColor1, backgroundColor2);

    return (
      <div className="aj-loader">
        <div className="atomicjolt-loading-animation">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.87 114.09" role="img" aria-label="loading">
            <g data-name="Layer 2">
              <polygon className="cls-1" points="40.45 111.32 89.11 99.26 71.35 19.9 21.1 89.71 40.45 111.32" />
              <polyline className="cls-2" points="50.67 2.77 2.77 69.96 25.47 94.65 66.36 84.13 50.67 2.77 71.35 19.9" />
            </g>
          </svg>
        </div>
        <p className="loader-text">{ this.props.message }</p>
      </div>
    );
  }
}

export default withSettings(Loader);
