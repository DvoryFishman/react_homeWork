// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react';
import { BookList } from './componente/BookList';
import { AuthorList } from './componente/authorList';
import { Title } from './componente/title';
import './App.css'
import { Condition } from './componente/condision';
import { useState } from 'react';
function App() {
const [showBooks, setShowBooks] = useState(false);
const showBookClicked =() =>{
  setShowBooks(!showBooks);
}
  return (
    <>
     <Condition/>
      <Title color='#6194c1' />
      <button onClick={showBookClicked} > {showBooks ? 'להצגת סופרים' : 'להצגת ספרים'} </button>
      {showBooks ?  <BookList/> :<AuthorList/>}
     
    </>
  )
}

export default App
