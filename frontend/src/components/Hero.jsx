import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Hero() {
    return (
        <div className="relative overflow-hidden py-24 lg:py-32 bg-custom-skyblue">
            <div
                className="absolute inset-0 z-0 overflow-hidden"
                aria-hidden="true"
            >
                <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] animate-gradient-slow">
                    <div className="absolute inset-0 bg-gradient-to-r from-custom-white via-primary/30 to-custom-slate opacity-90 blur-3xl animate-rotate-slow rounded-full" />
                    <div className="absolute inset-0 bg-gradient-to-l from-custom-white via-secondary/30 to-custom-slate opacity-50 blur-2xl animate-rotate-reverse rounded-full" />
                    <div className="absolute inset-0 bg-gradient-to-t from-custom-white via-secondary/30 to-custom-slate opacity-50 blur-2xl animate-rotate-reverse rounded-full" />
                    <div className="absolute inset-0 bg-gradient-to-b from-custom-white via-secondary/30 to-custom-slate opacity-90 blur-2xl animate-rotate-reverse rounded-full" />
                </div>
            </div>
            <div className="relative z-10">
                <div className="container py-10 lg:py-16">
                    <div className="max-w-2xl text-center mx-auto">
                        <p className="text-muted-foreground">Monitor your sites at ease</p>

                        <div className="mt-5 max-w-2xl">
                            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                                Up Watch
                            </h1>
                        </div>

                        <div className="mt-5 max-w-3xl">
                            <p className="text-xl text-muted-foreground">
                                Monitor, Analyze, and Stay Ahead <br /> Effortless Uptime Monitoring for Your Stack.
                            </p>
                        </div>

                        <div className="mt-8 gap-3 flex justify-center">
                            <Input type="email" placeholder="Your work e-mail" />
                            <Button type="submit">Get Started</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}