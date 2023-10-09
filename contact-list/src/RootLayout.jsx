import React from 'react'
import { Outlet } from 'react-router-dom'
import AnimatedOutlet from './AnimatedOutlet';
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { mainVariants } from './variants';


const RootLayout = () => {

  const location = useLocation()
  const [animationKey, setAnimationKey] = useState(location.pathname)

  useEffect(() => {
    setAnimationKey(location.pathname)
  }, [location])

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={animationKey}
        location={location}
        variants={ mainVariants }
        initial='hidden'
        animate='visible'
        exit='exit'
        // transition={{ ease: 'easeInOut', duration: 1 }}
      >
        <AnimatedOutlet />
      </motion.div>
    </AnimatePresence>
  )
}

export default RootLayout