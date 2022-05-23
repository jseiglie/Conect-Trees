import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const VbTab = () => {
    const navigate = useNavigate();
    const [ToggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
      };
      const getActiveClass = (index, className) =>
      ToggleState === index ? className : "";



      
  return (
    <div>VbTab.component</div>
  )
}

export default VbTab