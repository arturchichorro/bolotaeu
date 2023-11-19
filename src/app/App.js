import './App.css';
import { Home } from '../components/Home';
import { PostsList } from '../components/PostsList';
import { About } from '../components/About';
import { Root } from '../components/Root';
import { Post } from '../components/Post';


import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  /* Wrap this Root Route to create Router here */
  <Route path="/" element={<Root />}>
    <Route path="" element={<Home />} />
    <Route path="home" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="posts/" element={<PostsList />} />
    <Route path="posts/:postPath" element={<Post />} />
  </Route>

))

function App() {
  return (
    <RouterProvider router={router} />
  );
}


export default App;
