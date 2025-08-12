import React from 'react'

function App() {

  const content1 = <div>This is content 1</div>
  const content2 = <div>This is content 2</div>
  const isValue = false;

    if(isValue) {
      return content1;
    }
      return content2;
}

export default App