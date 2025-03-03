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
import { useLocation } from "react-router-dom"

const Monitoring = () => {
  const location = useLocation();
  const isCreateMonitor = location.pathname.includes("createMonitor");

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
          <div>
            <div className="border-2 border-black rounded-xl w-full h-20"></div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Monitoring;
