import Cookie from "js-cookie";

const RemoveCookies = (cookieName) => {
  Cookie.remove(cookieName);
};

export default RemoveCookies