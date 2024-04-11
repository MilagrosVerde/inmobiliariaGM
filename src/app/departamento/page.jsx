import NavBar from "../components/NavBar";
import Gallery from "../components/Gallery";
import Contenidodepto from "../components/Contenidodepto";
import Footer from "../components/Footer";
import Carouseldepto from "../components/Carouseldepto";

const page = () => {
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <Carouseldepto></Carouseldepto>
      <div>
        <Contenidodepto></Contenidodepto>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default page;
