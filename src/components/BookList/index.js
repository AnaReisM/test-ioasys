import React from "react";
import { Author, Book, Image, Info, Information, List, Title } from './styled';

function BookList({ books, onClick }) {
  return (
    <List>
      {books.map(book => (
        <Book onClick={() => onClick(book.id)}>
          <Image src={book.imageUrl} alt="" />
          <Information>
            <div>
              <Title>{book.title}</Title>
              <Author>{book.authors.join(', ')}</Author>
            </div>
            <div>
              <Info>{book.pageCount} páginas</Info>
              <Info>Editora {book.publisher}</Info>
              <Info>Publicado em {book.published}</Info>
            </div>
          </Information>
        </Book>
      ))}
    </List>
  );
}

export default BookList;
