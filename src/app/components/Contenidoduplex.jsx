import React from "react";

const Contenido = () => {
  return (
    <div class="flex min-h-screen items-center justify-center !mt-0 bg-white">
      <div class="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2">
        <div class="row-span-2 flex flex-col rounded-md border border-slate-200">
          <div class="p-10">
            <h3 class="text-xl font-medium text-gray-700">Descripción</h3>
            <p class="mt-2 text-slate-500">
              Hermosa propiedad en venta en La Carolina 3 dormitorios, uno en
              suite con vestidor Living comedor Cocina comedor Quincho pileta y
              patio
            </p>
            <a href="" class="mt-2 inline-flex text-sky-500">
              Read More →
            </a>
          </div>
        </div>
        <div class="flex rounded-md border border-slate-200">
          <div class="flex-1 p-10">
            <h3 class=" text-3xl font-extrabold  text-gray-800">
              {" "}
              285.000 UDS
            </h3>
            <p class="mt-2 text-slate-600 font-bold text-lg"> 3 dormitorios</p>
            <p class="mt-2 text-slate-600 font-bold text-lg"> 5 habientes</p>
            <p class="mt-2 text-slate-600 font-bold text-lg"> 3 baños</p>
            <a href="" class="mt-8 inline-flex text-sky-500 ">
              Read More →
            </a>
          </div>
        </div>
        <div class="flex rounded-md border border-slate-200">
          <div class="flex-1 p-10">
            <h3 class="text-xl font-medium text-gray-700">
              Si estas interesado, podes contactarnos!
            </h3>
            <p class="mt-2 text-slate-500">
              Comunicate al 3512502526 o al 3512602527 y recibi la informacion
              que sobre inmuebles. Tambien podes visitarnos en nuestra sucursal:
              Lima 823, Barrio General Paz Cordoba, Argentina
            </p>
          </div>

          <div class="relative hidden h-full w-1/3 overflow-hidden lg:block">
            <div class="absolute inset-0">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/1205a454c4b64452a51930c9b0043f8db9ff8271/d202e/new/landing/chat-bot.png"
                class="h-full w-full object-cover object-left-top"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contenido;
