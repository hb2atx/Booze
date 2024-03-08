import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";

export default function AddItem({
  type,
  formData,
  changeHandler,
  submitHandler,
}) {
  const { name, description, recipe, serve } = formData;
  return (
    <Card>
      <CardTitle className="mt-3 mb-0 font-weight-bold text-center capitalize">
        Add New {type.slice(0, -1)}
      </CardTitle>
      <CardBody>
        <Form onSubmit={(e) => submitHandler(e, type)}>
          <FormGroup>
            <Label for="item-name">Name:</Label>
            <Input
              type="text"
              id="item-name"
              value={name}
              name="name"
              onChange={changeHandler}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="item-description">Description:</Label>
            <Input
              type="text"
              id="item-description"
              value={description}
              name="description"
              onChange={changeHandler}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="item-recipe">Recipe:</Label>
            <Input
              type="textarea"
              id="item-recipe"
              value={recipe}
              name="recipe"
              onChange={changeHandler}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="item-serve">Serve:</Label>
            <Input
              type="text"
              id="item-serve"
              value={serve}
              name="serve"
              onChange={changeHandler}
              required
            />
          </FormGroup>
          <Button type="submit" className="mt-4 d-block mx-auto" size="sm">
            Add
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
}