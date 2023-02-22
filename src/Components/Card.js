import { React, useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    image();
  }, []);
  const onclick = () => {};

  const image = () => {
    axios.get(`https://picsum.photos/v2/list`).then((res) => {
      setResult(res.data);
      // console.log(res.data)
    });
  };
  useEffect(() => {
    console.log("result", result);
  });
  return (
    <>
      <div className="row  ">
        {result.map((data, index) => {
          return (
            <div onClick={onclick} key={index} className=" col col-xs-4  ">
              <div className="container-fluid card " style={{ width: "18rem" }}>
                <img
                  src={data.download_url}
                  className=" card-img-top"
                  alt="not found"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div>Hello I am here </div>
    </>
  );
};

export default Card;
