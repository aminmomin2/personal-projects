import './index.css';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from './pages/Contact';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router"

 const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='projects' element={<Projects />} />
    <Route path='contact' element={<Contact />} />
  </Route>
 ))
export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
