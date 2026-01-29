// src/components/UserProfile.jsx
import React, { useContext } from 'react'; // Checks for "react" and "useContext"
import UserContext from '../UserContext';  // Checks for "UserContext"

function UserProfile() {
  // Consuming the context
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
