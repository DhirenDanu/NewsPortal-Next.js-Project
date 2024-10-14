"use client"
import Link from 'next/link';
import React from 'react'
import { Switch } from "@/components/ui/switch"
import { IoMenu } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
  

const Navbar = () => {
    
  const[isMobileMenuOpen,setIsMobileMenuOpen]=React.useState(false);
  const toggleMobileMenu=()=>{
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  const pathname = usePathname();

  return (
    <>
      <header className='py-4 bg-white text-gray-900 shadow-md transition-colors  duration-300'>
        <nav className='max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6'>
               {/* Logo */}
               <div className='text-2xl font-bold'>
                <Link href="/" >Daily News</Link>
               </div>

               {/* NavigationMenu */}
               <NavigationMenu className='hidden lg:flex  font-semibold'>
                   <NavigationMenuList className='flex space-x-8 '>
                   
                     <NavigationMenuItem>
                         <NavigationMenuLink href="/news" className={`hover:text-gray-500 ${pathname === '/news' ? 'text-red-500' : ''}`}>News</NavigationMenuLink>
                     </NavigationMenuItem>
                     
                     <NavigationMenuItem>
                           <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                              <NavigationMenuContent >
                                   <NavigationMenuLink >
                                    <ul className='p-3  bg-white space-y-3 '>
                                        <li className='hover:scale-110 '> Blockchains</li>
                                        <li className='hover:scale-110'> Ai/Ml</li>
                                        <li className='hover:scale-110'> Web3 </li>
                                        <li className='hover:scale-110'> App</li>
                                    </ul>
                                   </NavigationMenuLink>
                             </NavigationMenuContent>
                     </NavigationMenuItem>

                     <NavigationMenuItem>
                     <NavigationMenuLink   href="/about"   className={`hover:text-gray-500 ${pathname === '/about' ? 'text-red-500' : ''}`}>About</NavigationMenuLink>
                     </NavigationMenuItem>

                     <NavigationMenuItem>
                         <NavigationMenuLink href="/contact" className={`hover:text-gray-500 ${pathname === '/contact' ? 'text-red-500' : ''}`}>Contact</NavigationMenuLink>
                     </NavigationMenuItem>
                  
                     
                  
                   </NavigationMenuList>
               </NavigationMenu>
                <div>
                    <div className='flex items-center justify-center gap-2'>
                        <span className=" mr-2"> DarkMode</span>
                        <Switch className='  '/>
                        <Button className='bg-slate-200 border rounded-full  px-4 py-2 hover:bg-slate-300 transition-all duration-300'>Login</Button>

                    </div>
                </div>

                {/* Hamburgermenu */}
                <div className='lg:hidden '>
                  <Button onClick={toggleMobileMenu } className="'bg-slate-200 border rounded-full"  >
                    {
                      isMobileMenuOpen ? (<IoCloseCircle size={(24)}  />): (<IoMenu />)
                    }
                        
                  </Button>
                </div>
        </nav>
        
        </header>   
    </>
  )
}

export default Navbar
