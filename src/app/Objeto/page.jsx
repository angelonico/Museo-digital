import BotonTarjeta from "../components/BotonTarjeta";
import Galeria from "../components/Galeria";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Galeria />
      <div className="bg-white text-black p-10 flex gap-4">
        <div className="w-1/2">
          <h1 className="text-3xl">Triceraptor</h1>
          <h2 className="text-xs italic">Barney, Dinosaurio, Dumbo</h2>
          <p className="text-justify mt-8">
            El esqueleto de la cabeza del triceratops, un icónico dinosaurio
            herbívoro del Cretácico, es una estructura robusta y distintiva. Su
            cráneo presenta tres prominentes cuernos, dos ubicados sobre los
            ojos y uno en la nariz, que le conferían un aspecto imponente y le
            ayudaban a defenderse de los depredadores. Los cuernos, hechos de
            hueso sólido, están soportados por una estructura ósea ancha y en
            forma de "escudo" que se extiende desde la parte posterior del
            cráneo hacia los lados, conocida como la gola. Esta gola ósea está
            formada por placas óseas fusionadas que proporcionaban una
            protección adicional para el cuello y los órganos vitales. La
            mandíbula del triceratops es fuerte y robusta, equipada con dientes
            adaptados para cortar plantas. El esqueleto de la cabeza también
            incluye una serie de cavidades y suturas óseas que indican una
            estructura compleja y especializada, adaptada a su dieta herbívora y
            a sus necesidades de defensa.
          </p>
        </div>
        <div className="flex justify-center items-center h-screen  w-full">
          <div className="grid grid-cols-2 gap-10">
            <BotonTarjeta title="Origen" />
            <BotonTarjeta title="Dimensiones" />
            <BotonTarjeta title="Categoria" />
            <BotonTarjeta title="Adquisicion" />
          </div>
        </div>
      </div>
    </div>
  );
}
