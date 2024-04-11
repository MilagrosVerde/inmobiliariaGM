import React from "react";

const Contenido = () => {
  return (
    <div class="flex min-h-screen items-center justify-center !mt-0 bg-white">
      <div class="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2">
        <div class="row-span-2 flex flex-col rounded-md border border-slate-200">
          <div class="p-10">
            <h3 class="text-xl font-medium text-gray-700">Descripción</h3>
            <p class="mt-2 text-slate-500">
              A tan sólo 5 minutos del centro administrativo y comercial,
              próximo a las principales arterias de la ciudad con acceso
              inmediato a los principales medios de transporte y autopista Bs.
              As. - La Plata. A escasos metros, se ubica la avenida 32, la cual
              posee circuitos aeróbicos, lugares de esparcimiento y recreación
              al aire libre. El proyecto se desarrolla en 6 niveles, ofrece
              unidades funcionales de distintas superficies y características de
              gran categoría. Con una impronta moderna, el diseño y la selectiva
              elección de los materiales se conjugan para lograr un mayor
              confort permitiendo que sus ambientes sean únicos. Terminaciones
              de gran calidad, cuentan con pisos de PVC simil madera, balcón
              tipo deck, aberturas de aluminio con vidrios DVH logrando una
              mayor aislación térmica y acústica, permitiendo la hermeticidad
              del ambiente.
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
              300.000 UDS
            </h3>
            <p class="mt-2 text-slate-600 font-bold text-lg">
              {" "}
              1000 m" totales
            </p>
            <p class="mt-2 text-slate-600 font-bold text-lg"> 5 habientes</p>
            <p class="mt-2 text-slate-600 font-bold text-lg">
              {" "}
              3 baños totales
            </p>
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
              Comunicate al 35176525dsb y recibi la informacion que neceusras
              sobre nidades funcionales de distintas superficies y
              características de gran categoría.
            </p>
            <a href="" class="mt-2 inline-flex text-sky-500">
              Read More →
            </a>
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
