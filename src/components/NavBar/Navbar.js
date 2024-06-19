import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar({ startTransitionAnim }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {startTransitionAnim === 'finished' && <div
                className='fixed right-0 top-0 z-[999]'>
                <motion.div
                    initial={{ backgroundColor: '#3F3F3F', scale: 0}}
                    animate={isOpen ? { backgroundColor: '#fff', scale: 1} : { backgroundColor: '#3F3F3F', scale: 1 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className='w-16 h-16 cursor-pointer bg-lightBlack rounded-full relative z-[999] top-8 right-10 gap-1 flex flex-col justify-center items-center'>
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 0 }}
                        className='h-1 w-1/2 bg-fullWhite rounded-[10px]' />
                    <motion.div
                        initial={{ rotate: 0, backgroundColor: '#fff' }}
                        animate={isOpen ? { rotate: 45, backgroundColor: '#3F3F3F' } : { rotate: 0 }}
                        className='h-1 w-1/2 bg-fullWhite rounded-[10px]' />
                    <motion.div
                        initial={{ rotate: 0, y: 0, backgroundColor: '#fff' }}
                        animate={isOpen ? { rotate: -45, y: -8, backgroundColor: '#3F3F3F' } : { rotate: 0, y: 0 }}
                        className='h-1 w-1/2 rounded-[10px]' />
                </motion.div>
                <motion.div
                    initial={{ borderRadius: '250px 0 0 250px', x: 600 }}
                    animate={isOpen ? { x: 150, borderRadius: '0px' } : { x: 560, borderRadius: '250px 0 0 250px' }}
                    transition={{
                        duration: 1,
                        type: 'spring',
                        stiffness: 100,
                        mass: 1,
                        damping: 12
                    }}
                    className='fixed right-0 top-0 bg-lightBlack h-screen w-[600px] z-[998] flex items-center'>
                    <div className='relative left-20 flex flex-col gap-14'>
                        <div className='font-montserrat font-semibold text-[#9B9B9B] flex flex-col gap-6'>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={isOpen ? { opacity: 1, y: 0, transition: { delay: 0.7 } } : { opacity: 0, y: 20 }}
                            >Navigation</motion.span>
                            <motion.div className='h-0.5 bg-[#9B9B9B]'
                                initial={{ width: 0 }}
                                animate={isOpen ? { width: '300px', transition: { delay: 0.7 } } : { width: 0 }}
                            ></motion.div>
                        </div>
                        <div className='font-brigends text-fullWhite flex flex-col gap-8 text-3xl'>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isOpen ? { opacity: 1, y: 0, transition: { delay: 1 } } : { opacity: 0, y: 20 }}
                            >Home</motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isOpen ? { opacity: 1, y: 0, transition: { delay: 1.2 } } : { opacity: 0, y: 20 }}
                            >About</motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isOpen ? { opacity: 1, y: 0, transition: { delay: 1.3 } } : { opacity: 0, y: 20 }}
                            >Projects</motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isOpen ? { opacity: 1, y: 0, transition: { delay: 1.4 } } : { opacity: 0, y: 20 }}
                            >Contact</motion.div>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div>
                                <div className='font-montserrat font-semibold text-[#9B9B9B] flex flex-col gap-6'>
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isOpen ? { opacity: 1, y: 0, transition: { delay: 1.6 } } : { opacity: 0, y: 20 }}
                                    >Socials</motion.span>
                                    <motion.div className='h-0.5 bg-[#9B9B9B]'
                                        initial={{ width: 0 }}
                                        animate={isOpen ? { width: '300px', transition: { delay: 1.7 } } : { width: 0 }}
                                    ></motion.div>
                                </div>
                            </div>
                            <div className='font-brigends text-[#D0D0D0] grid grid-cols-2 text-center'>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isOpen ? { opacity: 1, y: 0, transition: { delay: 1.8 } } : { opacity: 0, y: 20 }}
                                >LinkedIn</motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isOpen ? { opacity: 1, y: 0, transition: { delay: 2 } } : { opacity: 0, y: 20 }}
                                >Github</motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isOpen ? { opacity: 1, y: 0, transition: { delay: 2.2 } } : { opacity: 0, y: 20 }}
                                >Twitter</motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isOpen ? { opacity: 1, y: 0, transition: { delay: 2.4 } } : { opacity: 0, y: 20 }}
                                >Instagram</motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div >
            </div >}
        </>
    )
}
