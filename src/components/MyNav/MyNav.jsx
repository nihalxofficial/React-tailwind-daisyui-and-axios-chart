import React from 'react';
import Links from '../Links/Links';

const MyNav = () => {
    const navigationItems = [
  {
    id: 1,
    name: "Home",
    path: "/dashboard"
  },
  {
    id: 2,
    name: "About",
    path: "/profile"
  },
  {
    id: 3,
    name: "Services",
    path: "/settings"
  },
  {
    id: 4,
    name: "Blogs",
    path: "/messages/inbox"
  },
  {
    id: 5,
    name: "Contacts",
    path: "/analytics/overview"
  }
];
    return (
        <div className='flex justify-around'>
            <h3>MyNav</h3>
            <ul className='flex justify-between gap-5'>
                {
                    navigationItems.map(route => <Links route={route}></Links>)
                }
            </ul>
            <button>Sign In</button>
        </div>
        
    );
};

export default MyNav;