import React from 'react';
import './Meeting.css'

export interface MeetingProps {
  prop?: string;
}

export function Meeting({prop = 'default value'}: MeetingProps) {
  return <div>
    <img className='icon' src={require('../assets/swirlup_large.png')} alt="Swirlup" />
  </div>;
}
