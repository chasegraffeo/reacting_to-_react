import React, { Component } from 'react';


class NameForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
          messages: []
          
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
       this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        event.preventDefault();
        this.setState({messages: [...this.state.messages,this.state.value]})
      //alert('A name was submitted: ' + this.state.value);
      //prompt('A name was submitted: ' + this.state.value);
    //   this.setState({value: event.target.value});
    }
    
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)} />
      {this.state.messages.map((message, id) => <h3 key={id}>{message}</h3>)}
                </form>        
      );
    }
  }
/* class Navbar extends Component {
   constructor(props){
       super(props)
       this.state = {
        value: `name`

        }
    }

    render() {
        return <h1>{this.state.value}</h1>
    }
   
}*/

export default NameForm