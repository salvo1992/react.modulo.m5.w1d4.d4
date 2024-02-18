import Container from "react-bootstrap/esm/Container";
import CardsItem from "../schede/schede";
import { Row } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { nanoid } from "nanoid";

const Welcome = () => {
  const [books, setBooks] = useState([]);
  console.log(books);
  const getBooks = async () => {
    try {
      const resp = await fetch("https://epibooks.onrender.com/");
      const data = await resp.json();
      setBooks(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);
  return (
    <Container className="mt-3">
      <Row className="gap-3">
        {books.map((book) => {
          return (
            <CardsItem
              key={nanoid()}
              title={book.title}
              category={book.category}
              img={book.img}
            />
          );
        })}
      </Row>
    </Container>
  );
};
export default Welcome;
  
