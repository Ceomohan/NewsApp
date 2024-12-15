import React from "react";

const Card = ({ data }) => {
  console.log(data);

  return (
    <div className="cardContainer">
      {data.map((currentItem, index) => {
        if (!currentItem.urlToImage) {
          return null;
        } else {
          return (
            <div className="card ">
              <img src={currentItem.urlToImage} />
              <div className="content">
                <a className="title">{currentItem.title}</a>
                <p>{currentItem.description}</p>
                <button onClick={() => window.open(currentItem.url)}>
                  Read More
                </button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;
