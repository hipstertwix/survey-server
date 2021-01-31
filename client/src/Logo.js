import React from 'react';
import ReactLogo from './psyvey.svg';

export default function Logo() {

  return (
    <div style={{flexGrow: 1}}><img src={ReactLogo} style={{width: 160,verticalAlign: "middle"}}></img></div>
  );
}
