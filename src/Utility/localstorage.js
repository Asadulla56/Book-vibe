const getStoreReadBooks= ()=>{
     const storeReadBook = localStorage.getItem('Read-Books');
     if(storeReadBook){
        return JSON.parse(storeReadBook);
     }
     return [];
}

const saveReadBooks = bookId=>{
    const storeReadBooks = getStoreReadBooks();
    const exists = storeReadBooks.find(bookIds =>bookIds === bookId);
    if(!exists){
        storeReadBooks.push(bookId);
        localStorage.setItem('Read-Books',JSON.stringify(storeReadBooks))
    }

}

export { getStoreReadBooks,saveReadBooks}