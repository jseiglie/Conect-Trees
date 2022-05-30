import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import NotFound from "./views/notfound";
import Login from "./views/Login";
import { AuthContext } from "./helpers/AuthContext";
import { useEffect, useState } from "react";
import AdminDashboard from "./views/admin/AdminDashboard";
import AddVideo from "./components/AddVideo";
import AddNews from "./components/AddNews";
import EditNews from "./components/EditNews";
import EditColab from "./components/EditColab";
import EditVideo from "./components/EditVideo";
import axios from "axios";
import VbHome from "./views/videoblog/VbHome";
import VbNewsDisplay from "./components/videoblog/VbNewsDisplay"
import VbAdminDashboard from "./components/videoblog/VbAdminDashboard";
import VbAdminEditNews from "./components/videoblog/VbAdminEditNews";
import VbAdminAddNews from "./components/videoblog/VbAdminAddNews";
function App() {
  
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setAuthState(true);
    }
  },[]);
  // checks for valid token
  useEffect(() => {
    axios
      .get("http://localhost:3001/digitalhub/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        if (res.data.error) setAuthState(false);
        else setAuthState(true);
      });
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/admin" element={<Login />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/addvideo" element={<AddVideo />} />
            <Route path="/admin/addnews" element={<AddNews />} />
            <Route
              path="/admin/connecnews/editnews/:id"
              element={<EditNews />}
            />
            <Route path="/admin/editvideo/:id" element={<EditVideo />} />
            <Route path="/colaboradores/edit/:id" element={<EditColab />} />
            <Route path="/videoblog/home" element={<VbHome/>}/>
            <Route path="/videoblog/news/:id" element={<VbNewsDisplay/>}/>
            <Route path="/videoblog/admin/dashboard" element={<VbAdminDashboard/>}/>
            <Route path="/videoblog/admin/editnews/:id" element={<VbAdminEditNews/>} />
            <Route path="/videoblog/admin/addnews" element={<VbAdminAddNews/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
