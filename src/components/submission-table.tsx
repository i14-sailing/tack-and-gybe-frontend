import React, { useState } from 'react';
import { RenderSubmissionNode } from '../utils/types';
import { padStart } from 'lodash';
import ICONS from '../utils/icons';

function SubmissionTable(props: {
    submissions: RenderSubmissionNode[];
    tackTab: boolean;
}) {
    return (
        <div className={'w-full centering-col bg-white rounded shadow'}>
            {props.submissions.map((s: RenderSubmissionNode, i: number) => (
                <TableRow
                    submission={s}
                    key={s.youtubeVideoId}
                    index={i}
                    tackTab={props.tackTab}
                />
            ))}
        </div>
    );
}

function timeToStr(time: number, literal: boolean) {
    const minute = Math.round(Math.floor(time / 60));
    const second = Math.round(time % 60);
    return (
        `${padStart(minute.toString(), 2, '0')}${literal ? 'm ' : ':'}` +
        `${padStart(second.toString(), 2, '0')}${literal ? 's' : ''}`
    );
}

function TableRow(props: {
    submission: RenderSubmissionNode;
    index: number;
    tackTab: boolean;
}) {
    const [videoMounted, setVideoMounted] = useState(false);

    return (
        <>
            {videoMounted && (
                <div className='z-50 bg-gray-900 absolute-full bg-opacity-60 centering-col'>
                    <div
                        className='z-0 absolute-full'
                        onClick={() => setVideoMounted(false)}
                    />
                    <div className='relative z-10 overflow-hidden text-lg text-white bg-gray-900 rounded-lg shadow centering-col'>
                        <div className='w-full p-4 space-x-8 text-xl centering-row font-weight-500'>
                            <div className='w-7 h-7' />
                            <div className='self-stretch flex-grow' />
                            <div className='text-center w-128'>
                                3{' '}
                                <strong className='text-rose-400'>
                                    {props.tackTab ? 'Tacks' : 'Gybes'}
                                </strong>{' '}
                                on "{props.submission.boatsName}" (
                                {props.submission.country}{' '}
                                {props.submission.sailNumber})
                            </div>
                            <div className='self-stretch flex-grow' />
                            <div
                                className='text-white cursor-pointer w-7 h-7'
                                onClick={() => setVideoMounted(false)}
                            >
                                {ICONS.close}
                            </div>
                        </div>
                        <div
                            className='relative h-0 w-192'
                            style={{ paddingTop: '56.25%' }}
                        >
                            <iframe
                                className='absolute top-0 left-0 w-full h-full'
                                src={`https://www.youtube-nocookie.com/embed/${props.submission.youtubeVideoId}?start=${props.submission.startTime}`}
                                frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen
                            />
                        </div>
                        <div className='w-full p-4 space-x-8 centering-row font-weight-500 '>
                            <div>
                                Start:{' '}
                                {timeToStr(props.submission.startTime, true)}
                            </div>
                            <div>
                                End: {timeToStr(props.submission.endTime, true)}
                            </div>
                            <div>
                                Duration:{' '}
                                {timeToStr(props.submission.time, true)}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div
                className={
                    'w-full grid grid-cols-16 p-2 ' +
                    'text-base border-gray-300 ' +
                    (props.index !== 0 ? 'border-t-2 ' : ' ')
                }
                onClick={() => setVideoMounted(true)}
            >
                <div
                    className={
                        'row-span-2 lg:row-span-1 col-span-2 xs:col-span-1 ' +
                        'w-full font-weight-600 text-lg ' +
                        'flex flex-row items-center justify-center'
                    }
                >
                    {props.index + 1}
                </div>
                <div
                    className={
                        'row-span-2 lg:row-span-1 col-span-3 md:col-span-2 ' +
                        'w-full font-weight-500 ' +
                        'flex flex-row items-center justify-end pr-3'
                    }
                >
                    <img
                        className={
                            'w-10 h-5 xs:w-12 xs:h-6 sm:w-14 sm:h-7 ' +
                            'rounded-sm ring-1 xs:ring-2 ring-gray-300'
                        }
                        src={`./flags/${props.submission.country}_Flag_200w.png`}
                    />
                </div>
                <div
                    className={
                        'row-span-2 lg:row-span-1 col-span-3 md:col-span-2 ' +
                        'font-weight-600 ' +
                        'flex flex-row items-center justify-start '
                    }
                >
                    {props.submission.country} {props.submission.sailNumber}
                </div>
                <div
                    className={
                        'col-span-7 lg:col-span-5 ' +
                        'font-weight-600 pr-3 ' +
                        'hidden xs:flex flex-row items-center justify-start '
                    }
                >
                    {props.submission.boatsName}
                </div>
                <div
                    className={
                        'col-span-6 pl-3 row-span-2 ' +
                        'font-weight-500 ' +
                        'flex xs:hidden flex-row items-center justify-start '
                    }
                >
                    {timeToStr(props.submission.time, true)}
                </div>
                <div
                    className={
                        'col-span-2 row-span-2 ' +
                        'font-weight-500 ' +
                        'flex lg:hidden flex-row items-center justify-end '
                    }
                >
                    <div
                        className={
                            'centering-row py-2 px-3 rounded ' +
                            'cursor-pointer font-weight-600 ' +
                            'text-gray-700 hover:text-gray-800 ' +
                            'bg-gray-200 hover:bg-gray-100'
                        }
                    >
                        <div className='w-6 h-6 opacity-75'>
                            {ICONS.playVideo}
                        </div>
                    </div>
                </div>

                <div
                    className={
                        'col-span-7 lg:col-span-3 ' +
                        'font-weight-500 ' +
                        'hidden xs:flex flex-row items-center justify-start '
                    }
                >
                    {timeToStr(props.submission.time, true)}
                    {props.submission.diff !== 0 && (
                        <span className='pl-2'>
                            (+ {props.submission.diff}s)
                        </span>
                    )}
                </div>
                <div
                    className={
                        'col-span-3 ' +
                        'font-weight-500 ' +
                        'hidden lg:flex flex-row items-center justify-end '
                    }
                >
                    <div
                        className={
                            'centering-row py-1 px-3 rounded ' +
                            'cursor-pointer font-weight-600 ' +
                            'text-gray-700 hover:text-gray-800 ' +
                            'bg-gray-200 hover:bg-gray-100'
                        }
                    >
                        <div className='w-5 h-5 mr-2 opacity-75'>
                            {ICONS.playVideo}
                        </div>
                        <div>Play Video</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SubmissionTable;
