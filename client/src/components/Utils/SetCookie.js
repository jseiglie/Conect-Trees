import Cookie from "js-cookie";


const SetCookies = (cookieName, cookie) => {
    Cookie.set(cookieName, cookie, {
      expires: 1, //1 day
      secure: true,
      sameSite: "none",
      path: "/",
    });
  };
  export default SetCookies