import React from 'react';
import { addNewBook, getBooks } from '../data/Library';
import { Book } from './Book';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AuthorList } from './authorList';
import { nanoid } from 'nanoid';
// import { Author } from './authorList';

export const BookList = () => {
    const [books, setBooks] = useState([]);
    const nowYear = new Date().getFullYear();
    const nowMonth = new Date().getMonth() + 1;
    console.log('in book list', books);
    const loan = () => {
        alert('הספר הושאל בהצלחה!!!');
    }
    const [showBooks2, setShowBooks2] = useState(true);
    const showBookClicked2 = () => {
        setShowBooks2(!showBooks2);
    }
    useEffect(() => {
        getBooks().then((data) => {
            setBooks(data);
        })
    }, []);
    console.log(' in booklist');
    const addBook = (event) => {
        event.preventDefault();
        const newBook = {
            id: nanoid(),
            title: event.target.title.value,
            description: event.target.description.value,
            status: event.target.status.value,
            AmountOfLoans: event.target.AmountOfLoans.value,
            PublicationDate: event.target.PublicationDate.value,
            isLoan: event.target.isLoan.value,
            author: event.target.author.value,
        }
        event.target.reset();
        addNewBook(newBook).then(data => {
            setBooks(data);
        })
    }
    return (<>
        {/* <h2>welcome to the library😊</h2> */}
        {/* <Link rel="stylesheet" href="./authorList"> */}
        {/* <button >לרשימת הסופרים</button> */}
        {/* </Link> */}
        <button onClick={showBookClicked2} > {showBooks2 ? 'להצגת סופרים' : 'להצגת ספרים'} </button>
        {showBooks2 ?
            <ul>
                {books.map(b => (
                    <li key={b.id}
                        style={{ backgroundColor: Number(b.AmountOfLoans) > 10 ? 'rgba(247, 241, 201, 1)' : '' }}>
                        <Book
                            book={b}
                        />
                        {(nowYear === b.PublicationDate.year && (nowMonth - b.PublicationDate.month) < 2) ? 'ספר חדש' : ''}<br/>
                        {b.isLoan ? <button onClick={loan} >השאל</button> : null}
                    </li>
                ))}
            </ul >
            : <AuthorList />}
            {showBooks2 ?
        <form onSubmit={addBook}>
            <input type="text" name="title" placeholder='שם הספר' /><br />
            <input type="text" name="description" placeholder='תאור' /><br />
            <input type="text" name="status" placeholder='status' /><br />
            <input type="number" name="AmountOfLoans" placeholder='AmountOfLoans' /><br />
            <input type="date" name="PublicationDate" placeholder='תאריך הוצאה לאור' /><br />
            <input type="checkbox" name="isLoan" placeholder='isLoan' /><br />
            <input type="text" name="author" placeholder='סופר' /><br />
            <button>הוספת ספר חדש</button><br/>
        </form>
        :''}

    </>)
}
