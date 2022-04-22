import { Routes, Route, Navigate } from "react-router-dom"
import { MainLayout } from "./layouts";
import { AboutPage, CommentsPage, HomePage, NotFoundPage, PostsPage, SinglePostPage, SingleUserPage, UsersPage } from './pages/index.js'

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout />}>
        <Route index element={<Navigate to={'home'} />} />
        <Route path={'home'} element={<HomePage />} />
        <Route path={'posts'} element={<PostsPage />}>
          <Route path={':postId'} element={<SinglePostPage />} >
            <Route path={'comments'} element={<CommentsPage />}/>
          </Route>
        </Route>
        <Route path={'users'} element={<UsersPage />}>
          <Route path={':userId'} element={<SingleUserPage />}>
            <Route path={'posts'} element={<PostsPage />} />
          </Route>
        </Route>
        {/* <Route path={'about'} element={<AboutPage/>}/> */}
        <Route path={'*'} element={<NotFoundPage />} />
      </Route>
    </Routes >
  );
}

export default App; 