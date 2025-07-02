import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";
import {
  Bell,
  CalendarDaysIcon,
  ClipboardList,
  FilePenLine,
  LogOut,
  MessageCircleWarningIcon,
  Users,
  Users2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

export default function AppSidebar() {
  const sidebarMenu = {
    admin: [
      {
        title: "Data Siswa",
        url: "#",
        icon: Users,
      },
      {
        title: "Data Guru",
        url: "#",
        icon: Users2,
      },
      {
        title: "Jadwal Mata Pelajaran",
        url: "#",
        icon: CalendarDaysIcon,
      },
      {
        title: "Pengumuman",
        url: "#",
        icon: Bell,
      },
    ],
    guru: [
      {
        title: "Jadwal Mengajar",
        url: "#",
        icon: CalendarDaysIcon,
      },
      {
        title: "Input Nilai",
        url: "#",
        icon: FilePenLine,
      },
      {
        title: "Absensi Siswa",
        url: "#",
        icon: ClipboardList,
      },
    ],
    siswa: [
      {
        title: "Jadwal Mata Pelajaran",
        url: "#",
        icon: CalendarDaysIcon,
      },
      {
        title: "Nilai Akademik",
        url: "#",
        icon: FilePenLine,
      },
      {
        title: "Absensi Pelajaran",
        url: "#",
        icon: ClipboardList,
      },
      {
        title: "Pengumuman",
        url: "#",
        icon: Bell,
      },
    ],
  };

  const { open } = useSidebar();
  return (
    <Sidebar collapsible="icon" className="">
      <SidebarHeader>
        <h1
          className={cn("text-2xl font-semibold px-2 py-2", open || "hidden")}
        >
          Sistem <span className="text-primary">Akademik</span>
        </h1>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="py-4">
            <SidebarMenu className="gap-2">
              {sidebarMenu.admin.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="gap-4 " asChild>
                    <a
                      href={item.url}
                      className=""
                    >
                      <div>
                        <item.icon size={22} className="group-hover/menu-item:scale-110"/>
                      </div>
                      <span
                        className=""
                      >
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <Separator />
      <SidebarFooter className="pb-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <div>
                  <MessageCircleWarningIcon size={22} className="group-hover/menu-item:scale-110"/>
                </div>
                <span className="ml-auto">Laporkan Isu</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <div>
                  <LogOut size={22} className="group-hover/menu-item:scale-110"/>
                </div>
                <span className="ml-auto">Log Out</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
