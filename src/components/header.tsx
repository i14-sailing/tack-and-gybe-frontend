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
    return (
        <div
            className={
                'mt-8 mb-8 flex flex-row items-center justify-center w-full'
            }
        >
            <div className={'flex flex-row items-center justify-center w-1/2'}>
                <div className='w-8 h-8 text-gray-400 transition-colors duration-100 cursor-pointer hover:text-red-400'>
                    {I14Logo}
                </div>
                <div className='self-stretch flex-grow' />
                <div className='h-10 mr-1 text-3xl leading-10 text-gray-400 font-weight-700'>
                    Tack & Gybe
                </div>
            </div>

            <div className={'flex flex-row items-center justify-center w-1/2'}>
                <div className='h-10 ml-1 text-3xl leading-10 text-gray-400 font-weight-700'>
                    <span className='relative text-red-400'>
                        <span
                            className={`absolute top-0 left-0 ${
                                props.url === '/rules' ? 'hidden' : ''
                            }`}
                        >
                            Challenge
                        </span>
                        <span
                            className={`absolute top-0 left-0 ${
                                props.url === '/rules' ? '' : 'hidden'
                            }`}
                        >
                            Rules
                        </span>
                    </span>
                </div>
                <div className='self-stretch flex-grow' />
                <div>Buttons</div>
            </div>
        </div>
    );
}

export default Header;
