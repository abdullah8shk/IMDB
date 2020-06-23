import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import {clickedMovie} from '../ActionsCreator/Action'


class movieDetail extends Component {

  componentDidMount(){
    this.props.clickedMovie(this.props.match.params.movieID)
  }

  render() {
    return (this.props.movie && 
        <div className="container mt-5 shadow">
        <div className="row">
          <div className="col-md-4" >
          <img src={`http://image.tmdb.org/t/p/w342${this.props.movie.poster_path}`} alt='....' />
          </div>
          <div className="col-md-8" >
          <p><b>Title : </b>{this.props.movie.title}</p>
          <p><b>Ratings : </b>{this.props.movie.vote_average}/10</p>
          <p><b>Release Date : </b>{this.props.movie.release_date}</p>
          <p><b>OverView : </b>{this.props.movie.overview}</p>
          </div>
        </div>
        </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.app.movie
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({clickedMovie},dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(movieDetail);
