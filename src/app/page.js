'use client'
import './globals.css'

import HeroSection from '@/components/Hero Section/HeroSection'
import Navbar from '@/components/NavBar/Navbar'
import { React , useState} from 'react'
import { useEffect } from 'react/cjs/react.production.min'

export default function Home() {
  const [startTransitionAnim, setStartTransitionAnim] = useState('noAnim');
  return (
    <>
      <Navbar startTransitionAnim={startTransitionAnim}/>
      <HeroSection startTransitionAnim={startTransitionAnim} setStartTransitionAnim={setStartTransitionAnim} />
    </>
  )
}