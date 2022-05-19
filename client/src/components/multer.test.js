import axios from "axios";
import React, { useState } from "react";

const MulterTest = (props) => {
  const [image, setImage] = useState(null);
  const [imgInfo, setImgInfo] = useState("");
  const globalRuta = "../../img/img_noticias";
  
  const [rutaImg, setRutaImg] = useState("");

  const handleClick = () => {
    axios
      .post("http://localhost:3001/digitalhub/admin/images", image)
      .then((res) => {
        console.log("Axios response: ", res);
      });
      props.updateRuta(globalRuta + `${imgInfo}`);
  };
  const handleFileInput = (e, props) => {
    //console.log(e.target.value);
    //console.log(e.target.files[0].name);
    const formData = new FormData();
    formData.append("my-image-file", e.target.files[0], e.target.files[0].name);
    setImage(formData);
    setImgInfo(e.target.files[0].name);
    setRutaImg(globalRuta + `${imgInfo}`);
    //console.log(ruta)
  };


  return (
    <div className="App">
      <button onClick={handleClick}>Upload!</button>
      <input type="file" name="image" onChange={handleFileInput} />
    </div>
  );
};

export default MulterTest;
