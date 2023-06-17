import React,{useState} from 'react';
import {AiFillDelete } from "react-icons/ai";
import {FiEdit2 } from "react-icons/fi";
import {RxCrossCircled } from "react-icons/fi";

const UserComponent = ({id,item,gender,country,desc}) => {
   
   
    const[gende,setGende]=useState(gender)
    const[newcountry,setnewCountry]=useState(country)
    const[description,setDescription]=useState(desc)
    const onChange=(e)=>{
setGende(e.target.value)
setnewCountry(e.target.value)
setDescription(e.target.value)
    }

    const handleChange=(id)=>{
      const itemEdit=item.find((todo)=>todo.id===id)
      if(itemEdit){
       onChange()
      }
    }



  return (
    <>
   
              <div className="input_group">
                <div className="input_data">
                  <label htmlFor="Age"> Age</label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Age"
                    value="age"
                    
                  />
                </div>
                <div className="input_data">
                  <label htmlFor="Gender"> Gender</label>
                  <select name="Gender" id="Gender" onChange={onChange} value={gende} >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                    <option value="Rather not say">Rather not say</option>
                  </select>
                </div>
                <div className="input_data">
                  <label htmlFor="Age"> Country</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Age"
                    value={newcountry}
                    onChange={onChange}

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
                  onChange={onChange}
                >
                  {desc}
                </textarea>
              </div>
{/* text area ends */}
<div className="icons"><FiEdit2  onClick={()=>handleChange(id)}  className="edit" /><p>
  </p></div>
          
      
    </>
  );
}

export default UserComponent;
