import React from 'react';
import { Progress } from 'semantic-ui-react'

export default function CustomProgress(props) {
  return (
    <div>
      <h3 style={{display: "inline"}}>{props.label}</h3>
      <Progress 
        percent={props.percent}
        // label={props.label}
        color={props.color}
        progress="percent"
        active 
      />
    </div>
  )
}