import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  // SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import logo from "../assets/Screenshot_2025-02-03_005651-removebg-preview.png"

const data = {
  title: "Uptime",
  url: "/",
  items: [
    {
      title: "Monitoring",
      url: "/monitoring",
    },
    {
      title: "Servers reporting",
      url: "/servers-reporting",
    },
    {
      title: "Incidents",
      url: "/incidents",
    },
    {
      title: "Integrations",
      url: "/integrations",
    },
  ],
};

export function AppSidebar({ ...props }) {
  const location = useLocation(); // Get current URL path

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <a href="/">
          <div className="flex gap-3 items-center">
            <img className="w-8" src={logo} alt="logo" />
            <span className="text-2xl font-bold text-custom-slate">Up Watch</span>
          </div>
        </a>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="text-2xl" key={data.title}>
          {/* <SidebarGroupLabel>{data.title}</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {data.items.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <a href={item.url || "#"}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
