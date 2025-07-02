import AppSidebar from "@/components/AppSidebar";
import AppSidebarInset from "@/components/AppSidebarInset";
import {
  SidebarProvider,
} from "@/components/ui/sidebar";

function MainLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <AppSidebarInset>
        <div className="w-full h-60 bg-blue-50"></div>
        <div className="w-full h-60 bg-blue-50"></div>
        <div className="w-full h-60 bg-blue-50"></div>
        <div className="w-full h-60 bg-blue-50"></div>
        <div className="w-full h-60 bg-blue-50"></div>
        <div className="w-full h-60 bg-blue-50"></div>
        <div className="w-full h-60 bg-blue-50"></div>
        <div className="w-full h-60 bg-blue-50"></div>
      </AppSidebarInset>
      
    </SidebarProvider>
  );
}

export default MainLayout;
