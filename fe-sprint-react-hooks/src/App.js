import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import { lazy } from 'react';
import { Suspense } from 'react';
import useFetch from './util/useFetch';
import { useState } from "react";

/* react.lazy()와 suspense를 사용해 보세요. */
const Home = lazy(() => import('./Home'));
const CreateBlog = lazy(() => import('./blogComponent/CreateBlog'));
const BlogDetails = lazy(() => import('./blogComponent/BlogDetail'));
const NotFound = lazy(() => import('./component/NotFound'))

function App() {
  const [blogs, isPending, error] = useFetch('http://localhost:3001/blogs');

  return (
    <BrowserRouter>
      {error && <div>{error}</div>}
      <div className="app">
        <Navbar />
        <div className="content">
          <Suspense>
            <Routes>
              <Route exact path="/" element={<Home blogs={blogs} isPending={isPending} />} />
              <Route path="/create" element={<CreateBlog />} />
              <Route path="/blogs/:id" element={<BlogDetails blog={blogs} />} />
              <Route path="/blogs/:id" element={<NotFound />} />
              {/* params 가져올때 :id 이부분과 같은 이름을 사용해야함 */}
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
