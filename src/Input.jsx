import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ''
    }
  }

  // handleChange(e) {
  //   this.setState({
  //     word: e.target.value
  //   });
  // }

  render() {
    return (
      <div>
        <form>
          <label>
            <input type='text' value={this.props.input} onChange={this.props.onChange}></input>
          </label>
          <input type='submit' value='Submit' onClick={this.props.submit}></input>
        </form>
      </div>

    );
  }
}

export default Input;