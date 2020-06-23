import React, { Component } from 'react';
import { connect } from 'react-redux';
import {tvshowsFunction,clickedTvshow} from '../ActionsCreator/Action'
import { bindActionCreators } from 'redux';

class Tvshows extends Component {

    
state={
    page:1
  }
  
   page(){
    this.setState({
      page: this.state.page+1
    },()=>this.props.tvshowsFunction(this.state.page))
  }
  

  render() {
    return (
      <div className ='cardcss row'>
        {this.props.tvshows.map((element, index) => {
          return (
              <div className="col-md-2" key={index} onClick={()=> this.props.clickedTvshow(index)} >
            <div className='card' style={{ width: '10rem',height:'22rem' }}>
              <img
                src={`http://image.tmdb.org/t/p/w185${element.poster_path}`}
                className='card-img-top'
                alt='...'
              />
              <div className='card-body'>
                <h6 className='card-title'>{element.original_name}</h6>
              </div>
            </div>
            </div>
          );
        })}
        <div>
            <button onClick={()=> this.page()} >Load More</button>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tvshows: state.app.tvshows
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({tvshowsFunction,clickedTvshow},dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Tvshows);
