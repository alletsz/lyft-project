import React from 'react';
import styles from './styles/Output.css'

const Output = (props) => (
  <div>
    <div className={styles.outputContainer}> 
    <div className={styles.output}>{props.alteredStr}</div>
    </div>
  </div>
)

export default Output;