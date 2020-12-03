import React, { Component } from 'react'
import axios from 'axios'
import './App.css';
import PlayerForm from './Player/PlayerForm'
import PlayerList from './Player/PlayerList'
import PlayerSingle from './Player/PlayerSingle'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      players: [],
      currentPlayers: {},

    }
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this)
  }

  componentDidMount() { 
    const url = 'http://localhost:4000/players';

    axios.get(url)
      .then((res) => { 
        this.setState({
          players: res.data
        })
      })
      .catch((err) => { 
        console.log(err)
      })
  }
  
  updateCurrentPlayer(item) { 
    this.setState({
      currentPlayers: item
    })
  }
  
  render() {
    return (
    <div className="container-fluid">
      <div className="row">
        <div className="col s12" >Menu</div>
      </div>

      <div className="row" >
          <div className="col s3" >
            <PlayerList players={this.state.players} updateCurrentPlayer={this.updateCurrentPlayer} />
          </div>
          <div className="col s9" >
            <PlayerSingle />
          </div>
      </div>
      
      <div className="row" >
          <div className="col s12" >
            <PlayerForm />
          </div>
      </div>

    </div>
    )
  }
}

export default App

