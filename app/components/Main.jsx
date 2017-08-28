import React, {Component} from 'react'
import Search from 'Search'
import Table from 'Table'


class Main extends Component {
  render(){
    return (
      <div>
        <Search/>
        <div className='container-fluid'>
          <div className='main row'>
            <Table/>
          </div>
        </div>
      </div>
    )
  }
}

export default Main
