import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function HeroSection({ startTransitionAnim, setStartTransitionAnim}) {
    const [startAnimDelay, setStartAnimDelay] = useState(1.5)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const buttonRef = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            setStartAnimDelay(0);
        }, 1500)
    }, [])

    const mouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = buttonRef.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x, y })
    }

    const mouseLeave = () => {
        setPosition({ x: 0, y: 0 })
    }

    const { x, y } = position;

    const startTransition = () => {
        setStartTransitionAnim('transition');
        setTimeout(() => {
            setStartTransitionAnim('finished')
        }, [1000])
    }

    return (
        <div className='relative'>
            <div
                className="relative bg-fullWhite top-0 left-0 overflow-hidden flex justify-center items-center">
                <motion.div
                    animate={startTransitionAnim === 'transition' && { y: '-120vh', transition: { ease: 'easeInOut', duration: 1 } }}
                    className="h-[120vh] bg-fullWhite w-full rounded-bl-50 rounded-br-50 absolute top-0 left-0 z-[1] mix-blend-difference">
                </motion.div>
                <div>
                    <div className='h-screen flex justify-center items-center flex-col gap-14'>
                        <h1
                            className='flex font-hungry text-7xl justify-center items-center text-fullBlack'>
                            <motion.span
                                initial={{ opacity: 0, y: 100, scale: 0.3 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 0.1, duration: 0.7, type: 'spring', stiffness: 140, mass: 1, damping: 13 }}
                            >P</motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 100, scale: 0.3 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.7, type: 'spring', stiffness: 140, mass: 1, damping: 13 }}
                            >r</motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 100, scale: 0.3 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 0.5, duration: 0.7, type: 'spring', stiffness: 140, mass: 1, damping: 13 }}
                            >a</motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 100, scale: 0.3 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 0.7, duration: 0.7, type: 'spring', stiffness: 140, mass: 1, damping: 13 }}
                            >k</motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 100, scale: 0.3 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 0.9, duration: 0.7, type: 'spring', stiffness: 140, mass: 1, damping: 13 }}
                            >h</motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 100, scale: 0.3 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 1.1, duration: 0.7, type: 'spring', stiffness: 140, mass: 1, damping: 13 }}
                            >a</motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 100, scale: 0.3 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 1.3, duration: 0.7, type: 'spring', stiffness: 140, mass: 1, damping: 13 }}
                            >r</motion.span>
                        </h1>
                        {
                            startTransitionAnim === 'noAnim' && <motion.div ref={buttonRef}
                                onMouseMove={mouseMove}
                                onMouseLeave={mouseLeave}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={startTransitionAnim === 'noAnim' && { opacity: 1, scale: 1 }}
                                transition={{ delay: startAnimDelay, duration: 0.7, type: 'spring', stiffness: 140, mass: 1, damping: 13, x: { ype: 'linear' }, y: { type: 'linear' } }}
                                whileHover={{ backgroundColor: '#fff', color: '#000', x, y }}
                                onClick={startTransition}
                                className='rounded-full border-2 cursor-pointer relative z-[2] border-fullWhite w-28 h-28 flex justify-center items-center font-brigends text-fullWhite'>
                                Click
                            </motion.div>
                        }
                        {
                            startTransitionAnim === 'transition' &&
                            <div className='h-28'> </div>
                        }
                        {
                            startTransitionAnim === 'finished' &&
                            <div className='h-28'>
                                <motion.a
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    href='/'
                                    download='Resume v3.pdf'
                                    className='h-12 w-[18rem] cursor-pointer bg-fullBlack rounded-[50px] flex items-center p-1'>
                                    <motion.div
                                        initial={{ background: 'linear-gradient(to right, #316099, #52A0FF)' }}
                                        className='h-full w-full rounded-[50px] flex justify-center items-center text-fullWhite font-montserrat font-bold text-[15px]'>
                                        Click to download Resume
                                    </motion.div>
                                </motion.a>
                            </div>
                        }
                    </div>
                    {
                        startTransitionAnim === 'finished' &&
                        <>
                        <div className='absolute top-8 left-10 text-xl font-brigends'>
                            PRAKHAR
                        </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}
