
import DashboardAdmin from './Pages/admin/DashboardAdmin';
import CreatePost from './Pages/create_post/CreatePost';
import LoginPage from './Pages/forms/LoginPage';
import RegisterPage from './Pages/forms/RegisterPage';
import Home from './Pages/home/HomePage';
import PostsPage from './Pages/postsPage/PostsPage';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PostDetails from './Pages/post-details/PostDetails';
import CategoryPage from './Pages/category/CategoryPage';
import ProfilePage from './Pages/profilePage/ProfilePage';
import UsersTable from './Pages/admin/UsersTable';
import PostsTable from './Pages/admin/PostsTable';
import CategoriesTable from './Pages/admin/CategoriesTable';
import CommentTable from './Pages/admin/CommentTable';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" theme="colored" />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* posts route group */}
        <Route path="posts">
          <Route index element={<PostsPage />} />
          <Route path="create-post" element={<CreatePost />} />
          <Route path="details/:id" element={<PostDetails />} />
          <Route path="categories/:category" element={<CategoryPage />} />
        </Route>
        {/* admin-dashboard route group */}
        <Route path="admin-dashboard">
          <Route index element={<DashboardAdmin />} />
          <Route path="users-table" element={<UsersTable />} />
          <Route path="posts-table" element={<PostsTable />} />
          <Route path="categories-table" element={<CategoriesTable />} />
          <Route path="comments-table" element={<CommentTable />} />
        </Route>


        <Route path="/profile/:id" element={<ProfilePage />} />



        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
