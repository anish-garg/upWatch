import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

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
        {/* Add header content if needed */}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="tw-text-2xl" key={data.title}>
          <SidebarGroupLabel className="tw-font-bold tw-text-xl tw-text-primary">
            {data.title}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.items.map((item, index) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={index === 0 ? "tw-font-extrabold tw-text-lg" : ""}
                    >
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
