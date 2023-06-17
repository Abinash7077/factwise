import React, { useState, useEffect } from "react";
import "../App.css";
import {AiFillDelete } from "react-icons/ai";
import {FiEdit2 } from "react-icons/fi";
import {RxCrossCircled } from "react-icons/fi";


import { Accordion, Card } from "react-bootstrap";
import { BsPlus, BsDash } from "react-icons/bs";

const Accordions = ({first,_Id,i,description}) => {
  
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const deleteUser=(index)=>{
    
  }
  console.log("id",_id)

  return (
    <div className="container-fluid wrapper">
      <div className="accordion">
        
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              {first}
              <span>{selected === i ? <BsDash /> : <BsPlus />}</span>
            </div>

            <div className={selected === i ? "content show" : "content"}>
              <div className="input_group">
                <div className="input_data">
                  <label htmlFor="Age"> Age</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Age"
                    value="19 Years"
                  />
                </div>
                <div className="input_data">
                  <label htmlFor="Gender"> Gender</label>
                  <select name="Gender" id="Gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                    <option value="Rather not say">Rather not say</option>
                  </select>
                </div>
                <div className="input_data">
                  <label htmlFor="Age"> Age</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Age"
                    value="19 Years"
                  />
                </div>
              </div>
              {/* text-area data */}
              <div className="input_data">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  value={description}
                  rows="6"
                >
                  {description}
                </textarea>
              </div>
{/* text area ends */}
<div className="icons"><AiFillDelete onClick={deleteUser} className="delete"/><FiEdit2 className="edit"/><p>
  </p></div>
            </div>
          </div>
       
      </div>
    </div>
  );
};
export default Accordions;
