import React from 'react';
import addStyles from '../../libs/styles';


function renderStyles() {
  addStyles(`.atomicjolt-loading-animation {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    flex-direction: column;
    margin: 10rem;
  }`);
  addStyles(`.atomicjolt-loading-animation svg {
    width: 80px;
  }`);
  addStyles(`.atomicjolt-loading-animation svg polygon, .atomicjolt-loading-animation svg polyline {
    fill: none;
    stroke: #333;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 6px;
  }`);
  addStyles(`.atomicjolt-loading-animation svg .cls-1 {
    stroke-dasharray: 0 250;
    animation: line1 1.5s infinite ease;
  }`);
  addStyles(`.atomicjolt-loading-animation svg .cls-2 {
    stroke-dasharray: 0 270;
    animation: line2 1.5s infinite ease;
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
}

export default class Loader extends React.PureComponent {

  render() {
    renderStyles();
    return (
      <div>
        <div className="atomicjolt-loading-animation">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.87 114.09" role="img" aria-label="loading">
            <g data-name="Layer 2">
              <polygon className="cls-1" points="40.45 111.32 89.11 99.26 71.35 19.9 21.1 89.71 40.45 111.32" />
              <polyline className="cls-2" points="50.67 2.77 2.77 69.96 25.47 94.65 66.36 84.13 50.67 2.77 71.35 19.9" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
}
