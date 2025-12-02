import React from 'react';
import { getBooks } from '../data/Library';
import { Book } from './Book';

export const BookList = () => {
    console.log('in book list');
    const books = getBooks();
    console.log(books);
    return (<>
        <h1>welcome to the library😊</h1>
        <ul>
            {books.map(b => (
                <li key={b.id}
                    style={{ backgroundColor : b.AmountOfLoans > 10 ? 'rgba(247, 241, 201, 1)' : '' }}>
                    <Book

                        book={b}
                    />
                    {b.isLoan ? <button>השאל</button> : null}

                </li>
            ))}
        </ul >
    </>)
}
