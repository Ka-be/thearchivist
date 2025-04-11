import React from 'react';
import Link from 'next/link';
import { FaGithub, FaUserCircle } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className=" absolute bottom-2 w-full flex justify-between items-center text-sm">
            <p>
                <Link href="https://kevinbourgitteau.fr" target="_blank">
                    <FaUserCircle className="size-6" />
                </Link>
            </p>
            <div className="flex justify-center items-center">
				<img src="/logo.svg" alt="Logo The Archivist" className="w-10 h-10" />
			</div>
            <p>
                <Link href="https://github.com/ka-be/thearchivist" target="_blank">
                    <FaGithub className="size-6" />
                </Link>
            </p>
        </footer>
    );
};

export default Footer;