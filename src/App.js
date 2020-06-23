import React,{Component} from 'react';
import Nav from './Components/Nav';
import Movies from './Components/Movies';
import Tvshows from './Components/Tvshows';
import movieDetail from './Components/movieDetail'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux';


class App extends Component{
  render() {
    return (
      <BrowserRouter>
      <Nav/>
      <Switch>
            <Redirect exact path="/" to="/movies" />
            <Route path="/movies" exact component={Movies} />
            <Route path="/tvshows" exact component={Tvshows} />
            <Route path= "/movies/:moviename/:movieID" exact component={movieDetail} />
        </Switch>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state =>{
  return {
    movie : state.app.movie
  }
}

export default connect(mapStateToProps) (App);
