import Comienzo from "./components/comienzo";
import Boton from "./components/boton";

export default function comienzo() {
  return (
    <div>
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <>
          <h1 className="text-4xl font-bold text-center">
            Bienvenido al sitio
          </h1>
          <br />
          <br />
          <Comienzo />
          <Boton />
        </>
      </main>
    </div>
  );
}
