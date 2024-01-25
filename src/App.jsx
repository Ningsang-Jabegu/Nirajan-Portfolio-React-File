import { BrowserRouter as Router } from 'react-router-dom';
import DisplayPage from './components/pages/DisplayPage';
import { useState } from 'react';

export default function App() {

  const [activeNavItem,setActiveNavItem] = useState('Home')

  return (
    <>
      <Router>
        <DisplayPage which={activeNavItem} setActiveNavItem ={setActiveNavItem}/>
      </Router>
    </>

  )
}