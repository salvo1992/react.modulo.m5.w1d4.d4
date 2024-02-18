import Card from "react-bootstrap/Card";

const CardsItem = ({ title, category, img }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{category}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default CardsItem;