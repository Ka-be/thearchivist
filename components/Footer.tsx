import React from 'react';
import Link from 'next/link';
import { FaGithub, FaUserCircle } from 'react-icons/fa';

const year = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className=" absolute bottom-2 w-full flex justify-between items-center text-sm px-2">
            <p>
                <Link href="https://kevinbourgitteau.fr" target="_blank">
                    <FaUserCircle className="size-6" />
                </Link>
            </p>
            <p className="uppercase tracking-wider text-[0.75rem] text-muted-foreground">Kevin Bourgitteau - {year}</p>
            <p>
                <Link href="https://github.com/ka-be/thearchivist" target="_blank">
                    <FaGithub className="size-6" />
                </Link>
            </p>
        </footer>
    );
};

export default Footer;