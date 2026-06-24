import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const LoginView = ({ onLogin, onGoToRegister }: any) => (
  <div className="space-y-6">
    <div className="text-center">
      <h2 className="text-3xl font-serif text-gomory-black">Bienvenido</h2>
      <p className="text-gray-500">Ingresa a tu cuenta premium</p>
    </div>
    <div className="space-y-4">
      <Input placeholder="Usuario o Correo" className="h-12" />
      <Input type="password" placeholder="Contraseña" className="h-12" />
      <Button onClick={onLogin} className="w-full h-12 bg-gomory-black text-gomory-gold hover:bg-black font-bold">
        INICIAR SESIÓN
      </Button>
    </div>
    <p className="text-center text-sm">
      <button onClick={onGoToRegister} className="text-gomory-black font-bold hover:underline">
        Crear cuenta nueva
      </button>
    </p>
  </div>
);
