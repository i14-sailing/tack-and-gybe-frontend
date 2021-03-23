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
                    'w-full h-18 sm:h-12 text-base cursor-pointer text-gray-800 ' +
                    'flex flex-row items-center justify-center font-weight-500 '
                }
                onClick={() => setOpen(!open)}
            >
                <div className='relative flex flex-col ml-4 sm:flex-row'>
                    {props.qaNode.question}
                </div>
                <div className='self-stretch flex-grow block' />
                <div
                    className={
                        'w-12 h-12 p-3 text-gray-500 ' +
                        `transform ${TRANSITION} ` +
                        (open ? 'rotate-180 ' : 'rotate-0 ')
                    }
                >
                    {ICONS.expand_more}
                </div>
            </div>
            <div
                className={
                    `px-4 text-lg overflow-hidden origin-top ${TRANSITION} ` +
                    'flex flex-col items-center justify-start gap-y-4 space-y-4 ' +
                    (open ? 'max-h-108 sm:max-h-72 my-4 ' : 'max-h-0 py-0 ')
                }
            >
                {props.qaNode.answer}
            </div>
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
                    last={i == props.qaNodes.length}
                />
            ))}
        </div>
    );
}
