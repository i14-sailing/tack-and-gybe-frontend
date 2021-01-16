import { Link } from 'gatsby';
import React from 'react';

/*
If I were to use: <img src="....svg"/>, I would not be able to change
the fill color of the svg at runtime. With this I can just change the
text color of the parent node.
*/
const I14Logo = (
    <svg viewBox='0 0 417 417' version='1.1'>
        <path d='M16.538,0l76.718,0l0,314.682l-76.718,0l0,-314.682Zm0,416.667l383.591,-0l-0,-66.612l-383.591,0l0,66.612Zm267.824,-324.789l0,96.012l-79.015,0l79.015,-96.012Zm-155.733,163.083l155.733,0l0,59.721l76.718,0l0,-59.721l39.049,0l-0,-66.611l-39.049,-0l0,-188.35l-76.718,-0l0,0.459l-155.273,187.891l-0.46,-0l0,66.611Z' />
    </svg>
);

interface Props {
    url: string;
}
function Header(props: Props) {
    const rulesPage = props.url === '/rules';

    const linkColors =
        'text-gray-600 transition-colors duration-100 cursor-pointer hover:text-red-400';

    return (
        <div
            className={
                'mt-8 mb-8 flex flex-row items-center justify-center w-full'
            }
        >
            <div className={'flex flex-row items-center justify-center w-1/2'}>
                <Link to='/'>
                    <div className={`w-8 h-8 ${linkColors}`}>{I14Logo}</div>
                </Link>
                <div className='self-stretch flex-grow' />
                <div className='h-10 mr-1 text-3xl leading-10 text-gray-600 font-weight-700'>
                    Tack & Gybe
                </div>
            </div>

            <div className={'flex flex-row items-center justify-center w-1/2'}>
                <div className='relative h-10 ml-1 text-3xl leading-10 text-red-400 font-weight-700'>
                    <span
                        className={`absolute top-0 left-0 ${
                            rulesPage ? 'hidden' : ''
                        }`}
                    >
                        Challenge
                    </span>
                    <span
                        className={`absolute top-0 left-0 ${
                            rulesPage ? '' : 'hidden'
                        }`}
                    >
                        Rules
                    </span>
                </div>
                <div className='self-stretch flex-grow' />
                <Link to={rulesPage ? '/' : '/rules'}>
                    <div
                        className={`px-2 py-1 text-md font-weight-500 ${linkColors}`}
                    >
                        {rulesPage
                            ? 'Back to submissions'
                            : 'How does it work?'}
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
