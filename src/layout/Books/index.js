import React, { useEffect, useState } from "react";
import Logo from "../../components/Logo";
import { useHistory, useParams } from "react-router-dom";
import { Container, Logout, Size, Welcome } from "./styled";
import logout from '../../img/Logout.svg';
import axios from "axios";
import BookList from "../../components/BookList";
import Pagination from "../../components/Pagination";
import BookModal from "../../components/BookModal";

function Books() {
  const history = useHistory();
  const { id } = useParams();
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [bookId, setBookId] = useState(id);
  const selectedBook = books.find(book => book.id == bookId);

  const openBook = (id) => {
    setBookId(id);
    history.push(`/books/${id}`);
  }

  const closeBook = () => {
    setBookId(null);
    history.push('/books');
  }

  useEffect(() => {
    axios.get(`https://books.ioasys.com.br/api/v1/books?page=${page}&amount=25`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }).then(response => {
      console.log(response);
      setBooks(response.data.data);
      setTotalPages(response.data.totalPages);
    }).catch(error => {
      history.push("/");
    })
  }, [page])

  return (
    <Container>
      <Size>
        <Logo dark />
        <Logout onClick={() => history.push("/")}>
          <Welcome>Bem vindo, <strong>Guilherme</strong></Welcome>
          <img src={logout} alt=""/>
        </Logout>
        <BookList books={books} onClick={openBook} />
        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        <BookModal book={selectedBook} onClose={closeBook} />
      </Size>
    </Container>
  );
}

export default Books;
