import React from 'react';
import Header from '../other/Header';
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';

const AdminDashboard = (props) => {
  return (
    <div className='p-5 bg-[#1C1C1C] min-h-screen text-white'>
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
