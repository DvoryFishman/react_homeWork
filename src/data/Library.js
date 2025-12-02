const books = [{
    id: 1,
    title: 'מכת מחץ',
    description: 'מתח',
    status: 'adult',
    AmountOfLoans:4,
    PublicationDate:20-1-2025,
    isLoan:true,
}, {
    id: 2,
    title: 'דדי גמדי',
    description: 'מצחיק',
    status: 'children',
    AmountOfLoans:20,
    PublicationDate:12-11-2024,
    isLoan:false,
}
]
export const getBooks =() =>{
    return books;
   
}