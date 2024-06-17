import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Admin from './Admin';
import Search from './Search';

import { Amplify } from 'aws-amplify';
//old version of config, still exists in files
//import awsconfig from './aws-exports';

import config from './amplifyconfiguration.json';

import './App.css'
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import { signOut, signIn, signUp } from 'aws-amplify/auth';

Amplify.configure(config);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
    
    {/* <Authenticator>
      {(signOut, user)=>( */}
            <>
            <div>
 
            </div>
            <Router>
              <div>
                <Navbar />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/search" element={<Search />} />
                  </Routes>
              </div>
            </Router>
            
          </>
      {/* )} */}
   {/* </div>  </Authenticator> */}
     </div>

  )
}

export default withAuthenticator(App)
