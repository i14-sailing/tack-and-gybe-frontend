import { Link } from 'gatsby';
import React from 'react';

export default function Page() {
    const urlParams = new URLSearchParams(location.search);

    let email;

    if (urlParams.has('email')) {
        email = urlParams.get('email');
    }

    return (
        <div className='max-w-lg mx-auto my-12 text-lg text-center text-gray-800 centering-col font-weight-500'>
            <img src='./images/applause.gif' className='w-full rounded' />
            <p className='mt-6 mb-4'>
                <strong>All done!</strong> You should received an email from us
                within a few minutes{email && ` (we've sent it to ${email})`}.
                If there's a typo in your email, just fill out the{' '}
                <Link to='/submit' className='text-blue-500 font-weight-600'>
                    form
                </Link>{' '}
                again and mention that in the "Additional Notes" section.
            </p>
            <p>We will notify you once we have published your submission.</p>
            <Link to='/' className='mt-4 text-blue-500 font-weight-600'>
                Get back to the main page
            </Link>
        </div>
    );
}
