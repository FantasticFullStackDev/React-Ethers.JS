import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import List from './components/list/list';
import Add from './components/add/add';
import PageNotFound from './components/pagenotfound/pagenotfound';

const App = () => {
    return (
      <div style={{color: 'white', padding: '0px 40px'}}>
        <Header/>
        <Routes>
            <Route path='/' element={<List />} />
            <Route path='/add' element={<Add />} />
            <Route path='/*' element={<PageNotFound />} />
        </Routes> 
      </div>
    );
}

export default App;