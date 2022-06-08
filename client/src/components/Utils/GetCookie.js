import Cookie from "js-cookie";

const GetCookies = (cookieName) => {
  Cookie.get(cookieName);
};

export default GetCookies