import React, { useState, useEffect } from "react";
import "../App.css";

import UserComponent from "./UserComponent";

import { Accordion, Card } from "react-bootstrap";
import { BsPlus, BsDash } from "react-icons/bs";

import jsonData from "../celebrities.json";
const UserAccordion = () => {
  const[show,setShow]=useState(false)
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  console.log("id", data);

  return (
    <div className="container-fluid wrapper">
      <div className="accordion">
        {data.map((item, i) => (
          <div className="item">
            <div
              className="title flex align-items-center justify-content-between "
              onClick={() => toggle(i)}
            >
              <div className="display-flex"> <div className=""><img className="listImg" src={item.picture} alt="" /></div>
              
              <div className="">{item.first}
              {item.last}</div></div>
             
              <span>{selected === i ? <BsDash /> : <BsPlus />}</span>
            </div>
            <div className={selected === i ? "content show" : "content"}>
           
            <UserComponent
            item={item}
              id={item.id}
              gender={item.gender}
              country={item.country}
              desc={item.description}
            />
             </div>
               
          </div>
        ))}
     
      </div>
    </div>
  );
};
export default UserAccordion;
