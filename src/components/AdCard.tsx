import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AdCard = ({ ad, onClick }: { ad: any, onClick: () => void }) => (
  <Card 
    className="overflow-hidden cursor-pointer hover:shadow-xl transition-all border-none bg-gomory-cream group"
    onClick={onClick}
  >
    <div className="relative aspect-[3/4] overflow-hidden -mt-4">
      <img 
        src={ad.image} 
        alt={ad.name} 
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <p className="text-white font-bold text-lg">{ad.name}</p>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className={i < ad.rating ? "fill-gomory-gold text-gomory-gold" : "text-gray-400"} />
          ))}
        </div>
      </div>
    </div>
    <CardContent className="p-3 text-sm text-gomory-black flex justify-between items-center">
      <span>{ad.location}</span>
      <span className="font-bold text-gomory-gold">{ad.price}</span>
    </CardContent>
  </Card>
);
