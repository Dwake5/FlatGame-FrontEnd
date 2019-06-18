import React from 'react';
import './App.css';
import GameIndex from './components/GameIndex'
import Nav from './components/Nav';

const URL = 'http://localhost:3001'
const gamesURL = URL + '/games'

class App extends React.Component {

  state = {
    games: [],
    searchTerm: "",
    filterByRating: 0,
  };

  getAllGames = () =>
    fetch(gamesURL)
    .then(resp => resp.json());

  componentDidMount = () => {
    this.getAllGames()
    .then(games => this.setState({ games }));
  };

  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value.toLowerCase() })
  }

  handleRatingFilter = (e) => {
    e.target.value === "No Filter" ? this.setState({ filterByRating: 0 }) : this.setState({ filterByRating: +e.target.value})
  }

  displayGames = () => {
    if (this.state.filterByRating){
      return this.state.games.filter((game)=> {
        return game.metacritic >= this.state.filterByRating
      })
    } else {
      return this.state.games
    }
  }
  
  render() {
    return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Nav handleFilter={this.handleRatingFilter} handleSearch={this.handleSearch} searchTerm={this.state.searchTerm}/>
      <GameIndex games={this.displayGames()} searchTerm={this.state.searchTerm}/>
      <br />
      <p> Made by Danny Wakeling and Nahit Abu-Nijaila </p>
    </div>
    )}
}

export default App;