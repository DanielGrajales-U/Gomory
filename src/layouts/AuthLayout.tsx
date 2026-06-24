import React from "react";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gomory-black p-10">
      {/* Lado Izquierdo: Branding/Imagen */}
      <div className="hidden lg:flex w-1/2 relative flex-col items-center justify-center overflow-hidden rounded-2xl">
        <img 
          src="../../public/22.jpg" 
          className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-7xl font-serif text-gomory-gold">Gomory</h1>
          <p className="text-gomory-gold tracking-[0.3em] uppercase text-sm mt-2">Scorts</p>
        </div>
      </div>
      {/* Lado Derecho: Formulario */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-gomory-cream p-10 rounded-xl shadow-2xl">
          {children}
        </div>
      </div>
    </div>
  );
};
