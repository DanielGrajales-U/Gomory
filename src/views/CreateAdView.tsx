import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Image as ImageIcon } from "lucide-react";

export const CreateAdView = ({ onPublish }: any) => (
  <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
    <header>
      <h1 className="text-4xl font-serif text-gomory-black">Nuevo Anuncio</h1>
      <p className="text-gray-500">Completa la información para publicar tus servicios.</p>
    </header>

    <div className="grid lg:grid-cols-3 gap-8">
      {/* Columna Fotos */}
      <div className="lg:col-span-1 space-y-4">
        <div className="aspect-[3/4] bg-white border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center text-gray-400 group hover:border-gomory-gold hover:text-gomory-gold cursor-pointer transition-all">
          <Upload className="mb-2 group-hover:scale-110 transition-transform" />
          <span className="text-sm font-medium">Foto principal</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
           {[1,2,3].map(i => (
             <div key={i} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-300 border border-gray-200">
               <ImageIcon size={20} />
             </div>
           ))}
        </div>
      </div>

      {/* Columna Formulario */}
      <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-gray-400">Título</label>
            <Input placeholder="Ej: Valentina Premium" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-gray-400">Ubicación</label>
            <Input placeholder="Ciudad / Barrio" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase text-gray-400">Descripción</label>
          <Textarea className="h-32 resize-none" placeholder="Cuéntale a tus clientes sobre tus servicios..." />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-gray-400">Tarifa / hora</label>
            <Input placeholder="$ 0.00" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-gray-400">Edad</label>
            <Input type="number" placeholder="20" />
          </div>
        </div>

        <Button onClick={onPublish} className="w-full h-14 bg-gomory-black text-gomory-gold hover:bg-black font-bold text-lg rounded-xl">
          PUBLICAR ANUNCIO
        </Button>
      </div>
    </div>
  </div>
);
