import { useState } from "react";
import { MOCK_ADS } from "@/lib/data";
import { AdCard } from "@/components/AdCard";
import { AdModal } from "@/components/AdModal";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const AdsDashboard = () => {
  const [selectedAd, setSelectedAd] = useState<any>(null);

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-serif text-gomory-black">Anuncios</h1>
          <p className="text-gray-500">Explora servicios exclusivos</p>
        </div>
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <Input className="pl-10 h-12 rounded-full border-none shadow-sm" placeholder="Buscar..." />
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {MOCK_ADS.map((ad) => (
          <AdCard key={ad.id} ad={ad} onClick={() => setSelectedAd(ad)} />
        ))}
      </div>

      <AdModal 
        ad={selectedAd} 
        open={!!selectedAd} 
        onOpenChange={() => setSelectedAd(null)} 
      />
    </div>
  );
};
