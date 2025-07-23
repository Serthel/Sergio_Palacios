import React from "react";

const Header: React.FC = () => {
  return (
    <section className="bg-gray-800 rounded-xl p-8 shadow-xl border border-green-500/20">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="shrink-0">
          <img
            src="https://ext.same-assets.com/408473907/4091251700.jpeg"
            alt="Avatar de Sergio A. Palacios"
            className="w-32 h-32 rounded-full border-4 border-green-500"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold text-green-400 mb-2">
            Sergio A. Palacios (Serthel)
          </h1>
          <p className="text-xl text-gray-300 mb-3">
            Desarrollador Web Full Stack
          </p>
          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
            <img
              src="https://ext.same-assets.com/408473907/2550213249.svg"
              alt="Ubicación"
              className="w-4 h-4"
            />
            <span>Matrix y el mundo real</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
        <a
          href="mailto:palaciossergioandres@gmail.com"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all hover:-translate-y-1"
        >
          📧 palaciossergioandres@gmail.com
        </a>
        <button
          className="border border-gray-600 hover:bg-gray-700 text-gray-300 px-3 py-2 rounded-lg transition-all"
          aria-label="Ver CV"
        >
          📄
        </button>
        <button
          className="border border-gray-600 hover:bg-gray-700 text-gray-300 px-3 py-2 rounded-lg transition-all"
          aria-label="Ver proyectos"
        >
          💻
        </button>
        <button
          className="border border-gray-600 hover:bg-gray-700 text-gray-300 px-3 py-2 rounded-lg transition-all"
          aria-label="Ver experiencia laboral"
        >
          💼
        </button>
      </div>
    </section>
  );
};

export default Header;
