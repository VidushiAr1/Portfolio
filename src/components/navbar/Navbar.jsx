import React from 'react'
import { motion } from 'framer-motion'

import "./navbar.scss"

import Sidebar from '../sidebar/Sidebar'

export default function Navbar() {
  return (
      <div className="navbar">
          <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Vidushi Arora
                </motion.span>
                <div className="social">
                    <a target="_blank" href="https://github.com/VidushiAr1">
                        <img src="/github.png" alt="" />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/vidushi-arora-841a21235">
                        <img src="/linkdin.png" alt="" />
                    </a>
                </div>
            </div>
      </div>
  )
}
