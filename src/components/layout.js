import React from 'react';
import Footer from './footer';
import Header from './header';

export default function Layout({ children, location }) {
    return (
        <div className='w-full px-20vw'>
            <Header url={location.pathname} />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
