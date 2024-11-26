import React, { useState, useEffect } from 'react';

function Header(props) {
  const [userName, setUserName] = useState('Animesh'); // Default to 'Admin'

  useEffect(() => {
    if (props.data) {
      setUserName(props.data.firstName);
    }
  }, [props.data]); // Only update when props.data changes

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{userName} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-lg'
      >
        Log Out
      </button>
    </div>
  );
}

export default Header;