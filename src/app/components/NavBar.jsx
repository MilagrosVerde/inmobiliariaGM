import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Login from "./LoginPage";
import Image from "next/image";

export default function App() {
  return (
    <Navbar position="static">
      <NavbarBrand className="sm:flex w-full">
        <Link href="/" className=" w-10">
          <Image
            src={"/logo.png"}
            width={1200}
            height={600}
            className="w-full rounded-3xl"
          ></Image>
        </Link>
        <Link href="/" className=" w-60">
          <Image
            src={"/nombre.png"}
            width={1200}
            height={600}
            className="w-full"
          ></Image>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className=" text-lg " color="foreground" href="#">
            Alquiler
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className=" text-lg "
            color="foreground"
            href="#"
            aria-current="page"
          >
            Compra
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className=" text-lg " color="foreground" href="#">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex text-lg">
          <Link href="/login"> Login </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} className=" bg-slate-200" href="#" variant="flat">
            <Link href="/login"> Sign Up </Link>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
