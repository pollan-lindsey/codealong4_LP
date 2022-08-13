//will need to comment out Filter for this to work
//these are just notes I don't have this stuff
//will need modal bootstrap for this to work
import React, { Component } from 'react'


export default class  extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         show: false,
      }
    }
//above specifies that modal doesn't show unless activated
    handleClose = () => {
        this.setState({show: false})
    }
    handleShow = () => {
        this.setState({show: true})
    }

  render() {
    return (
      <>
      <Button variant="primary" onClick={this.handleShow}>Activate Modal</Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.header>
                <Modal.Title>Hey Class 301!</Modal.Title>
            </Modal.header>
            <Modal.Footer>
                <Button variant="danger" onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
      </>
    )
  }
}
