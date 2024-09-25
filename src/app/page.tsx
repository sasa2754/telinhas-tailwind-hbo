import Image from "next/image";

import hbo from '../img/icon/hbo.png';
import perfil from '../img/icon/perfil.png';

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

        <div className="bg-neutral-900 opacity-75 fixed w-screen bottom-0 left-0 h-20">
            
        </div>
      </section>
    </>
  );
}
