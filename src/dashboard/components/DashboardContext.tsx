"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ViewType = "home" | "single-upload" | "bulk-upload" | "api-integrations" | "templates" | "billing" | "settings";

interface DashboardContextType {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [currentView, setCurrentView] = useState<ViewType>("home");

  return (
    <DashboardContext.Provider value={{ currentView, setCurrentView }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within DashboardProvider");
  }
  return context;
}