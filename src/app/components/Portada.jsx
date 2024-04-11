import React from "react";

import Image from "next/image";

export default function App() {
  return (
    <div className="w-full flex !items-center">
      <Image
        src={"/portada.jpeg"}
        width={1340}
        height={600}
        className="w-full"
        alt="portada"
      ></Image>
    </div>
  );
}
