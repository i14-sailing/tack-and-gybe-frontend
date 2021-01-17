import React, { useState } from 'react';
import { padStart } from 'lodash';

const PlayIcon = (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        height='24'
        viewBox='0 0 24 24'
        width='24'
    >
        <path d='M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z' />
    </svg>
);
const TimerIcon = (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        height='24'
        viewBox='0 0 24 24'
        width='24'
    >
        <path d='M0 0h24v24H0V0z' fill='none' />
        <path d='M14 1h-4c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1zm-2 13c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1zm7.03-6.61l.75-.75c.38-.38.39-1.01 0-1.4l-.01-.01c-.39-.39-1.01-.38-1.4 0l-.75.75C16.07 4.74 14.12 4 12 4c-4.8 0-8.88 3.96-9 8.76C2.87 17.84 6.94 22 12 22c4.98 0 9-4.03 9-9 0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z' />
    </svg>
);

const StarIcon = (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        enable-background='new 0 0 24 24'
        height='24'
        viewBox='0 0 24 24'
        width='24'
    >
        <path d='M12,17.27l4.15,2.51c0.76,0.46,1.69-0.22,1.49-1.08l-1.1-4.72l3.67-3.18c0.67-0.58,0.31-1.68-0.57-1.75l-4.83-0.41 l-1.89-4.46c-0.34-0.81-1.5-0.81-1.84,0L9.19,8.63L4.36,9.04c-0.88,0.07-1.24,1.17-0.57,1.75l3.67,3.18l-1.1,4.72 c-0.2,0.86,0.73,1.54,1.49,1.08L12,17.27z' />
    </svg>
);

interface Props {
    boatNode: BoatNode;
    index: number;
}
function VideoCard(props: Props) {
    const [playerMounted, setPlayerMounted] = useState(false);

    const absoluteCentered = 'absolute w-full h-full top-0 left-0';

    const {
        boatsName,
        startTime,
        endTime,
        time,
        diff,
        youtubeVideoId,
    } = props.boatNode;

    function timeToStr(time: number, literal: boolean) {
        const minute = Math.round(Math.floor(time / 60));
        const second = Math.round(time % 60);
        const decimals = Math.round((time * 10) % 10);
        return (
            `${padStart(minute.toString(), 2, '0')}${literal ? 'm ' : ':'}` +
            `${padStart(second.toString(), 2, '0')}.` +
            `${decimals}${literal ? 's' : ''}`
        );
    }

    const Label1 = (
        <>
            <div className='w-6 h-6 text-red-400'>{StarIcon}</div>
            <div className='text-red-400 ml font-weight-700'>
                {props.index + 1}
            </div>
            <div className='ml-2 font-weight-700'>
                {timeToStr(time, true)} (+ {diff}s)
            </div>
        </>
    );
    const Label2 = (
        <>
            <div className='w-6 h-6'>{TimerIcon}</div>
            <div className='ml-1 font-weight-500'>
                {timeToStr(startTime, false)} - {timeToStr(endTime, false)}
            </div>
        </>
    );

    return (
        <div className='w-full mb-4 overflow-hidden bg-white rounded shadow'>
            <div
                className='relative w-full h-0'
                style={{ paddingTop: '56.25%' }}
            >
                {!playerMounted && (
                    <div
                        onClick={() => setPlayerMounted(true)}
                        className='cursor-pointer group'
                    >
                        <div
                            className={`${absoluteCentered} z-20 center-content`}
                        >
                            <div className='w-10 h-10 text-gray-600 transition-colors duration-200 group-hover:text-gray-800'>
                                {PlayIcon}
                            </div>
                        </div>
                        <div
                            className={`${absoluteCentered} z-10 bg-gray-100 opacity-50`}
                        />
                        <img
                            className={`w-full ${absoluteCentered} z-0`}
                            src={`https://i.ytimg.com/vi/${youtubeVideoId}/maxresdefault.jpg`}
                        />
                    </div>
                )}
                {playerMounted && (
                    <iframe
                        className={`${absoluteCentered}`}
                        src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}`}
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                    />
                )}
            </div>

            <div
                className={`w-full z-20 flex flex-col px-4 py-2 text-lg text-gray-600`}
            >
                <div className='flex-row items-center justify-center hidden md:flex'>
                    {Label1}
                    <div className='self-stretch flex-grow' />
                    {Label2}
                </div>
                <div className='flex flex-col items-center justify-center md:hidden '>
                    <div className='flex flex-row items-start justify-center'>
                        {Label1}
                    </div>
                    <div className='flex flex-row items-start justify-center mt-2'>
                        {Label2}
                    </div>
                </div>
            </div>
        </div>
    );
}

type BoatNode = {
    boatsName: string;
    startTime: number;
    endTime: number;
    time: number;
    diff: number;
    youtubeVideoId: string;
};

export default VideoCard;
