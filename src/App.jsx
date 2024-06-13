import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Admin from './Admin';
// import Search from './Search';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

import './App.css'
import { Authenticator } from '@aws-amplify/ui-react';
import { signOut } from 'aws-amplify/auth';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Authenticator>
      {(signOut, user)=>(
            <>
            <div>
 
            </div>
            <Router>
              <div>
                <Navbar />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                  </Routes>
              </div>
            </Router>
  
          </>
      )}
     </Authenticator>

  )
}

export default App
