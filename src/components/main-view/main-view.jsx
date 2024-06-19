import { useState } from "react";
import { BookCard } from "../book-card/book-card";
import { BookView } from "../book-view/book-view";

export const MainView = () => {
      const [books, setBooks] = useState([
  ]);

  const [selectedBook, setSelectedBook] = useState(null);

  if (selectedBook) {
    return ( <BookView book={selectedBook} onBackClick={() => setSelectedBook(null)} /> 
    );
  }

  if (books.length === 0) {
    return <div>The list is empty!</div>;
  }

 return (
    <div>
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onBookClick={(newSelectedBook) => {
            setSelectedBook(newSelectedBook);
          }}
        />
      ))}
    </div>
  );
}