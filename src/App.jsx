// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react';
import { BookList } from './componente/BookList';
import { Title } from './componente/title';
import './App.css'
import { Condition } from './componente/condision';

function App() {
  return (
    <>
     <Condition/>
      <Title color='#6194c1' />
      <BookList/>
    </>
  )
}

export default App
