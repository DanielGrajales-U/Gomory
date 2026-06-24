import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare, X } from "lucide-react";

export const AdModal = ({ ad, open, onOpenChange }: any) => {
  if (!ad) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* sm:max-w-[800px] ayuda a que no se estire infinito en pantallas grandes */}
      <DialogContent className="sm:max-w-[850px] p-0 overflow-hidden border-none bg-gomory-cream">
        <div className="flex flex-col md:flex-row h-full md:h-[550px]">
          {/* Lado Imagen: Ocupa el 45% y asegura que la imagen no se deforme */}
          <div className="w-full md:w-[45%] h-64 md:h-full bg-black">
             <img src={ad.image} className="w-full h-full object-cover object-top" alt={ad.name} />
          </div>
          
          {/* Lado Info: 55% restante con padding real */}
          <div className="w-full md:w-[55%] p-8 flex flex-col">
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <DialogTitle className="text-4xl font-serif text-gomory-black leading-none">{ad.name}</DialogTitle>
                  <p className="text-gomory-gold font-bold text-2xl mt-2">{ad.price}</p>
                </div>
              </div>

              <p className="mt-6 text-gray-600 text-sm leading-relaxed border-l-2 border-gomory-gold/30 pl-4 italic">
                "{ad.description}"
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-3">
                 <div className="bg-white/50 p-3 rounded-lg border border-gray-100">
                    <p className="text-[10px] text-gray-400 uppercase tracking-tighter">Ubicación</p>
                    <p className="text-sm font-semibold text-gomory-black">{ad.location}</p>
                 </div>
                 <div className="bg-white/50 p-3 rounded-lg border border-gray-100">
                    <p className="text-[10px] text-gray-400 uppercase tracking-tighter">Edad</p>
                    <p className="text-sm font-semibold text-gomory-black">{ad.age} años</p>
                 </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <Button className="flex-1 bg-gomory-black text-gomory-gold hover:bg-black gap-2 h-12 rounded-full">
                <Phone size={18} /> Llamar
              </Button>
              <Button className="flex-1 bg-[#25D366] text-white hover:bg-[#1eb956] gap-2 h-12 rounded-full border-none">
                <MessageSquare size={18} /> WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
