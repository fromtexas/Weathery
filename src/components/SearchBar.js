import React, {Component} from 'react';
import { getWeatherAction } from '../actions/weatherActions';
import {connect} from 'react-redux';


class SearchBar extends Component {

  constructor (props){
    super(props);
    this.state = {
      city: ''
    }
  }


  get = (e) => {
    e.preventDefault();
    this.props.getWeatherAction(this.state.city);
  }

  onChange = (e) => {
    this.setState({city: e.target.value});
  }

  render() {
    return (
      <div className='searchbar'>
        <form onSubmit={this.get} className='searchbar__form'>
          <input value={this.state.city} onChange={this.onChange} className='searchbar__input' type='text' placeholder='Enter city' />
          <button className='searchbar__button' type='submit'>Confirm</button>
        </form>
      </div>
    );
  }
}

export default connect (null, {getWeatherAction})(SearchBar);