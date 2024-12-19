import React, { useState, useEffect } from 'react';
import styles from './BookInfo.module.css';

const BookInfo = () => {
  const [books, setBooks] = useState([]);
  const [monthReadBook, setMonthReadBook] = useState(null);

  useEffect(() => {
    // Get best-selling books
    const url = 'https://www.googleapis.com/books/v1/volumes?q=best+sellers&maxResults=5';
    fetch(url)
      .then(response => response.json())
      .then(data => setBooks(data.items))
      .catch(error => console.error('Error fetching book data:', error));

    // Get the specific book "It Ends With Us"
    const monthReadUrl = 'https://www.googleapis.com/books/v1/volumes?q=It+Ends+With+Us+Colleen+Hoover';
    fetch(monthReadUrl)
      .then(response => response.json())
      .then(data => setMonthReadBook(data.items ? data.items[0] : null))
      .catch(error => console.error('Error fetching specific book data:', error));
  }, []);

  if (books.length === 0 || !monthReadBook) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.bookList}>
      <div className={styles.monthRead}>
        <h2>This Month's Read</h2>
        <a
          href={monthReadBook.volumeInfo.previewLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles.image}
            src={monthReadBook.volumeInfo.imageLinks?.thumbnail}
            alt={monthReadBook.volumeInfo.title}
          />
        </a>
        <div className={styles["item-list"]}>
          <h3>{monthReadBook.volumeInfo.title}</h3>
          <p>
            <strong>Author:</strong>{" "}
            {monthReadBook.volumeInfo.authors?.join(", ")}
          </p>
          <p className={styles["item-list-description"]}>
            <strong>Description:</strong> {monthReadBook.volumeInfo.description}
          </p>
        </div>
      </div>

      <h1 className={styles.title}>Best-Selling Books</h1>
      <div className={styles["book-grid"]}>
        {books.map((book) => (
          <div key={book.id} className={styles["book-item"]}>
            <a
              href={book.volumeInfo.previewLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.image}
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.title}
              />
            </a>
            <div className={styles["item-details"]}>
              <p className={styles.categories}>
                <strong>Categories:</strong>{" "}
                {book.volumeInfo.categories?.join(", ")}
              </p>
              <h2 className={styles.bookTitle}>{book.volumeInfo.title}</h2>
              <h3 className={styles.authors}>
                {book.volumeInfo.authors?.join(", ")}
              </h3>
              <p className={styles.publishedDate}>
                <strong>Published Date:</strong> {book.volumeInfo.publishedDate}
              </p>
              <p className={styles.pageCount}>
                <strong>Page Count:</strong> {book.volumeInfo.pageCount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookInfo;
