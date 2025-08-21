import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";

const AppLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 p-4 transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <h2 className="text-xl font-bold mb-6 text-white">Categorias</h2>
        <nav className="flex flex-col gap-3 text-white">
          <a href="#" className="hover:text-blue-400">
            🎬 Populares
          </a>
          <a href="#" className="hover:text-blue-400">
            ⭐ Top Rated
          </a>
          <a href="#" className="hover:text-blue-400">
            📅 Lançamentos
          </a>
          <a href="#" className="hover:text-blue-400">
            🔥 Ação
          </a>
          <a href="#" className="hover:text-blue-400">
            😂 Comédia
          </a>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col">
        <header className="bg-gray-800 p-4 flex items-center justify-between text-white">
          {/* Botão do menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded hover:bg-gray-700 transition"
          >
            <Menu size={24} />
          </button>

          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-lg w-1/2 text-black hidden md:block"
          />

          <div className="flex items-center gap-4">
            <span className="font-medium">Meu Perfil</span>
            <img
              src="https://ui-avatars.com/api/?name=User"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        <main className="p-6 overflow-y-auto bg-black text-white">
          <Outlet />
        </main>
      </div>

      {/* Overlay (escurece fundo ao abrir sidebar) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-25 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default AppLayout;
