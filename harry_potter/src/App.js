import React, {Component} from 'react';
import './App.css';
import Character from './Character';
import House from './House';
import Houses from './data';


class App extends Component {

  state = {
    currentIndex: 0,
    char: ""
  }

  showCharacter() {
    this.setState({
      char: < Character char={Houses[this.state.currentIndex].notableCharacter} houseName={Houses[this.state.currentIndex].houseName} />
    })
  }

  nextHouse() {

    if (Houses[this.state.currentIndex + 1]) {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
        char: ""
      })
    } else {
      this.setState({
        currentIndex: 0,
        char: ""
      })
    }
  }

  render() {

    return (
      <div>
        <button onClick={() => this.nextHouse()}>Next House</button>
        <button onClick={() => this.showCharacter()}>Notable Character</button>
        <House house={Houses[this.state.currentIndex]} />
        {this.state.char}
      </div>
    );
  }
}

export default App;