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
  const showBookClicked = () => {
    setShowBooks(!showBooks);
  }
  const [libraraianName, setLibraraianName] = useState(false);
  const inputLibrarianName = () => {
    setLibraraianName(true);
    setShowLibraraianName(true);
  }
  const [input, setInput] = useState('');
  const insertInput = (e) => {
    console.log('input:', e);
    setInput(e);
  }
  const [ShowinputName, setShowLibraraianName] = useState(false);
  const ShowLibraraianName = () => {
    setShowLibraraianName();
  }
  return (
    <>
      <div id='body'>
        <Title color='#6194c1' />
        <Condition />
        <div id='buttons'>
          <div id='librarianName'>
            {libraraianName ? '' : <button id='buttonInput' onClick={inputLibrarianName} >הכנס שם ספרנית</button>}
            {ShowinputName ? <input id='inputLibrary' type="text" placeholder='שם ספרנית' onKeyDown={(e) => {
              if (e.key === "Enter") {
                insertInput(e.target.value);
                ShowLibraraianName(false);
              }
            }} /> : ''}
            {input ? <p>שלום לספרנית  {input}😊 </p> : ''}
          </div>
          {showBooks ? <BookList /> :
            <button onClick={showBookClicked} > {showBooks ? '' : 'להצגת ספרים'} </button>}
        </div>

      </div>
    </>
  )
}

export default App