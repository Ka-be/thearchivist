import React from 'react';
import Link from 'next/link';
import Socials from './Socials';
const year = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className=" absolute bottom-2 w-full flex flex-col gap-2 justify-center items-center text-sm px-2 max-w-screen-lg">
            <p className="uppercase tracking-wider text-[0.75rem] text-muted-foreground">
                <Link href="https://kevinbourgitteau.fr" target="_blank" className="hover:text-foreground transition-colors duration-300">Kevin Bourgitteau - {year}</Link> 
            </p>
            <Socials />
        </footer>
    );
};

export default Footer;