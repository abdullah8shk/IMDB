import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { moviesFunction, tvshowsFunction } from '../ActionsCreator/Action';
import { Link} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (

      <nav className="navbar-fixed">
                    <div className="d-flex flex-col navBar">
                        <div className="offset-md-1 mt-1"><Link style={{ textDecoration: 'none', color: 'white' }} to="/movies"><strong className="text-white mr-4" onClick={() =>this.props.moviesFunction(1)}>Movies</strong></Link></div>
                        <div className="mt-1"><Link style={{ textDecoration: 'none', color: 'white' }} to="/tvShows"><strong className="text-white" onClick={() => this.props.tvshowsFunction(1)} >TV Shows</strong></Link></div>
                        <div className="p-1 bg-warning rounded offset-md-1"><strong className='text-dark logoText'>IMDb</strong></div>
                        <input className="ml-3 p-2 searchInp" type="search" placeholder="Search"></input>
                        <button className="px-4 searchBtn"><i className="fa fa-search"></i></button>
                    </div>
                </nav>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ moviesFunction, tvshowsFunction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
