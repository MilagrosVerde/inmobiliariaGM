"use client"
import {NextUIProvider} from "@nextui-org/react";
import NavBar from "./components/NavBar"
import Portada from "./components/Portada"
import Buscador from "./components/Buscador"
import Cards from "./components/Cards"
import Footer from "./components/Footer"
import Pagination from "./components/Pagination"


export default function Home() {
  return (
    <NextUIProvider>
     <NavBar></NavBar>
     <Portada></Portada>
     <Buscador></Buscador>
     <Cards></Cards>
     <Pagination></Pagination>
     <Footer></Footer>

     

  </NextUIProvider>
  );
}
