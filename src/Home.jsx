import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home() {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle className="font-weight-bold">
            Welcome to Silicon Valley's premier dive cafe!
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;