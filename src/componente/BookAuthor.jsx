import React from 'react';
export const BookAuthor = (props) => {
    const { book } = props;
    console.log('in bookauthor', props);

    return <li>
        <p>{book}</p>
    </li>
}