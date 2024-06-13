import React from 'react';

import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';

import './index.css';
import Sidebar from './component/admin/Sidebar';
import Sidebar2 from './component/admin/Sidebar2';
import SidebarProfile from './component/profile/SidebarProfile';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/admin' element={<Sidebar />}></Route>
      <Route path='/staff' element={<Sidebar2 />}></Route>
      <Route path='/customer/profile' element={<SidebarProfile />}></Route>
    </Routes>
   </BrowserRouter>
  );
  // return (
  //   <Router>
  //     <div>
  //       <nav>
  //         <ul>
  //           <li>
  //             <Link to="/home">Home</Link>
  //           </li>
  //           <li>
  //             <Link to="/about">About</Link>
  //           </li>
  //         </ul>
  //       </nav>

  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/about" element={<About />} />
  //       </Routes>
  //     </div>
  //   </Router>
  // );
}

export default App;
