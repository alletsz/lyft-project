import React, { Component } from 'react';


import Input from './Input.jsx'
import Output from './Output.jsx'
import axios from 'axios';
// import styles from '../styles/Input.css'

// import headerPic from '../dist/lyft.jpg';
// import pic from './NYR_FMF1.jpg'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      string_to_cut: ''
    }
    this.submitHandler = this.submitHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      string_to_cut: e.target.value,
      return_string: ''
    });
  }

  submitHandler(event) {
    event.preventDefault()
    // console.log('was clicked')
    const input = {
      string_to_cut: this.state.string_to_cut

    }

    axios.post('//localhost:3001/test', input)

      .then((res) => {
        console.log(input)
        console.log(res.data)
        console.log(res.data.return_string)

        // this.setState({ return_string: res.data.return_string })
        this.setState({ return_string: res.data.return_string })


      })
      .catch((error) => {
        console.log('error')
      })

    // axios.post('//localhost:3001/test', {
    // })
    //   .then((response) => {
    //     console.log(response)
    //   })
    //   .catch((error) => {
    //     console.log('error')
    //   })
  }



  render() {

    return (
      <div>
        <div>
          {/* <img src={headerPic} alt="header picture" /> */}
          <Input submit={this.submitHandler} onChange={this.handleChange} input={this.state.string_to_cut} />
          <Output alteredStr={this.state.return_string} />
        </div>
      </div>
    );
  }
}

export default App;