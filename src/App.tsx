import { useState } from "react";
import { AuthLayout } from "./layouts/AuthLayout";
import { LoginView } from "./views/LoginView";
import { AdsDashboard } from "./views/AdsDashboard";
import { Sidebar } from "./components/Sidebar";
import { RegisterView } from "./views/RegisterView";
import { CreateAdView } from "./views/CreateAdView";

function App() {
  const [currentView, setCurrentView] = useState<"login" | "register" | "dashboard" | "create">("login");

  if (currentView === "login") {
    return <AuthLayout><LoginView onLogin={() => setCurrentView("dashboard")} onGoToRegister={() => setCurrentView("register")} /></AuthLayout>;
  }

  if (currentView === "register") {
    return <AuthLayout><RegisterView onRegister={() => setCurrentView("dashboard")} onGoToLogin={() => setCurrentView("login")} /></AuthLayout>;
  }

  return (
    <div className="flex min-h-screen bg-gomory-cream">
      <Sidebar 
        currentView={currentView}
        onLogout={() => setCurrentView("login")} 
        onNavigate={(view: any) => setCurrentView(view)} 
      />
      <main className="flex-1 p-8 overflow-y-auto h-screen">
        {currentView === "dashboard" && <AdsDashboard />}
        {currentView === "create" && <CreateAdView onPublish={() => setCurrentView("dashboard")} />}
      </main>
    </div>
  );
}

export default App;
