import React, { Component } from "react";
import Whatever from "./Whatever";
import NameForm from "./navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: `Hello`,
      placeholder: `Write Something`,
      inputVal: ``,
      hasLoaded: false
    };
  }

  /*  componentDidMount() {
        this.setState({ hasLoaded: !this.state.hasLoaded})
    } */

  handleInput(e) {
    this.setState({ inputVal: e.target.value });
  }

  //handleInput(e) => this.setState({ inputVal: e.target.value })
  toggleLoaded() {
    this.setState({ hasLoaded: !this.state.hasLoaded });
  }

  render() {
    if (this.state.hasLoaded) {
      return (
        <React.Fragment>
          <input
            type="button"
            value="press to load"
            onClick={() => this.toggleLoaded()}
          />
          <h1>
            {this.props.string} {this.state.text}
          </h1>
          <h3>{this.props.name}</h3>
          <h3>{this.props.age}</h3>
          <Whatever pizza={"pepperoni"} />
          <input
            type="text"
            onChange={e => this.handleInput(e)}
            placeholder={this.state.placeholder}
            value={this.state.inputVal}
          />
          <h2>{this.props.str}</h2>
          <NameForm />
        </React.Fragment>
      );
    } else {
      return (
        <div>
          <h1>Loading...</h1>
          <input
            type="button"
            value="press to load"
            onClick={() => this.toggleLoaded()}
          />
        </div>
      );
    }
  }
}

/* let App = () => {
    return (
        <h1>Hello</h1>
    )
} */

export default App;
