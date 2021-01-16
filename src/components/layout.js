import React from 'react';
import Footer from './footer';
import Header from './header';

export default function Layout({ children, location }) {
    return (
        <div
            className={
                'relative top-0 flex flex-col w-full min-h-screen bg-gray-100 ' +
                'px-5vw xl:px-15vw 2xl:px-25vw '
            }
        >
            <Header url={location.pathname} />
            <main>{children}</main>
            <div className='self-stretch flex-grow' />
            <Footer />
        </div>
    );
}
