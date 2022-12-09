import {AiOutlineCloseCircle, AiOutlineSearch} from "react-icons/ai"
import Image from 'next/image'
import Link from "next/link"
import { useState } from 'react'
import logo from '../public/asset/logo.jpg'



export default function Header() {
    const [search , setserach]=  useState(false)
    const [active , setactive]=  useState(false)
    const [down, setdown]=  useState(false)
    
   const heandelclick= () =>{
     setdown(!down)
   }


  return (
    <>
    <header className="header max-w section" data-header>
    <div className="container">


      <Link href="/">
        <h2> dev.</h2>
        </Link>

      <nav className={active ? "navbar active" : "navbar"} >
        <ul className="navbar-list">

          <li className="navbar-item">
         <a  className="navbar-link hover:underline" data-nav-link>Home</a>
          </li>

          <li className="navbar-item">
            <a href="#" className="navbar-link hover:underline" data-nav-link>Recent Post</a>
          </li>

          <li className="navbar-item postin" onClick={heandelclick}>
            <a href="#" className="navbar-link hover:underline" 
            >{down ?  "categories ⬇️": "categories ⬆️"}</a>
              <div className={ down ? 'active drop ' : 'drop'}>
              <a> react js </a>
              <a> next js </a>
              <a> javascript </a>
             </div>
          </li>

        </ul> 
        
      </nav>
      

      <div className="wrapper">

        <button className="search-btn" aria-label="search"  onClick={()=> setserach(true)}>
           <AiOutlineSearch/>

          <span className="span">Search</span>
        </button>

        <button className="nav-toggle-btn" aria-label="toggle menu"  onClick={()=> setactive(!active)}>
          <span className="span one"></span>
          <span className="span two"></span>
          <span className="span three"></span>
        </button>

      

      </div>

    </div>
  </header>
    <div className={search ? "search-bar active" : "search-bar"} >

    <div className="input-wrapper">
      <input type="search" name="search" placeholder="Search" className="input-field"/>

      <button className="search-close-btn" onSubmit={ ()=> handelsub}>
        <AiOutlineCloseCircle  onClick={()=> setserach(false)}/>
      </button>

    </div>

    <p className="search-bar-text">Please enter at least 3 characters</p>

  </div>

  <div className={search ? "overlay active" : "overlay" } onClick={()=> setserach(false)}></div>
  </>
  )
}



