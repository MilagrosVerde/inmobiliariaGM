import NavBar from "../components/NavBar"
import Gallery from "../components/Gallery"
import Contenido from "../components/Contenido"
import Footer from "../components/Footer"
import Carousel from "../components/Carousel"



const page = () => {
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <Carousel></Carousel>
      <div>
        <Contenido></Contenido>
      </div>
      <Footer></Footer>

    </div>
  )
}

export default page