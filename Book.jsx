import React from 'react';
export const Book = (props) => {
    const { book } = props;
    console.log('in book', props);

    return <li><div className='book'></div>
        <h3> {book.title} </h3>
        <p> {book.description}</p>
        <p>{book.status}</p>
    </li>
}