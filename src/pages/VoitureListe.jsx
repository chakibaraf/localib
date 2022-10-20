import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";

import VoitureItem from "../components/UI/VoitureItem";
import CarData from "../assets/data/carData";

const VoitureListe = (props) => {
 // const [stateVoit,setVoit] = useState(CarData)

  return (
    <Helmet title="Gestion des locations">
   

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Trier Par
                </span>

                <select>
                  <option>Selection</option>
                  <option value="low">prix croissant</option>
                  <option value="high">prix decroissant</option>
                </select>
              </div>
            </Col>

            {CarData.map((item) => (
              <VoitureItem 
              item={item} 
              key={item.id}
               />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default VoitureListe;
