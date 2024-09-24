import React from "react";
import { Col } from "react-bootstrap";
const CardMovie = () => {
  const imgUrl =
    "https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500";
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <div className="card">
        <img src={imgUrl} className="card__image" alt="hu" />
        <div className="card__overlay">
          <div className="overlay__text text-center w-100 p-2">
            <p>اسم الفيلم : </p>
            <p>تاريخ الاصدار:</p>
            <p>عدد المقيمين: </p>
            <p>التقييم: </p>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CardMovie;
