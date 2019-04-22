import React, { Component } from 'react';
import styles from '../styles/Input.css'
// import from '../dist/styles.css'

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
        <div className={styles.formContainer}>
        <form>

          <input className={styles.inputField} type='text' name='input' value={this.props.input} onChange={this.props.onChange}></input>
          <button className={styles.submitButton} onClick={this.props.submit}>Submit</button>
          {/* <input type='submit' value='Submit' onClick={this.props.submit}></input> */}
        </form>
        </div>
      </div>

    );
  }
}

export default Input;