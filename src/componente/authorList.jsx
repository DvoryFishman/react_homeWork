import React from 'react';
import { getBooks } from '../data/Library';
import { BookAuthor } from './BookAuthor';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
export const AuthorList = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        getBooks().then((data) => {
            setBooks(data);
        })
    }, []);
    return (<>
        <h3>רשימת הסופרים</h3>
        <ul>
            {books.map((b, i) => (
                    <BookAuthor
                        key={i}
                        book={b.author}
                    />
            ))}</ul>
    </>)
}
