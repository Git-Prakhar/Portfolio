'use client'
import './globals.css'

import HeroSection from '@/components/Hero Section/HeroSection'
import Navbar from '@/components/NavBar/Navbar'
import {useRef, React, useState } from 'react'
import { clamp, useMotionValueEvent, useScroll } from 'framer-motion'

export default function Home() {
  const [startTransitionAnim, setStartTransitionAnim] = useState('noAnim');
  const nameRef = useRef(null);
  const occRef = useRef(null);

  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, "change", (latest) => {
    let temp = -50;
    temp = -50 + (latest / 7);
    temp = clamp(-50, 0, temp);
    nameRef.current.style.left = `${temp}vw`;
    occRef.current.style.right = `${temp}vw`;
  })

  return (
    <div className=''>
      <Navbar startTransitionAnim={startTransitionAnim} />
      <HeroSection startTransitionAnim={startTransitionAnim} setStartTransitionAnim={setStartTransitionAnim} />
      {
        startTransitionAnim === 'finished' &&
        <div className='flex justify-center items-center flex-col relative font-brigends text-7xl top-[-40px] overflow-hidden'>
          <h1 ref={nameRef} id='strokeText' className={`w-fit relative`} style={{left: '-50vw'}}>PRAKHAR KHANDELWAL</h1>
          <h1 ref={occRef} className={`text-fullRed w-fit mt-3 relative`} style={{right: '-50vw'}}>MERN DEVELOPER</h1>
        </div>
      }
    </div>
  )
}