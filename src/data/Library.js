const books = [{
    id: 1,
    title: 'מכת מחץ',
    description: 'מתח',
    status: 'adult',
    AmountOfLoans: 4,
    PublicationDate: { year: 2025, month: 11, day: 11 },
    isLoan: true,
    author: 'ישראל פלר'
}, {
    id: 2,
    title: 'דדי גמדי',
    description: 'מצחיק',
    status: 'children',
    AmountOfLoans: 20,
    PublicationDate: { year: 2025, month: 2, day: 4 },
    isLoan: false,
    author: 'מנוחה פוקס'
}
]
export const getBooks = () => {
    console.log('in library:' ,books);
    
    return new Promise((resolve) => {
        resolve(books);
    });

}