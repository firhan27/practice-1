import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import CarouselComponent from "./components/CarouselComponent";
import HomeCard from "./components/HomeCard";

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <CarouselComponent />
        </Col>
      </Row>
      <Row>
        <Col>
          <HomeCard />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
