import { Link } from 'gatsby';
import React, { useState } from 'react';
import icons from '../utils/icons';

const emailLambdaUrl = 'https://zealous-blackwell-87df58.netlify.app/';

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

export default function Page() {
    const [email, setEmail] = useState('');
    const [boatsname, setBoatsname] = useState('');
    const [sailnumber, setSailnumber] = useState('');
    const [tackVideoURL, setTackVideoURL] = useState('');
    const [gybeVideoURL, setGybeVideoURL] = useState('');
    const [notes, setNotes] = useState('');

    const [submitting, setSubmitting] = useState(false);

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
                .then(esponse => {
                    console.log(esponse);
                    setSubmitting(false);
                })
                .catch(error => {
                    console.log(error);
                    setSubmitting(false);
                });
        }
    }

    return (
        <div className='my-12 centering-col'>
            <h1 className='mb-6 text-3xl text-center text-gray-800'>
                Tack & Gybe Submission
            </h1>
            <div className='grid grid-cols-5 mx-4 mb-6 text-gray-700 bg-white rounded shadow'>
                <h4 className='flex flex-row items-center justify-end w-full h-full col-span-1 text-right'>
                    Some Notes
                </h4>
                <p className='col-span-4 px-8 py-4 mb-0 text-lg text-justify text-gray-700 font-weight-500'>
                    We need your email for contacting you about any issues
                    regarding the submission.
                    <br />
                    <br />
                    The YouTube Video-URLs look like this:{' '}
                    <span className='text-blue-500 break-all font-weight-600'>
                        https://www.youtube.com/watch?v=123...
                    </span>{' '}
                    or{' '}
                    <span className='text-blue-500 break-all font-weight-600'>
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
                    placeholder='something cool'
                    value={boatsname}
                    setValue={setBoatsname}
                />

                <Label>Sailnumber</Label>
                <Input
                    placeholder='GER 123'
                    value={sailnumber}
                    setValue={setSailnumber}
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
                    placeholder='optional, e.g. "Updated submission ..."'
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
                        'transition-colors duration-150 shadow rounded ' +
                        'centering-row h-11 px-8 text-lg font-weight-600 relative ' +
                        'text-green-900 hover:bg-green-200 ' +
                        (submitting
                            ? 'cursor-default bg-green-200 '
                            : 'cursor-pointer bg-green-300 ')
                    }
                    onClick={onSubmit}
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
                        <div className='w-6 h-6 animate-spin'>{icons.loop}</div>
                    </div>
                </button>
            </div>
        </div>
    );
}
