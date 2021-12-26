import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Feedbackitem from './components/Feedbackitem';
import Header from './components/Header';
import FeedbackData from './Data/Feedbackdata';
import Feedbacklist from './components/Feedbacklist';
import Feedbackstats from './components/Feedbackstats';
import Feedbackform from './components/Feedbackform';
import {Feedbackprovider} from './context/Feedbackcontext'
import About from './Pages/About';
import Card from './components/Shared/Card';
import Aboutlink from './components/Aboutlink';
import Post from './components/Post';

function App() {

  return (

    <Feedbackprovider>

    <Router>

      <Header />
      <div className="container">
        <Routes>
          <Route path='/' exact element={
            <>
             <Feedbackform />
            <Feedbackstats />
            <Feedbacklist  />
            </>
          } ></Route>

          <Route path='/about' element={<About/>} />
          <Route path='/post/*' element={<Post/>} />

        </Routes>
        <Aboutlink/>

      </div>

    </Router>
    </Feedbackprovider>

    

  );
}

export default App;


