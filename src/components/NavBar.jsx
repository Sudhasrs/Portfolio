import React from 'react'
import { User, Zap, FolderOpen, Briefcase, FileText, Award } from 'lucide-react'

const NavBar = ({ scrollToSection }) => {
  return (
   <nav className='w-full'>
    <ul className='flex justify-between items-center gap-6 p-2 text-white'>
      <li className='text-lg font-bold'>Portfolio</li>
        {/* <div className='flex items-center gap-6'>
          <li 
            onClick={() => scrollToSection('about')}
            className='flex items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors'
          >
            <User size={18} /> About
          </li>
          <li 
            onClick={() => scrollToSection('skills')}
            className='flex items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors'
          >
            <Zap size={18} /> Skills
          </li>
          <li 
            onClick={() => scrollToSection('experience')}
            className='flex items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors'
          >
            <Briefcase size={18} /> Experience
          </li>
          <li 
            onClick={() => scrollToSection('certifications')}
            className='flex items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors'
          >
            <Award size={18} /> Certifications
          </li>
          <li 
            onClick={() => scrollToSection('contact')}
            className='flex items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors'
          >
            <FileText size={18} /> Contact
          </li>
        </div>
         */}
    </ul>
   </nav>
  )
}

export default NavBar