import React from 'react';
import { getBooks } from '../data/Library';
import { Book } from './Book';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { Author } from './authorList';

export const BookList = () => {
    const [books, setBooks] = useState([]);
    const nowYear = new Date().getFullYear();
    const nowMonth = new Date().getMonth() + 1;
    console.log('in book list',books);
    const loan = () => {
        alert('הספר הושאל בהצלחה!!!');
    }
    useEffect(() => {
        getBooks().then((data) => {
            setBooks(data);
        })
    }, []);
    console.log(' in booklist');
    return (<>
        <h2>welcome to the library😊</h2>
        {/* <Link rel="stylesheet" href="./authorList"> */}
        {/* <button >לרשימת הסופרים</button> */}
        {/* </Link> */}
        <ul>
            {books.map(b => (
                <li key={b.id}
                    style={{ backgroundColor: b.AmountOfLoans > 10 ? 'rgba(247, 241, 201, 1)' : '' }}>
                    <Book
                        book={b}
                    />
                    {(nowYear === b.PublicationDate.year && (nowMonth - b.PublicationDate.month) < 2) ? 'ספר חדש' : ''}<br></br><br />
                    {b.isLoan ? <button onClick={loan} >השאל</button> : null}

                </li>
            ))}
        </ul >
    </>)
}
