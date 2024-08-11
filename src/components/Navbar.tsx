import React, { useState } from 'react'
import { Bars3Icon,XMarkIcon } from '@heroicons/react/16/solid'
import Logo from '@/assets/Logo.png'
import Link from './Link'
import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'

type Props={
    selectedPage:SelectedPage;
    setSelectedPage:(value:SelectedPage)=>void;
    isTopPage:boolean;
}
const Navbar = ({isTopPage,selectedPage,setSelectedPage}:Props) => {
    const flexBetween="flex items-center justify-between";
    const isAboveMediumScreen=useMediaQuery("(min-width:1060px)");
    const[menuToggled,setMenuToggled]=useState<boolean>(false);
    const navBg=isTopPage?"":"bg-primary-100 drop-shadow"

  return (
    <nav>
      <div className={`${navBg} ${flexBetween} fixed top-0 z-30 py-6 w-full`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt='logo'/>

            {isAboveMediumScreen?(
        <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-8 text-sm`}>
                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>

            </div>
            <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
            </div>
            </div>
            ):(
                <button className='rounded-full bg-secondary-500 p-2'
                onClick={()=>setMenuToggled(!menuToggled)}>
                    <Bars3Icon className='h-6 w-6 text-white'/>
                </button>
            )}
        </div>
        </div>
        </div>
        {!isAboveMediumScreen && menuToggled && (
            <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
                <div className='flex justify-end p-12'>
                    <button 
                    onClick={()=>setMenuToggled(!menuToggled)}>
                        <XMarkIcon className='h-6 w-6 text-gray-400'/>
                    </button>
                </div>

                <div className="flex flex-col ml-[33%] gap-8 text-xl">
                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>

            </div>

            </div>
        )}
    </nav>
  )
}

export default Navbar
