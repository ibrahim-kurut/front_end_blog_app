
import DashboardAdmin from './Pages/admin/DashboardAdmin';
import CreatePost from './Pages/create_post/CreatePost';
import LoginPage from './Pages/forms/LoginPage';
import RegisterPage from './Pages/forms/RegisterPage';
import Home from './Pages/home/HomePage';
import PostsPage from './Pages/postsPage/PostsPage';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PostDetails from './Pages/post-details/PostDetails';
import CategoryPage from './Pages/category/CategoryPage';
import ProfilePage from './Pages/profilePage/ProfilePage';
import UsersTable from './Pages/admin/UsersTable';
import PostsTable from './Pages/admin/PostsTable';
import CategoriesTable from './Pages/admin/CategoriesTable';
import CommentTable from './Pages/admin/CommentTable';
import ForgotPassword from './Pages/forms/ForgotPassword';
import NotFound from './Pages/not-found/NotFound';
// import ResetPassword from './Pages/forms/ResetPassword';
import { useSelector } from 'react-redux';

function App() {
  const { user } = useSelector(state => state.auth)

  console.log(user);


  return (
    <BrowserRouter>
      <ToastContainer position="top-center" theme="colored" />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* posts route group */}
        <Route path="posts">
          <Route index element={<PostsPage />} />
          <Route path="create-post" element={user ? <CreatePost /> : <Navigate to="/" />} />
          <Route path="details/:id" element={<PostDetails />} />
          <Route path="categories/:category" element={<CategoryPage />} />
        </Route>
        {/* admin-dashboard route group */}
        <Route path="admin-dashboard">
          <Route index element={user?.isAdmin ? <DashboardAdmin /> : <Navigate to="/" />} />
          <Route path="users-table" element={user?.isAdmin ? <UsersTable /> : <Navigate to="/" />} />
          <Route path="posts-table" element={user?.isAdmin ? <PostsTable /> : <Navigate to="/" />} />
          <Route path="categories-table" element={user?.isAdmin ? <CategoriesTable /> : <Navigate to="/" />} />
          <Route path="comments-table" element={user?.isAdmin ? <CommentTable /> : <Navigate to="/" />} />
        </Route>


        <Route path="/profile/:id" element={<ProfilePage />} />



        <Route path="/login" element={!user ? < LoginPage /> : <Navigate to="/" />} />
        <Route path="/register" element={!user ? <RegisterPage /> : <Navigate to="/" />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* <Route path="/reset-password" element={<ResetPassword />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
