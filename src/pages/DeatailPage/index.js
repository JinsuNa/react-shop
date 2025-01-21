import { useParams } from "react-router-dom";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();
  let index = parseInt(id);
  let shoes = props.product[id];
  const navigate = useNavigate();
  let strPrice = shoes.price.toLocaleString("ko-KR");

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`${process.env.PUBLIC_URL}/images/shoes${index + 1}.jpg`}
            width="100%"
            alt="상품 이미지"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{shoes.title}</h4>
          <p>{shoes.content}</p>
          <p>{strPrice}원</p>
          <button className="btn btn-danger m-4">주문하기</button>
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(-1);
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
