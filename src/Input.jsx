import React, { Component } from 'react';
import styles from './styles/Input.css'

class Input extends Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    return (
      <div>
        <div className={styles.formContainer}>
        <form>

          <input className={styles.inputField} type='text' name='input' placeholder='Please type word here' value={this.props.input} onChange={this.props.onChange}></input>
          <button className={styles.submitButton} onClick={this.props.submit}>Submit</button>
        </form>
        </div>
      </div>

    );
  }
}

export default Input;