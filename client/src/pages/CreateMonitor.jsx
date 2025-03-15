import { AppSidebar } from "@/components/app-sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createMonitor } from "@/utilities/api";

const CreateMonitor = () => {
    const [url, setUrl] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("authToken");
        const data = JSON.parse(localStorage.getItem("userData"));

        if (token && data) {
            try {
                await createMonitor(data.id, url);
                navigate("/monitoring");
            } catch (error) {
                console.error("Error creating monitor:", error);
            }
        }
    };

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="/monitoring">Monitoring</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Create Monitor</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </header>
                <div className="mt-10 mx-14 flex flex-col gap-6">
                    <h1 className="text-xl font-semibold">Create a New Monitor</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/2">
                        <Input
                            type="url"
                            placeholder="Enter website URL"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            required
                        />
                        <Button type="submit" className="bg-custom-slate h-10">
                            Create Monitor
                        </Button>
                    </form>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default CreateMonitor;
