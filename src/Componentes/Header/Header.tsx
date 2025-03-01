export function MyHeader() {
    return (
      <header className="m-0 bg-[#F6CF57] p-14 flex flex-col items-center">
        <img src="/pokebola.png" alt="Pokébola" className="w-24 h-24 mb-6" />
        
        <div className="flex">
          <a href="http://localhost:3000/cartas" className="mx-4 text-2xl font-mono hover:text-red-500 transition-all ease-in duration-200 hover:scale-110">CARTAS</a>
          <a href="http://localhost:3000" className="mx-4 text-2xl font-mono hover:text-red-500 transition-all ease-in duration-200 hover:scale-110">INÍCIO</a>
        </div>
      </header>
    );
  }