import React, { useState } from "react";
import "./option.css";

function MyOption () {
   const [myChoice, choices] = useState("On Going");
   
  const handleChange = (event) => {
    choices(event.target.value)
  }

  return (
    <form>
      <select value={myChoice} onChange={handleChange} className="px-2 cursor-pointer">
        <option value="On Going" className="on-going">🟢On Going</option>
        <option value="Pending" className="pending">🟠Pending</option>
        <option value="Complete" className="complete">🔵Complete</option>
      </select>
    </form>
  )
}

export default MyOption;
/*
* *This is the option component that will be used to display the status of the tasks.
*/