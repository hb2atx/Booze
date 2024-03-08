import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

function MenuItem({ items, cantFind }) {
  const { id } = useParams();

  let menuItem = items.find((menuItem) => menuItem.id === id);
  if (!menuItem) return <Navigate to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {menuItem.name}
          </CardTitle>
          <CardText className="font-italic">{menuItem.description}</CardText>
          <p>
            <b>Recipe:</b> {menuItem.recipe}
          </p>
          <p>
            <b>Serve:</b> {menuItem.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default MenuItem;