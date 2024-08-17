import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserName } from '../../redux/auth/selectors';

const UserMenu = () => {
  const userName = useSelector(selectUserName);

  return (
    <div>
      <p>Welcome, {userName}!</p>
      {/* Add additional menu items or functionality here */}
    </div>
  );
};

export default UserMenu;


