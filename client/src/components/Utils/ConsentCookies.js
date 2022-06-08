import React, {useState} from "react"
import SetCookies from "./SetCookie";

const ConsentCookies = () => {
  const [hide, setHide] = useState("");
  const handleAcceptClick = () => {
    setHide("hide");
    SetCookies("CND", "cookie" );
  };

  return (
    <div className={`container cookieContainer d-block ${hide}`}>
      <p>
        Este sitio web usa cookies propias y de terceros para optimizar la
        experiencia de usuario y estadísticas. Para saber más sobre nuestras
        políticas haga click <a href="#">aquí</a>
      </p>
      <button className="btn btn-primary" onClick={handleAcceptClick}>
        Entiendo
      </button>
    </div>
  );
};
export default ConsentCookies