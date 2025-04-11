import React from 'react';
import Link from 'next/link';
import { FaGithub, FaUserCircle } from 'react-icons/fa';

const Socials = () => {
    return (
        <div className="flex gap-2">
            <p>
                <Link href="https://github.com/ka-be/thearchivist" target="_blank">
                    <FaGithub className="size-6 text-foreground/30 hover:text-foreground transition-colors duration-300" />
                </Link>
            </p>
        </div>
    );
};

export default Socials;