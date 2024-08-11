import { useEffect, useState } from 'react'
import './index.css'
import Navbar from '@/components/Navbar'
import { SelectedPage } from '@/shared/types';
import Home from './components/Home';
import Benefits from './components/Benefits';
import Classes from './components/Classes';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  const [selectedPage,setSelectedPage]=useState<SelectedPage>(SelectedPage.Home);
  const[isTopPage,setIsTopPage]=useState<boolean>(true);
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY===0){
        setIsTopPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      else{
        setIsTopPage(false);
    }
  }
    window.addEventListener("scroll",handleScroll)
    return()=>window.removeEventListener("scroll",handleScroll);
  },[]);
  return (
    <div className='app bg-gray-20'>
    <Navbar
    isTopPage={isTopPage}
     selectedPage={selectedPage} 
     setSelectedPage={setSelectedPage}/>
    <Home setSelectedPage={setSelectedPage}/>
   <Benefits setSelectedPage={setSelectedPage}/> 
   <Classes setSelectedPage={setSelectedPage}/>
   <Contact setSelectedPage={setSelectedPage}/>
   <Footer/> 
    </div>
  )
}

export default App
