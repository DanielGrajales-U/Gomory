import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const RegisterView = ({ onRegister, onGoToLogin }: any) => (
  <div className="space-y-6">
    <div className="text-center">
      <h2 className="text-3xl font-serif text-gomory-black">Registro</h2>
      <p className="text-gray-500">Crea tu perfil en la plataforma</p>
    </div>
    <div className="space-y-4">
      <Input placeholder="Nombre completo" />
      <Input placeholder="Correo electrónico" />
      <div className="grid grid-cols-2 gap-2">
        <Input type="password" placeholder="Contraseña" />
        <Input type="password" placeholder="Confirmar" />
      </div>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Tipo de cuenta" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="client">Cliente (Consumidor)</SelectItem>
          <SelectItem value="advertiser">Anunciante (Modelo/Agencia)</SelectItem>
        </SelectContent>
      </Select>
      <Button onClick={onRegister} className="w-full h-12 bg-gomory-black text-gomory-gold hover:bg-black font-bold">
        CREAR CUENTA
      </Button>
    </div>
    <p className="text-center text-sm">
      Ya tengo cuenta - <button onClick={onGoToLogin} className="text-gomory-black font-bold hover:underline">Iniciar Sesión</button>
    </p>
  </div>
);
