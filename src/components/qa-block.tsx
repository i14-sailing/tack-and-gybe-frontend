import React from 'react';
import { useState } from 'react';
import ICONS from '../utils/icons';
import { QANode } from '../utils/types';

const TRANSITION = 'duration-300 transition-all';

function QARow(props: { first: boolean; last: boolean; qaNode: QANode }) {
    const [open, setOpen] = useState(false);

    const marginyOpen: string =
        (props.first ? 'mt-0 ' : 'mt-2 ') + (props.last ? 'mb-0 ' : 'mb-2 ');

    return (
        <div
            id='questions-and-answers'
            className={
                'relative flex flex-col w-full bg-white z-10 shadow ' +
                (props.first ? 'rounded-t ' : '') +
                (props.last ? 'rounded-b ' : '') +
                (open ? marginyOpen : 'my-0 ') +
                (!props.last
                    ? 'border-b-2 ' +
                      (open ? 'border-white ' : 'border-gray-100 ')
                    : '') +
                TRANSITION
            }
        >
            <div
                className={
                    'w-full text-base cursor-pointer text-gray-800 ' +
                    'centering-row font-weight-500 '
                }
                onClick={() => setOpen(!open)}
            >
                <div className='relative flex flex-col py-3 ml-4 text-lg leading-7 opacity-75 md:py-2 sm:flex-row font-weight-600'>
                    {props.qaNode.question}
                </div>
                <div className='self-stretch flex-grow block' />
                <div
                    className={
                        'w-14 h-14 p-4 opacity-50 flex-shrink-0 ' +
                        `transform ${TRANSITION} ` +
                        (open ? 'rotate-180 ' : 'rotate-0 ')
                    }
                >
                    {ICONS.expand_more}
                </div>
            </div>
            <p
                className={
                    `pl-4 pr-18 overflow-scroll ${TRANSITION} ` +
                    'opacity-90 ' +
                    (open
                        ? 'max-h-32 pb-4 pt-1 md:pt-0 '
                        : 'max-h-0 pb-0 pt-0 ')
                }
                style={{ textAlign: 'left' }}
                dangerouslySetInnerHTML={{
                    __html: props.qaNode.answer.replace('\n', '<br/>'),
                }}
            />
        </div>
    );
}

export default function QABlock(props: { qaNodes: QANode[] }) {
    return (
        <div className='w-full centering-col'>
            {props.qaNodes.map((n: QANode, i: number) => (
                <QARow
                    qaNode={n}
                    first={i == 0}
                    last={i == props.qaNodes.length - 1}
                    key={n.question}
                />
            ))}
        </div>
    );
}
