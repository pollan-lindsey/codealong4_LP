import React, { Component } from 'react'
const allNumerals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default class Filter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          numbers: allNumerals
      }
    }
    handleChange = (event) => {
        // user makes selection
        const selectedNum = event.target.value;
        let updatedNumber; //store our updated values
        //selection is checked for certain number
        if (selectedNum === 'odd'){
           updatedNumber = allNumerals.filter(number => number % 2 === 1);
                this.setState({numbers: updatedNumber})    
        } else if (selectedNum === 'even') {
            updatedNumber = allNumerals.filter(number => number % 2 === 0);
            this.setState({numbers: updatedNumber})
        } else {this.setState({numbers: allNumerals})}
        //selection is returned back to user
    }
    render(){
        return(
            <>
            <form>
               
                <select onChange={this.handleChange}>
                    <option value="none">Unfiltered</option>
                    <option value="odd">Odd numbers</option>
                    <option value="even">Even numbers</option>
                </select>
              
            </form>

            {this.state.numbers.map(num =>
                <h1>{num}</h1>
                )}
            </>
        )
    }
}
//this page isn't complete