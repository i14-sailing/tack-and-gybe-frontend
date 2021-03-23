import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { sortBy } from 'lodash';
import { QANode } from '../utils/types';

export default function Page() {
    const { allStrapiQuestionAndAnswer } = useStaticQuery(query);
    const { nodes: qaNodes } = allStrapiQuestionAndAnswer;

    console.log(qaNodes);

    return (
        <div className='w-full space-y-4 centering-col styled-article'>
            <div className='w-full p-6 bg-white rounded shadow centering-col'>
                <div className='w-full mb-12 centering-row'>
                    <div className='w-50% text-2xl text-center text-rose-600 font-weight-700'>
                        The Challenge
                    </div>
                    <div className='w-50% flex flex-col item-center justify-start mx-8 space-y-3'>
                        <p className=''>
                            Perform <strong>3 tacks and/or 3 gybes</strong> in
                            the shortest amount of time possible.
                        </p>

                        <p>
                            For each challenge there will be a separate voting
                            and you can also participate in just one of them.
                        </p>

                        <p className=''>
                            You can choose the location, the conditions (at
                            least a light Doppelsteher) and your gear.
                        </p>
                    </div>
                </div>

                <div className='w-full centering-row'>
                    <div className='w-50% text-2xl text-center text-gray-800 opacity-75 font-weight-700'>
                        How do I Take Part?
                    </div>
                    <div className='w-50% flex flex-col item-center justify-start mx-8 space-y-3'>
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

            <p className='py-8 sm:py-12'>
                Have fun!
                <img
                    className='inline w-8 h-8 ml-1'
                    src='/emojis/party-emoji.svg'
                    alt='party emoji'
                />
            </p>
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
