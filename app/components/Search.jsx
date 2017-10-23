import React, {Component} from 'react'
import Redux, {connect} from 'react-redux'
import {startGetWeather} from 'actions'

class Search extends Component{
  handleSearch(e){
    const city = this.refs.city.value;
    if(city){
      this.props.dispatch(startGetWeather(city))
      this.refs.city.value = '';
    }else{
      this.refs.city.focus();
    }
    e.preventDefault()
  }
  render(){
    return (
      <div>
        <nav className='navbar navbar-expand-lg'>
          <a className="navbar-brand" href="#">Weathery</a>
          <div className='seach col'>
              <form onSubmit={this.handleSearch.bind(this)}>
               <div className='input-group'>
                <input ref='city' type='text' className='form-control'   placeholder="Enter city"/>
                  
                  <button type='submit' className='btn'>Confirm</button>

                </div>
              </form>
          </div>
        </nav>
      </div>



    )
  }
}

export default connect()(Search)
