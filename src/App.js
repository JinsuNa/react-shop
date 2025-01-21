import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "./data/shoes-data";
import { useState, useEffect } from "react";
import Product from "./component/Product";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import DetailPage from "./pages/DeatailPage";
import AboutPage from "./pages/AboutPage";

function App() {
  const [product, setProduct] = useState(data);
  const [selectedIndex, setSelectedIndex] = useState("");
  let navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(false);
  let location = useLocation();

  // 경로 변경될 때마다 실행
  useEffect(() => {
    if (location.pathname === "/") {
      setIsHidden(false); // 리스트 페이지로 돌아오면 다시 보이게
    }
  }, [location.pathname]);
  
  return (
    // nav 바 시작
    // 코드시작
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            ShoeShop
          </Navbar.Brand>
          <Nav className="me-auto">
            {/* home nav 시작 */}
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              {/* <Link to={"/"}>Home</Link> */}
              Home
            </Nav.Link>
            {/* home nav 끝 */}

            {/* cart nav 시작 */}
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              {/* <Link to={"/cart"}>Cart</Link> */}
              Cart
            </Nav.Link>
            {/* cart nav 끝 */}

            {/* about nav 시작 */}
            <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              {/* <Link to={"/cart"}>Cart</Link> */}
              about
            </Nav.Link>
            {/* about nav 끝 */}
          </Nav>
        </Container>
      </Navbar>
      {/* // nav 바 끝 */}

      <div className="main-bg"></div>

      {/* 라우터 처리 */}
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route
          path="/home"
          element={
            <div>
              <index />
            </div>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <div>
              <DetailPage product={product} />
            </div>
          }
        />
        <Route path="/cart" element={<div>장바구니</div>} />
        <Route
          path="/about"
          element={
            <div>
              <AboutPage />
            </div>
          }
        >
          <Route path="member" element={<div>직원소개 페이지</div>}></Route>
          <Route path="location" element={<div>길 안내 페이지</div>}></Route>
        </Route>

        {/* 404 error 라우터 처리 */}
        <Route
          path="*"
          element={
            <div>
              <h4>404. That's an error</h4>
            </div>
          }
        />
      </Routes>

      {/* <img
              src="https://zzzmini.github.io/images/shoes1.jpg"
              width="80%"
              alt=""
            /> */}
      {/* // process.env... 을 하는 이유는 배포를 할 때 문제발생 예방(사이트 이미지의 위치(url)가 바뀔 때를 예방) */}

      {/* 상품 시작 */}
      <Container>
        <Row className="justify-content-md-center">
          {!isHidden &&
            product.map((p, index) => {
              return (
                <Col
                  onClick={() => {
                    setIsHidden(true);
                    navigate(`/detail/${index}`);
                  }}
                >
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
