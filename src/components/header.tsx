import { Link } from 'gatsby';
import React from 'react';
import ICONS from '../utils/icons';

const linkColors =
    'text-gray-700 transition-colors duration-100 cursor-pointer hover:text-rose-600';

const absolute = 'absolute left-0 transform -translate-y-1/2';

const I14Link = (
    <Link to='/' className={`${absolute} left-0 top-1/2 hidden md:block`}>
        <div className={`w-8 h-8 ${linkColors}`}>{ICONS.i14}</div>
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
            <div className='flex flex-col items-end justify-center pt-2 pb-8 md:hidden'>
                {RulesLink(rulesPage)}

                <div
                    className={
                        'mt-2 relative w-full flex flex-row items-center justify-center'
                    }
                >
                    <div
                        className={
                            'mr-1 text-2xl sm:text-3xl h-10 text-gray-700 font-weight-700'
                        }
                    >
                        <span className='hidden sm:inline'>I14 </span>Tack &
                        Gybe
                    </div>
                    <div
                        className={
                            'ml-1 text-2xl sm:text-3xl h-10 text-rose-600 font-weight-700'
                        }
                    >
                        {TitleLabel(rulesPage)}
                        <span className='opacity-0'>Challenge</span>
                    </div>
                </div>
            </div>
            <div className={'hidden md:block relative pt-8 mb-4 w-full h-24'}>
                {I14Link}
                <div
                    className={
                        `${absolute} top-1/2 left-1/2 -translate-x-full ` +
                        'mr-1 text-3xl leading-10 text-gray-700 font-weight-700'
                    }
                >
                    I14 Tack & Gybe
                </div>
                <div
                    className={
                        `${absolute} top-1/2 left-1/2 -translate-x-full ` +
                        'ml-1 h-10 text-3xl leading-10 text-rose-600 font-weight-700'
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
