import Header from "./components/Header";
import Carousel from "./components/Carousel";
import CarouselMain from "./components/CarouselMain";
import Call from "./components/Call";
import PorqueElegirnos from "./components/PorqueElegirnos";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ImgStart from "./components/ImgStart";
import Galery from "./components/Galery";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <body>
                  <CarouselMain />
                  <ImgStart />
                  <Carousel />
                  <Call />
                  <PorqueElegirnos />
                  <Services />
              </body>
            </div>
          }
        />
          <Route
          path="/galery"
          element={
            <div>
              <body>
                  <Galery />
              </body>
            </div>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
