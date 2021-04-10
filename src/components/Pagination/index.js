import React from "react";
import { Button, Container } from "./styled";
import chevron1 from '../../img/Chevron1.svg'
import chevron2 from '../../img/Chevron2.svg'

function Pagination({ page, totalPages, onChange }) {
  return (
    <Container>
      <Button disabled={page == 1} onClick={() => onChange(page - 1)}>
        <img src={chevron2} alt="" />
      </Button>
      <p>Página {page} de {totalPages}</p>
      <Button disabled={page == totalPages} onClick={() => onChange(page + 1)}>
        <img src={chevron1} alt="" />
      </Button>
    </Container>
  );
}

export default Pagination;
