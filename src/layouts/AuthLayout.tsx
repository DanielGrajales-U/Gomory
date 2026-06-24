import React from "react";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gomory-black">
      {/* Lado Izquierdo: Branding/Imagen */}
      <div className="hidden lg:flex w-1/2 relative flex-col items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1551392505-f4056bb330f1?q=80&w=1000" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
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
