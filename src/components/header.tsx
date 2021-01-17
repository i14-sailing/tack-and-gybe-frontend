import { Link } from 'gatsby';
import React from 'react';

/*
If I were to use: <img src="....svg"/>, I would not be able to change
the fill color of the svg at runtime. With this I can just change the
text color of the parent node.
*/
const I14Logo = (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 417 417' version='1.1'>
        <path d='M16.538,0l76.718,0l0,314.682l-76.718,0l0,-314.682Zm0,416.667l383.591,-0l-0,-66.612l-383.591,0l0,66.612Zm267.824,-324.789l0,96.012l-79.015,0l79.015,-96.012Zm-155.733,163.083l155.733,0l0,59.721l76.718,0l0,-59.721l39.049,0l-0,-66.611l-39.049,-0l0,-188.35l-76.718,-0l0,0.459l-155.273,187.891l-0.46,-0l0,66.611Z' />
    </svg>
);

const linkColors =
    'text-gray-600 transition-colors duration-100 cursor-pointer hover:text-red-400';

const absolute = 'absolute left-0 transform -translate-y-1/2';

const I14Link = (
    <Link to='/' className={`${absolute} left-0 top-1/2 hidden md:block`}>
        <div className={`w-8 h-8 ${linkColors}`}>{I14Logo}</div>
    </Link>
);

const TitleLabel = (rulesPage: boolean) => (
    <>
        <div className='relative pointer-events-none'>
            <span
                className={`transition-all duration-200 transform absolute top-0 left-0 ${
                    rulesPage
                        ? '-translate-y-full opacity-0'
                        : 'translate-y-0 opacity-100'
                }`}
            >
                Challenge
            </span>
            <span
                className={`transition-all duration-200 transform absolute top-0 left-0 ${
                    rulesPage
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-full opacity-0'
                }`}
            >
                Rules
            </span>
        </div>
    </>
);

const RulesLink = (rulesPage: boolean) => (
    <Link to={rulesPage ? '/' : '/rules'}>
        <div className={`px-2 py-1 text-md font-weight-500 ${linkColors}`}>
            {rulesPage ? 'Back to submissions' : 'How does it work?'}
        </div>
    </Link>
);

interface Props {
    url: string;
}
function Header(props: Props) {
    const rulesPage = props.url.includes('rules');

    return (
        <>
            <div className='flex flex-col items-end justify-center pt-2 md:hidden'>
                {RulesLink(rulesPage)}

                <div
                    className={
                        'mt-2 relative w-full flex flex-row items-center justify-center'
                    }
                >
                    <div
                        className={
                            'mr-1 text-2xl sm:text-3xl h-10 text-gray-600 font-weight-700'
                        }
                    >
                        <span className='hidden sm:inline'>I14 </span>Tack &
                        Gybe
                    </div>
                    <div
                        className={
                            'ml-1 text-2xl sm:text-3xl h-10 text-red-400 font-weight-700'
                        }
                    >
                        {TitleLabel(rulesPage)}
                        <span className='opacity-0'>Challenge</span>
                    </div>
                </div>
            </div>
            <div className={'hidden md:block relative py-8 w-full h-24'}>
                {I14Link}
                <div
                    className={
                        `${absolute} top-1/2 left-1/2 -translate-x-full ` +
                        'mr-1 text-3xl leading-10 text-gray-600 font-weight-700'
                    }
                >
                    I14 Tack & Gybe
                </div>
                <div
                    className={
                        `${absolute} top-1/2 left-1/2 -translate-x-full ` +
                        'ml-1 h-10 text-3xl leading-10 text-red-400 font-weight-700'
                    }
                >
                    {TitleLabel(rulesPage)}
                </div>
                <div className='absolute right-0 transform -translate-y-1/2 top-1/2'>
                    {RulesLink(rulesPage)}
                </div>
            </div>
        </>
    );
}

export default Header;
