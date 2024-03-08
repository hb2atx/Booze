import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import "./Menu.css";

function Menu({ items, title }) {
  const titleLow = title.toLowerCase();

  // Check if items is an array before mapping
  if (!Array.isArray(items)) {
    items = []; // Set items to an empty array if it's not an array
  }

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title}
          </CardTitle>
          <CardText className="text-center">
            Behold our tasty offerings!
          </CardText>
          <ListGroup>
            {items.map((item) => (
              <Link to={`/${titleLow}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
          <Link
            to={`/${titleLow}/add`}
            className="mt-4 d-block mx-auto"
            size="sm"
          >
            + Add {title.slice(0, -1)}
          </Link>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;
