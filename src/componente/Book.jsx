import React from 'react';
export const Book = (props) => {
    const { book } = props;
    console.log('in book', props);

    return <li>
        <h3> {book.title} </h3>
        <p> {book.description}</p>
        <p>{book.status}</p>
    </li>
}