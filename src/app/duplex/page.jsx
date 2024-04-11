import NavBar from "../components/NavBar";
import Contenidoduplex from "../components/Contenidoduplex";
import Footer from "../components/Footer";
import Carouselduplex from "../components/Carouselduplex";

const page = () => {
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <Carouselduplex></Carouselduplex>
      <div>
        <Contenidoduplex></Contenidoduplex>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default page;
