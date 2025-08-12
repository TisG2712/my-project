import React from 'react'
import Category from './components/Category';
import NotCategory from './components/NotCategory';

function App() {

  const isValue = true;

    if(isValue) {
      return <Category />
    } else {
      return <NotCategory />
    }
}

export default App