import { AppSidebar } from "@/components/app-sidebar"
import { SearchForm } from "@/components/search-form"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { monitorSite } from "@/utilities/api"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const Monitoring = () => {
  const location = useLocation();
  const isCreateMonitor = location.pathname.includes("createMonitor");
  const [monitors, setMonitors] = useState([]);

  useEffect(() => {
    const fetchMonitors = async () => {
      const token = localStorage.getItem("authToken");
      const data = JSON.parse(localStorage.getItem("userData"));
      // console.log(`Page call: ${data.id}`)
      try {
        if (token && data) {
          const sites = await monitorSite(data.id);
          // sites.monitors.forEach(monitor => {
          //   console.log("URL:", monitor.url);
          //   console.log("Status:", monitor.status);
          // });
          setMonitors(sites.monitors || []);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchMonitors();
  }, [])



  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          {isCreateMonitor && (
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/monitoring">
                    Monitoring
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/monitoring/createMonitor">
                    <BreadcrumbPage>Create Monitor</BreadcrumbPage>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          )}
        </header>
        <div className="mt-10 mx-14 flex flex-col gap-9">
          <div className="flex justify-end gap-5">
            <SearchForm />
            <a href="/monitoring/createMonitor"><Button className="bg-custom-slate h-8">Create Monitor</Button></a>
          </div>
          <div className="border-2 border-black rounded-xl w-full min-h-20 p-4">
            {monitors.length > 0 ? (
              <ul className="space-y-3">
                {monitors.map((monitor, index) => (
                  <li
                    key={monitor.id || index}
                    className="flex justify-between items-center p-3 border-b last:border-none"
                  >
                    <span className="font-medium">{monitor.url}</span>
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm ${monitor.status === "Up"
                        ? "bg-green-500"
                        : "bg-red-500"
                        }`}
                    >
                      {monitor.status}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-center">No monitors found.</p>
            )}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Monitoring;
