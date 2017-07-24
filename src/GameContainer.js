import React, { Component } from 'react';
import Welcome from './Welcome';
import Guess from './Guess';


export default class GameContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startGame: false
    };
  }

  render() {
    return <Welcome/>;
  }
}
