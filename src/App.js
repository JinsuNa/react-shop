import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "./data/shoes-data";
import { useState } from "react";
import Product from "./component/Product";

function App() {
  const [product, setProduct] = useState(data);

  return (
    // nav 바 시작
    // 코드시작
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* // nav 바 끝 */}

      <div className="main-bg"></div>

      {/* <img
              src="https://zzzmini.github.io/images/shoes1.jpg"
              width="80%"
              alt=""
            /> */}
      {/* // process.env... 을 하는 이유는 배포를 할 때 문제발생 예방(사이트 이미지의 위치(url)가 바뀔 때를 예방) */}

      {/* 상품 시작 */}
      <Container>
        <Row className="justify-content-md-center">
          {product.map((p,index)=>{
            return(
              <Col>
              <Product product={product} index={index} />
              </Col>
            );
          })}
        </Row>
      </Container>
      {/* 상품 끝 */}
      {/* 코드 끝 */}
    </div>
  );
}

export default App;
