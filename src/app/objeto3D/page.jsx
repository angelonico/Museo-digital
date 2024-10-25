export default function Page() {
  return (
    <div>
      {/* Main */}
      <div className="h-screen flex">
        {/* Modelo 3D */}
        <div className="bg-black h-full w-3/4">
          <h1 className="text-white text-6xl">Holaaa</h1>
        </div>

        {/* Descripcion */}
        <div className="flex flex-col text-black">
          <h1>Titulo del objeto</h1>
          <p>Otros nombres...</p>
        </div>
      </div>
    </div>
  );
}
