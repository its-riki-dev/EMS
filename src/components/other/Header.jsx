import React, { useState, useEffect } from 'react';

const Header = (props) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (!props.data) {
      setUsername('Admin');
    } else {
      setUsername(props.data.name);
    }
  }, [props.data]);

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-xl font-medium'>
        Hello, <br />
        <span className='text-3xl font-semibold'>{username} 👋</span>
      </h1>
      <button onClick={logOutUser} className='bg-red-600 hover:bg-red-700 transition duration-300 text-lg font-semibold px-5 py-2 rounded-lg'>
        Logout
      </button>
    </div>
  );
};

export default Header;
