/**
 * MenuItem component renders details of a menu item.
 * It takes items array, itemType and cantFind url as props.
 * Finds the item using id from useParams hook.
 * Renders Card component from reactstrap to display item details.
 * Redirects to cantFind url if item not found.
 */
import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import "./MenuItem.css";

function MenuItem({ items, itemType, cantFind }) {
  const { id } = useParams();

  let item = items.find((item) => item.id === id);
  if (!item) return <Navigate to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          <p>
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            <b>Serve:</b> {item.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default MenuItem;