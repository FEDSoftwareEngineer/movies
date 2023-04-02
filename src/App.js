import { Route, Routes, BrowserRouter } from "react-router-dom";

//components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import { Suspense } from "react";
import Loading from "./components/LoadingSuspense";

//pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SingleMovie from "./pages/SingleMovie";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="about" element={<About />} />
          <Route path="movies/:movie" element={<SingleMovie />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
