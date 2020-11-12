import React from 'react'

export default function User({ details }) {
    if (!details){return <h3>Working of your request...</h3>}
    return (
        <div className='user container'>
        <h2>{details.name}</h2>
        <p>E-mail: {details.email}</p>
        {
            !!details.languages && !!details.languages.length &&
            <div>
            Languages:
            <ul>
                {details.languages.map((language, i) => <li key={i}>{language}</li>)}
            </ul>
            </div>
        }
        </div>

    )}