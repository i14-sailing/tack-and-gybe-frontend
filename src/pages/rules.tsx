import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { sortBy } from 'lodash';
import { QANode } from '../utils/types';
import QABlock from '../components/qa-block';

export default function Page() {
    const { allStrapiQuestionAndAnswer } = useStaticQuery(query);
    const { nodes: qaNodes } = allStrapiQuestionAndAnswer;

    return (
        <div className='w-full mb-16 space-y-4 centering-col styled-article'>
            <div className='grid w-full grid-cols-1 space-y-4 lg:space-x-4 lg:grid-cols-2'>
                <div className='w-full p-6 bg-white rounded shadow centering-col'>
                    <div className='w-full mb-8 md:mb-12 centering-col'>
                        <div className='w-full mb-4 text-2xl text-center text-rose-600 font-weight-700'>
                            The Challenge
                        </div>
                        <div className='flex flex-col justify-start w-full mx-8 space-y-3 item-center'>
                            <p className=''>
                                Perform <strong>3 tacks and/or 3 gybes</strong>{' '}
                                in the shortest amount of time possible.
                            </p>

                            <p>
                                For each challenge there will be a separate
                                voting and you can also participate in just one
                                of them.
                            </p>

                            <p className=''>
                                You can choose the location, the conditions (at
                                least a light Doppelsteher) and your gear.
                            </p>
                        </div>
                    </div>

                    <div className='w-full centering-col'>
                        <div className='w-full mb-4 text-2xl text-center text-gray-800 opacity-75 font-weight-700'>
                            How do I Take Part?
                        </div>
                        <div className='flex flex-col justify-start w-full mx-8 space-y-3 item-center'>
                            <p className=''>
                                1. Perform your business and record it on video
                            </p>
                            <p className=''>2. Upload that video to YouTube</p>
                            <p>
                                3. Submit your video entry{' '}
                                <Link to='/submit'>here</Link>.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='space-y-4 centering-col'>
                    <div className='relative w-full'>
                        <div
                            className='relative w-full h-0 px-0 pb-0 overflow-hidden bg-gray-300 rounded shadow'
                            style={{ paddingTop: 'calc((1356/1880) * 100%)' }}
                        >
                            <img
                                className='absolute top-0 bottom-0 left-0 right-0'
                                src='/images/Int-14-Day-4-4.jpg'
                                width='1356'
                                height='1880'
                                alt='Three gybing 14s'
                            />
                        </div>
                    </div>
                    <p className='py-8 sm:py-4'>
                        Have fun!
                        <img
                            className='inline w-8 h-8 ml-1'
                            src='/emojis/party-emoji.svg'
                            alt='party emoji'
                        />
                    </p>
                </div>
            </div>

            <QABlock qaNodes={sortBy(qaNodes, ['order', 'question'])} />
        </div>
    );
}

const query = graphql`
    query MyQuery2 {
        allStrapiQuestionAndAnswer {
            nodes {
                question
                answer
                order
            }
        }
    }
`;
