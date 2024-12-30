import React from 'react'
import {motion} from 'framer-motion'
const App = () => {
  return (
    <div>
      <motion.div 
      drag
      // dragDirectionLock='true'
      dragConstraints={
        {
          top:0,
          left:0,
     
        }
      }
      whileHover={{
        backgroundColor:'green'
      }}
    
      initial={{
        x:100
      }}
      animate={{
        x:1000,
        y:300,
        rotate:360
      
      }}
      transition={{
        duration:2,
        delay:2,
        repeat:Infinity,
        ease:'anticipate'

      }}
       id="box">

      </motion.div>
    </div>
  )
}

export default App