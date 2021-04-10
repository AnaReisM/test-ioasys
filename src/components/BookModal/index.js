import React from "react";
import Rodal from "rodal";
import {Title, Author, Image, Info, InfoTitle, Description, Button, Content } from './styled';
import close from '../../img/Close.svg';

function BookModal({ book, onClose }) {
  if (!book) return null;
  return (
    <>
      <Button onClick={() => onClose(null)}>
        <img src={close} alt="" />
      </Button>
      <Rodal
        visible={book}
        onClose={() => onClose(null)}
        className="book-modal"
        showCloseButton={false}
      >
        <Image src={book.imageUrl} alt="" />
        <Content>
          <Title>{book.title}</Title>
          <Author>{book.authors.join(", ")}</Author>

          <InfoTitle>INFORMAÇÕES</InfoTitle>

          <Info>
            <strong>Páginas</strong><p>{book.pageCount}</p>
          </Info>
          <Info>
            <strong>Editora</strong><p>{book.publisher}</p>
          </Info>
          <Info>
            <strong>Publicação</strong><p>{book.published}</p>
          </Info>
          <Info>
            <strong>Idioma</strong><p>{book.language}</p>
          </Info>
          <Info>
            <strong>Título original</strong><p>{book.title}</p>
          </Info>
          <Info>
            <strong>ISBN-10</strong><p>{book.isbn10}</p>
          </Info>
          <Info>
            <strong>ISBN-13</strong><p>{book.isbn13}</p>
          </Info>

          <InfoTitle>Resenha da editora</InfoTitle>
          <Description>{book.description}</Description>
        </Content>
      </Rodal>
    </>
  );
}

export default BookModal;
