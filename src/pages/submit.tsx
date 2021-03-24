import { Link } from 'gatsby';
import React, { useState } from 'react';
import ICONS from '../utils/icons';
import { navigate } from 'gatsby';

function InputRow(props: {
    label: string;
    placeholder: string;
    value: string;
    setValue(s: string): void;
    disabled?: boolean;
    type?: string;
    id: string;
}) {
    return (
        <div className='w-full group centering-col'>
            <label
                className={
                    'flex flex-row items-center font-weight-700 ' +
                    'justify-start w-full text-base pb-1'
                }
                htmlFor={props.id}
            >
                {props.label}
            </label>
            <input
                className={
                    'bg-white rounded shadow outline-none focus:ring ring-blue-300 ' +
                    'w-full leading-9 py-1 px-3 font-weight-500 '
                }
                placeholder={props.placeholder}
                value={props.value}
                onChange={(e: any) => props.setValue(e.target.value)}
                disabled={props.disabled}
                type={props.type ? props.type : 'text'}
                id={props.id}
            />
        </div>
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
            <Link
                className='mb-1 text-lg italic text-blue-600 font-weight-600'
                to='/rules#questions-and-answers'
            >
                Read Q&A
            </Link>
            <h3 className='mb-6 text-3xl text-center text-gray-800'>
                Tack & Gybe Submission{' '}
            </h3>

            <div className='w-full max-w-md mb-4 space-y-3 text-lg text-gray-800 centering-col'>
                <InputRow
                    label='Your Email'
                    placeholder='yourname@smthn.com'
                    value={email}
                    setValue={setEmail}
                    disabled={submitting}
                    type='email'
                    id='emailInput'
                />
                <InputRow
                    label='Boatsname'
                    placeholder='something cool'
                    value={boatsname}
                    setValue={setBoatsname}
                    disabled={submitting}
                    id='boatsnameInput'
                />
                <InputRow
                    label='Sailnumber'
                    placeholder='GER 123'
                    value={sailnumber}
                    setValue={setSailnumber}
                    disabled={submitting}
                    id='sailnumberInput'
                />
                <InputRow
                    label='Tack-Video'
                    placeholder='YouTube Video-URL'
                    value={tackVideoURL}
                    setValue={setTackVideoURL}
                    disabled={submitting}
                    id='tackVideoInput'
                />
                <InputRow
                    label='Gybe-Video'
                    placeholder='YouTube Video-URL'
                    value={gybeVideoURL}
                    setValue={setGybeVideoURL}
                    disabled={submitting}
                    id='gybeVideoInput'
                />
                <InputRow
                    label='Additional Notes'
                    placeholder='optional, e.g. "Updated submission ..."'
                    value={notes}
                    setValue={setNotes}
                    disabled={submitting}
                    id='notesInput'
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
