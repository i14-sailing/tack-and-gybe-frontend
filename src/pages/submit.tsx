import { Link } from 'gatsby';
import React, { useState } from 'react';

function Input(props: {
    placeholder: string;
    value: string;
    setValue(s: string): void;
}) {
    return (
        <input
            className={
                'bg-white rounded shadow outline-none focus:ring ring-blue-300 ' +
                'mx-4 leading-9 py-1 px-3 col-span-4 font-weight-500 '
            }
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e: any) => props.setValue(e.target.value)}
        />
    );
}

function Label(props: { children: string }) {
    return (
        <label className='flex flex-row items-center justify-end col-span-1 font-weight-700'>
            {props.children}
        </label>
    );
}

function Button(props: {
    children: string;
    onClick?(): void;
    className?: string;
}) {
    return (
        <button
            className={`transition-colors duration-150 cursor-pointer centering-row h-11 px-8 text-lg rounded font-weight-600 shadow ${props.className}`}
        >
            {props.children}
        </button>
    );
}

export default function Page() {
    const [email, setEmail] = useState('');
    const [boatsName, setBoatsName] = useState('');
    const [sailNumber, setSailNumber] = useState('');
    const [tackVideoURL, setTackVideoURL] = useState('');
    const [gybeVideoURL, setGybeVideoURL] = useState('');
    const [notes, setNotes] = useState('');

    return (
        <div className='centering-col'>
            <h1 className='mb-6 text-3xl text-center text-gray-800'>
                Tack & Gybe Submission
            </h1>
            <div className='grid grid-cols-5 mx-4 mb-6 text-gray-500 bg-white rounded shadow'>
                <h4 className='flex flex-row items-center justify-end w-full h-full col-span-1 text-right'>
                    Some Notes
                </h4>
                <p className='col-span-4 px-8 py-4 mb-0 text-lg text-justify text-gray-500 font-weight-500'>
                    We need your email for contacting you about any issues
                    regarding the submission.
                    <br />
                    <br />
                    The YouTube Video-URLs look like this:{' '}
                    <span className='text-blue-400 break-all font-weight-600'>
                        https://www.youtube.com/watch?v=123...
                    </span>{' '}
                    or{' '}
                    <span className='text-blue-400 break-all font-weight-600'>
                        https://youtu.be/123...
                    </span>{' '}
                    <br />
                    <br />
                    If you only want to participate in one of the challenges,
                    leave the corresponding video-field empty.
                    <br />
                    <br />
                    In case you have already submitted a video and want to
                    update it or add the second one, just mention that in the
                    "Additional Notes" section.
                </p>
            </div>
            <div />
            <div className='grid w-full grid-cols-5 space-y-2 text-lg text-gray-800'>
                <Label>Your Email</Label>
                <Input
                    placeholder='yourname@smthn.com'
                    value={email}
                    setValue={setEmail}
                />

                <Label>Boatsname</Label>
                <Input
                    placeholder='something cool hopefully'
                    value={boatsName}
                    setValue={setBoatsName}
                />

                <Label>Sailnumber</Label>
                <Input
                    placeholder='GER 123'
                    value={sailNumber}
                    setValue={setSailNumber}
                />

                <Label>Tack-Video</Label>
                <Input
                    placeholder='YouTube Video-URL'
                    value={tackVideoURL}
                    setValue={setTackVideoURL}
                />

                <Label>Gybe-Video</Label>
                <Input
                    placeholder='YouTube Video-URL'
                    value={gybeVideoURL}
                    setValue={setGybeVideoURL}
                />

                <Label>Additional Notes</Label>
                <Input
                    placeholder='optional, e.g. "Updated submission", ...'
                    value={notes}
                    setValue={setNotes}
                />
            </div>
            <div className='mt-6 space-x-2 centering-row'>
                <Link to='/rules'>
                    <div
                        className={
                            `transition-colors duration-150 cursor-pointer centering-row h-11 px-8 text-lg rounded font-weight-600 shadow ` +
                            'text-red-900 bg-red-300 hover:bg-red-200'
                        }
                    >
                        Cancel
                    </div>
                </Link>
                <button
                    className={
                        `transition-colors duration-150 cursor-pointer centering-row h-11 px-8 text-lg rounded font-weight-600 shadow ` +
                        'text-green-900 bg-green-300 hover:bg-green-200'
                    }
                >
                    Submit
                </button>
            </div>
        </div>
    );
}
