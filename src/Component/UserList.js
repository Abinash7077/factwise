import React, { useState } from 'react';
import UserAccordion from './UserAccordion';

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
   
    // Add more users as needed
  ]);

  const handleSaveUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updatedUser.id ? { ...user, ...updatedUser } : user
      )
    );
  };

  const handleDeleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <div className='container-fluid'>
      {users.map((user) => (
        <UserAccordion
          key={user.id}
          _id={user.id}
          _name={user.name}
          _email={user.email}
          onSave={handleSaveUser}
          onDelete={handleDeleteUser}
        />
      ))}
    </div>
  );
};

export default UserList;
