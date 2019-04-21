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

          <input type='text' name='input' value={this.props.input} onChange={this.props.onChange}></input>
          <button onClick={this.props.submit}>Submit</button>
          {/* <input type='submit' value='Submit' onClick={this.props.submit}></input> */}
        </form>
      </div>

    );
  }
}

export default Input;