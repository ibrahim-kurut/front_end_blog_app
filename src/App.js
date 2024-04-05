
import DashboardAdmin from './Pages/admin/DashboardAdmin';
import CreatePost from './Pages/create_post/CreatePost';
import LoginPage from './Pages/forms/LoginPage';
import RegisterPage from './Pages/forms/RegisterPage';
import Home from './Pages/home/HomePage';
import PostsPage from './Pages/postsPage/PostsPage';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts-create-post" element={<CreatePost />} />



        <Route path="/admin-dashboard" element={<DashboardAdmin />} />



        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
