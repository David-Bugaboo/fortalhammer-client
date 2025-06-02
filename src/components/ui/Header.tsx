import React from "react";

export default function Header() {
  return (
    <header className="relative w-full h-48 md:h-56 flex items-center justify-center overflow-hidden bg-gray-950/95 border-b border-cyan-900/50">
      {/* Imagem de fundo temática - condicional */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        {/* Pattern de pontos para textura */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, #06b6d4 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>
      {/* Conteúdo central */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center select-none">
        <h1 className="text-3xl md:text-5xl font-conduit font-extrabold uppercase text-cyan-300 drop-shadow-2xl tracking-widest mb-2">
          FORTALHAMMER
        </h1>
        <h2 className="text-base md:text-xl font-conduit text-gray-300 font-medium tracking-wide">
          Temporada Nachmund Gauntlet
        </h2>
      </div>
    </header>
  );
}
