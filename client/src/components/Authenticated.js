import React from 'react';

//authenticated user
export default ({ context  }) => {
  const authUser = context.authenticatedUser;
  return (
  <div className="bounds">
    <div className="grid-100">
      <h1>{authUser.name} is authenticated!</h1>
      <p>Your username is {authUser.emailAddress}.</p>
    </div>
  </div>
  );
}