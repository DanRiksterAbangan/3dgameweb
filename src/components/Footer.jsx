import React from 'react'
import { FaDiscord, FaFacebook } from 'react-icons/fa'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti';

const links = [
  { href: 'https://discord.gg/gnpBgSrA', icon:<FaDiscord />},
  { href: 'https://www.facebook.com/profile.php?id=61573811215609', icon:<FaFacebook />},
]

const playNow = [
  { href: 'https://exodus-rising.com/login' },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-black py-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy; Exodus Rising 2025. All Rights Reserved.
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link) => (
            <a key={link} href={link.href} target='_blank' rel="noopener noreferrer" className="text-white transition-colors duration-500 ease-in-out hover:text-blue-600 text-2xl">
              {link.icon}
            </a>
          ))}
        </div>

        <a href={playNow[0].href} target='_blank' rel="noopener noreferrer" className="text-white transition-colors duration-500 ease-in-out hover:text-blue-600 text-md">
          <Button id="playNow-button" title="Play now" containerClass="uppercase hover:bg-blue-600 transition-colors duration-500 ease-in-out" rightIcon={<TiLocationArrow />} />
      </a>
      </div>
    </footer>
  )
}

export default Footer