import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import ClientForm from "../components/UI/ClientForm";






const Home = () => {

  return (
    <Helmet title="Gestion des Locataire">

      <section className="p-0 hero__slider-section">


        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Planning d'enregistrement client </h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <ClientForm />
                

              </Col>
            </Row>
          </Container>
        </div>
      </section>



      {/* =========== affichage des voitures en option sur la premiere page  ============= */}
      {/*
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              
              <h2 className="section__title">Voiture</h2>
            </Col>

            {carData.slice(0, 0).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
     */}
    </Helmet>
  );
};

export default Home;
