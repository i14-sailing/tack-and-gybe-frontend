import React from 'react';
import Footer from './footer';
import Header from './header';

interface Props {
    url: string;
    children: React.ReactNode;
}
function Layout(props: Props) {
    return (
        <div className='w-full px-20vw'>
            <Header url={props.url} />
            <main>{props.children}</main>
            <Footer />
        </div>
    );
}

export default Layout;
