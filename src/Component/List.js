import React, { useState,useEffect } from 'react';
import Accordions from './Accordions';


import jsonData from "../celebrities.json";
const List = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      setData(jsonData);
    }, []);

  const handleSaveUser = (updatedUser) => {
    setData((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updatedUser.id ? { ...user, ...updatedUser } : user
      )
    );
  };

  const handleDeleteUser = (userId) => {
    setData((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <div className='container-fluid'>
      {data.map((user,i) => (
        <Accordions
          key={user.id}
          _id={user.id}
          i={i}
          first={user.first}
          description={user.description}
          _email={user.email}
          onSave={handleSaveUser}
          onDelete={handleDeleteUser}
        />
      ))}
    </div>
  );
};

export default List;
