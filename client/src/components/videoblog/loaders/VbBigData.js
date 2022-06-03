import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const VbBigData = () => {
  const url = process.env.REACT_APP_videoblog;
  const navigate = useNavigate();
  const thumb = "https://img.youtube.com/vi/";
  const youtube = "https://www.youtube.com/watch?v=";


  const [bigData, setBigData] = useState([]);
  const load = async () => {
    try {
      const resp = await axios.get(`${url}noticias/bigdata`);
      var temp = resp.data.sort((a, b) => a.id - b.id);
      temp = temp.reverse();
      temp = temp.slice(0, 5);
      setBigData(temp);
    } catch (error) {
      console.log(error);
    }
  };

  const updateView = async (value) => {
    try {
      await axios.put(`${url}noticias/count/${value}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(load, 500);
    load(); // eslint-disable-next-line
  }, []);

  const handleClick = (e) => {
    updateView(e.target.id);
    console.log(e.target.value)
    // <Link to={`${youtube+ e.target.value}`}/>
    console.log(`${youtube+ e.target.value}`)
    // navigate(`/videoblog/news/${e.target.id}`);
  };
  return (
    <>
      <div className="container">
        <div className="row j-center">
          {bigData.map((item) => (
            <div className="col-lg-4" key={item.id}>
              <div className="card allCard">
                <div className="card_header">
              <p className="m-0">{item.fecha}</p> <p className="m-0">Big Data</p>
              </div>
                <img src={`${thumb + item.codigo_video}/maxresdefault.jpg`} className="card-img-top" alt="" />
                <div className="card-body">
                  
                  
                  <h4
                    onClick={handleClick}
                    id={item.id}
                    value={item.codigo_video}
                    className="text_clamp VbNoticiaTitle"
                  >
                    {item.titulo}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VbBigData;
