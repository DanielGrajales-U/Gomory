import { LayoutDashboard, PlusCircle, LogOut, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Sidebar = ({ onLogout, onNavigate, currentView }: any) => (
  <aside className="w-64 bg-gomory-black text-white p-6 hidden md:flex flex-col h-screen sticky top-0 border-r border-white/5">
    <div className="mb-10 px-2">
      <h2 className="text-3xl font-serif text-gomory-gold">Gomory</h2>
      <p className="text-[10px] text-gray-500 tracking-[.2em] uppercase">Panel de Control</p>
    </div>

    <nav className="space-y-1 mb-10">
      <Button 
        variant="ghost" 
        onClick={() => onNavigate('dashboard')} 
        className={`w-full justify-start gap-3 h-11 rounded-lg ${currentView === 'dashboard' ? 'bg-gomory-gold text-gomory-black font-bold' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
      >
        <LayoutDashboard size={18} /> Anuncios
      </Button>
      <Button 
        variant="ghost" 
        onClick={() => onNavigate('create')} 
        className={`w-full justify-start gap-3 h-11 rounded-lg ${currentView === 'create' ? 'bg-gomory-gold text-gomory-black font-bold' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
      >
        <PlusCircle size={18} /> Publicar
      </Button>
    </nav>

    <div className="flex-1 space-y-6">
      <div className="px-2 flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
        <Filter size={14} /> Filtros
      </div>
      <div className="space-y-3 px-1">
        <FilterSelect placeholder="Ciudad" options={["Bogotá", "Medellín", "Cali"]} />
        <FilterSelect placeholder="Categoría" options={["Escort", "Masajes", "Boutique"]} />
      <FilterSelect placeholder="Preferencia Sexual" options={["Heterosexual", "Transexual", "Homosexual"]} />
        </div>
    </div>

    <Button onClick={onLogout} variant="ghost" className="justify-start gap-3 text-gray-500 hover:text-red-400 mt-auto px-2">
      <LogOut size={18} /> Cerrar Sesión
    </Button>
  </aside>
);

const FilterSelect = ({ placeholder, options }: any) => (
  <Select>
    <SelectTrigger className="bg-white/5 border-none h-9 text-xs text-gray-300 w-full">
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
    <SelectContent className="bg-gomory-black text-white border-white/10">
      {options.map((opt: string) => <SelectItem key={opt} value={opt.toLowerCase()}>{opt}</SelectItem>)}
    </SelectContent>
  </Select>
);
