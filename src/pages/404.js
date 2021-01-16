import React from 'react';
import { Link } from 'gatsby';
import GhostEmoji from '../../static/ghost-emoji.svg';

export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center w-full mt-8 text-lg text-gray-800 font-weight-500'>
            <div className='mb-2'>
                Nothing here
                <img
                    className='inline w-8 h-8 ml-1'
                    src={GhostEmoji}
                    alt='Ghost emoji'
                />
            </div>
            <Link
                to='/'
                className='transition-colors duration-100 font-weight-700 hover:text-red-400'
            >
                Go back to main page
            </Link>
        </div>
    );
}
