import React from 'react';

function Usercard({userName, userAge}) {
  return (
    <div>
      <h3>{userName}</h3>
      <p>{userAge}</p>
    </div>
  );
}

export default Usercard;
