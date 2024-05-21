import React from 'react'
import UserHome  from '../page/user/userHome'
import { Route,Routes } from 'react-router-dom'
function UserRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserHome />} />
      </Routes>
    </>
  );
}

export default UserRoute
