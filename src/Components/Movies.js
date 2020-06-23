import React, { Component } from 'react';
import { connect } from 'react-redux';
import {moviesFunction,clickedMovie} from '../ActionsCreator/Action'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class Movies extends Component {

state={
  page:1
}

 page(){
  this.setState({
    page: this.state.page+1
  },()=>this.props.moviesFunction(this.state.page))
}


componentDidMount(){
  if(this.props.movies.length === 0)
  this.props.moviesFunction(this.state.page)
}

  render() {
    return (
      <div className ='row'>
        {this.props.movies.map((element, index) => {
          return (
            <div className="col-md-2" key={index}  >
              <div className="cardcss">
              <Link style={{textDecoration:"none",color:"black"}} 
              to={`/movies/${element.original_title.trim().replace(/ /g,"_")}/${element.id}`}>
            <div className='card' style={{ width: '10rem',height:'22rem' }}>
              <img
                src={`http://image.tmdb.org/t/p/w185${element.poster_path}`}
                className='card-img-top'
                alt='...'
              />
              <div className='card-body'>
                <h6 className='card-title'>{element.original_title}</h6>
              </div>
            </div>
           </Link>
              </div>
            </div>
          );
        })}
        <div>
        <button onClick={()=>this.page()} >Load More</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.app.movies,
    movie: state.app.movie
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({moviesFunction,clickedMovie},dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
