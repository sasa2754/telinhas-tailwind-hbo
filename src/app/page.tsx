import Image from "next/image";

import hbo from '../img/icon/hbo.png';
import titulo from '../img/titulo.png';
import perfil from '../img/icon/perfil.png';
import casa from '../img/icon/casa.png';
import salvar from '../img/icon/salvar.png';
import lupa from '../img/icon/lupa.png';
import filme1 from '../img/filme1.webp';
import filme2 from '../img/filme2.webp';
import filme3 from '../img/filme3.webp';
import filme4 from '../img/filme4.webp';
import filme5 from '../img/filme5.jpg';
import filme6 from '../img/filme6.jpg';
import filme7 from '../img/filme7.jpg';

export default function Home() {
  return (
    <>
      <section className="flex flex-col p-5 h-screen w-screen bg-cover bg-center bg-[url('../img/capa-filme.jpeg')]">
        <div>
          <div className="flex flex-row justify-between items-center">
            <Image src={hbo} className="w-12" alt="Logo"/>
            <Image src={perfil} className="w-8 h-8" alt="Logo"/>
          </div>
          <div className="flex flex-row gap-2 text-white">
            <h2 className="text-lg">Home</h2>
            <h2 className="text-lg">Series</h2>
            <h2 className="text-lg">Movies</h2>
            <h2 className="text-lg">HBO</h2>
            <h2 className="text-lg">New & Notices</h2>
          </div>
        </div>

        <div className="bg-gradient-to-b from-transparent from-10% to-black to-40% fixed w-screen bottom-0 left-0 pb-64 flex flex-col items-center justify-center">
          <Image src={titulo} className="w-full max-w-screen-lg" alt="Logo"/>
          <div className="text-white text-center">
            <h1 className="text-xl">2019 Jan</h1>
            <p className="px-3">Miles Morales se torna o Homem-Aranha após ser atingido por uma teia radioativa. Ao visitar o túmulo de Peter Parker, ele o encontra vivo e usando o traje do herói.</p>
          </div>
        </div>

        <div className="bg-indigo-950 shadow-[0_1px_50px_50px_rgba(30,27,75)] absolute w-screen bottom-0 left-0 h-40">
          <div className="flex flex-row gap-3 justify-center">
            <div className="w-2 h-2 rounded-full bg-neutral-200"></div>
            <div className="w-2 h-2 rounded-full bg-neutral-500"></div>
            <div className="w-2 h-2 rounded-full bg-neutral-500"></div>
            <div className="w-2 h-2 rounded-full bg-neutral-500"></div>
            <div className="w-2 h-2 rounded-full bg-neutral-500"></div>
            <div className="w-2 h-2 rounded-full bg-neutral-500"></div>
          </div>

          <h1 className="text-white text-xl p-2 pt-4"><b>For you</b></h1>

          <div className="flex flex-row justify-around flex-wrap">
          <Image src={filme1} className="w-48 object-cover" alt="Logo"/>
          <Image src={filme2} className="w-48 object-cover" alt="Logo"/>
          <Image src={filme3} className="w-48 object-cover" alt="Logo"/>
          <Image src={filme4} className="w-48 object-cover" alt="Logo"/>
          <Image src={filme5} className="w-48 object-cover" alt="Logo"/>
          <Image src={filme6} className="w-48 object-cover" alt="Logo"/>
          <Image src={filme7} className="w-48 object-cover" alt="Logo"/>
          </div>
        </div>



        <div className="bg-neutral-900 opacity-75 fixed w-screen bottom-0 left-0 h-20 flex items-center justify-around">
          <Image src={casa} className="w-8 h-8" alt="Logo"/>
          <Image src={salvar} className="w-8 h-8" alt="Logo"/>
          <Image src={lupa} className="w-10 h-10" alt="Logo"/>
        </div>
      </section>
    </>
  );
}
