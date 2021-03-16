import { Link } from 'gatsby';
import React, { useState } from 'react';
import ICONS from '../utils/icons';
import { navigate } from 'gatsby';

function Input(props: {
    placeholder: string;
    value: string;
    setValue(s: string): void;
    disabled?: boolean;
}) {
    return (
        <input
            className={
                'bg-white rounded shadow outline-none focus:ring ring-blue-300 ' +
                'md:mx-4 leading-9 py-1 px-3 col-span-5 md:col-span-4 font-weight-500 '
            }
            placeholder={props.placeholder}
            value={props.value}
            onChange={(e: any) => props.setValue(e.target.value)}
            disabled={props.disabled}
        />
    );
}

function Label(props: { children: string }) {
    return (
        <label
            className={
                'flex flex-row items-center font-weight-700 ' +
                'justify-start pl-1 pt-6 col-span-5 ' +
                'md:justify-end md:col-span-1 md:pl-0 md:pt-0 '
            }
        >
            {props.children}
        </label>
    );
}

export default function Page() {
    const [email, setEmail] = useState('');
    const [boatsname, setBoatsname] = useState('');
    const [sailnumber, setSailnumber] = useState('');
    const [tackVideoURL, setTackVideoURL] = useState('');
    const [gybeVideoURL, setGybeVideoURL] = useState('');
    const [notes, setNotes] = useState('');

    const [submitting, setSubmitting] = useState(false);

    function entryValid() {
        return (
            email != '' &&
            boatsname != '' &&
            sailnumber != '' &&
            (tackVideoURL != '' || gybeVideoURL != '')
        );
    }

    function onSubmit() {
        setSubmitting(true);

        if (!submitting) {
            fetch(
                'https://zealous-blackwell-87df58.netlify.app/.netlify/functions/send-submission-email' +
                    `?email=${email}&boatsname=${boatsname}&` +
                    `sailnumber=${sailnumber}&tackVideoUrl=${tackVideoURL}&` +
                    `gybeVideoUrl=${gybeVideoURL}&notes=${notes}`,
                {
                    method: 'POST',
                    mode: 'no-cors',
                }
            )
                .then(response => {
                    console.log(response);
                    setSubmitting(false);
                    navigate(`/success?email=${email}`);
                })
                .catch(error => {
                    console.log(error);
                    setSubmitting(false);
                });
        }
    }

    return (
        <div className='my-12 centering-col styled-article'>
            <link
                rel='preload'
                href='images/applause.gif'
                as='image'
                type='image/gif'
            />
            <h3 className='mb-6 text-3xl text-center text-gray-800'>
                Tack & Gybe Submission
            </h3>
            <div className='grid grid-cols-5 mb-4 text-gray-700 bg-white rounded shadow md:mx-4 md:mb-6'>
                <h4
                    className={
                        'flex flex-row items-center w-full h-full ' +
                        'justify-center col-span-5 pt-4 ' +
                        'md:justify-end md:col-span-1 md:pt-0 md:pr-4'
                    }
                >
                    Some Notes
                </h4>
                <div className='col-span-5 px-4 py-4 mb-0 text-gray-700 md:col-span-4 font-weight-500'>
                    <p className='mb-3'>
                        We need your email in order to contact you about any
                        issues regarding the submission.
                    </p>
                    <p className='mb-3'>
                        The YouTube Video-URLs look like this:{' '}
                        <span className='text-blue-500 break-all font-weight-600'>
                            https://www.youtube.com/watch?v=123...
                        </span>{' '}
                        or{' '}
                        <span className='text-blue-500 break-all font-weight-600'>
                            https://youtu.be/123...
                        </span>
                    </p>
                    <p className='mb-3'>
                        If you only want to participate in one of the
                        challenges, leave the corresponding video-field empty.
                    </p>
                    <p>
                        In case you have already submitted a video and want to
                        update it or add the second one, just mention that in
                        the "Additional Notes" section.
                    </p>
                </div>
            </div>
            <div />
            <div className='grid w-full grid-cols-5 space-y-1 text-lg text-gray-800 md:space-y-3'>
                <div className='hidden' />
                <Label>Your Email</Label>
                <Input
                    placeholder='yourname@smthn.com'
                    value={email}
                    setValue={setEmail}
                    disabled={submitting}
                />
                <Label>Boatsname</Label>
                <Input
                    placeholder='something cool'
                    value={boatsname}
                    setValue={setBoatsname}
                    disabled={submitting}
                />
                <Label>Sailnumber</Label>
                <Input
                    placeholder='GER 123'
                    value={sailnumber}
                    setValue={setSailnumber}
                    disabled={submitting}
                />
                <Label>Tack-Video</Label>
                <Input
                    placeholder='YouTube Video-URL'
                    value={tackVideoURL}
                    setValue={setTackVideoURL}
                    disabled={submitting}
                />
                <Label>Gybe-Video</Label>
                <Input
                    placeholder='YouTube Video-URL'
                    value={gybeVideoURL}
                    setValue={setGybeVideoURL}
                    disabled={submitting}
                />
                <Label>Additional Notes</Label>
                <Input
                    placeholder='optional, e.g. "Updated submission ..."'
                    value={notes}
                    setValue={setNotes}
                    disabled={submitting}
                />
            </div>
            <div className='pt-10 space-x-2 md:pt-6 centering-row'>
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
                        'transition-colors duration-150 shadow rounded ' +
                        'centering-row h-11 px-8 text-lg font-weight-600 relative ' +
                        'text-green-900 hover:bg-green-200 ' +
                        (submitting
                            ? 'cursor-default bg-green-200 '
                            : entryValid()
                            ? 'cursor-pointer bg-green-300 '
                            : 'cursor-not-allowed bg-green-200 ')
                    }
                    onClick={entryValid() ? onSubmit : () => {}}
                    disabled={submitting}
                >
                    <span
                        className={
                            'transition-opacity duration-150 ' +
                            (submitting ? 'opacity-0 ' : 'opacity-100 ')
                        }
                    >
                        Submit
                    </span>
                    <div
                        className={
                            'w-6 h-6 transform absolute transition-opacity duration-150 ' +
                            '-translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ' +
                            (submitting ? 'opacity-100 ' : 'opacity-0 ')
                        }
                    >
                        <div className='w-6 h-6 animate-spin'>{ICONS.loop}</div>
                    </div>
                </button>
            </div>
            <div
                className={
                    'mt-8 md:mt-4 text-base text-gray-800 font-weight-500 ' +
                    'transition-opacity duration-150 ' +
                    (entryValid() ? 'opacity-0 ' : 'opacity-100 ')
                }
            >
                Required Fields: Email, Boatsname, Sailnumber and at least one
                video link.
            </div>
        </div>
    );
}
