import React, { Component } from 'react'
import Ghost from '../Ghost.gif'
import loading from '../loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Ghost} alt={loading} />
      </div>
    )
  }
}

export default Spinner