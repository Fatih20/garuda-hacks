import { getServerAuthSession } from "../api/auth/[...nextauth]/auth-options";
import "../globals.css";
import SessionProviderClientComponent from "../session-provider";
import Sidebar from "@/components/ui/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerAuthSession();


  return (
    
      <div className="flex flex-row">
        <Sidebar />
        <div className="ml-60 flex-auto">{children}</div>
      </div>
   
  );
}
