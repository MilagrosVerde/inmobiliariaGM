import React from "react";
import { Link } from "@nextui-org/react";
import Image from "next/image";

const Cards = () => {
  return (
    <div class="container mx-auto px-3 py-2 lg:px-38 lg:pt-10 ">
      <div class="-m-1 flex flex-wrap md:-m-2">
        <div class="flex w-1/3 flex-wrap">
          <Link href="/departamento">
            <div class="w-full p-1 md:p-6">
              <Image
                src={"/depto1.jpg"}
                width={1000}
                height={800}
                className="rounded-xl "
              ></Image>
            </div>
          </Link>
        </div>
        <div class="flex w-1/3 flex-wrap">
          <Link href="/departamento">
            <div class="w-full p-1 md:p-6">
              <Image
                src={"/depto3.jpg"}
                width={1000}
                height={800}
                className="rounded-xl h-80 "
              ></Image>
            </div>
          </Link>
        </div>
        <div class="flex w-1/3 flex-wrap">
          <Link href="/duplex">
            <div class="w-full p-1 md:p-6">
              <Image
                src={"/duplex1.jpg"}
                width={1000}
                height={800}
                className="rounded-xl h-80 "
              ></Image>
            </div>
          </Link>
        </div>

        <div class="flex w-1/3 flex-wrap">
          <Link href="/duplex">
            <div class="w-full p-1 md:p-6">
              <Image
                src={"/duplex6.jpg"}
                width={1000}
                height={800}
                className="rounded-xl h-80 "
              ></Image>
            </div>
          </Link>
        </div>
        <div class="flex w-1/3 flex-wrap">
          <Link href="/card">
            <div class="w-full p-1 md:p-6">
              <Image
                src={"/casa3.PNG"}
                width={1000}
                height={800}
                className="rounded-xl h-80 "
              ></Image>
            </div>
          </Link>
        </div>
        <div class="flex w-1/3 flex-wrap">
          <Link href="/card">
            <div class="w-full p-1 md:p-6">
              <Image
                src={"/casa4.PNG"}
                width={1000}
                height={800}
                className="rounded-xl h-80 "
              ></Image>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
