import React, { useEffect, useState, } from 'react'
import { Navbar, Home, Slider, Hero, Conectme, Fotter } from './components/'
import 'react-toastify/dist/ReactToastify.css';
import { motion, AnimatePresence } from "framer-motion"
function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])
  const hancleonToggle = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <AnimatePresence exitBeforeEnter  >
      <motion.div initial={{ backgroundColor: theme === "dark" ? '#202320' : '#fff' }}
        animate={{ backgroundColor: theme === "dark" ? '#2F2F2F' : '#fff' }}
        exit={{ backgroundColor: theme === "dark" ? '#2F2F2F' : '#fff' }}
        className='   ' >
        <Navbar theme={theme} togglelightandday={hancleonToggle} />
        <Home />

      </motion.div>
    </AnimatePresence>
  )
}

export default App
