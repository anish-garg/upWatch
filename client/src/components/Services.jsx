import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import images from "../utilities/images.json";

const Services = () => {
    return (
        <div className="mt-24">
            <span className="text-2xl font-bold flex justify-center">UpWatch Monitoring</span>
            <div className="flex justify-center mt-5">
                <Carousel className="w-[90%] max-w-none">
                    <CarouselContent className="-ml-1">
                        {images.map((image, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="rounded-xl border bg-card text-card-foreground shadow">
                                        <CardContent className="p-4 flex flex-col items-center text-center">
                                            <img
                                                src={image.image}
                                                alt={image.title}
                                                className="w-full h-40 object-cover rounded-md"
                                            />
                                            <div className="mt-3">
                                                <h3 className="text-lg font-semibold">{image.title}</h3>
                                                <p className="text-sm text-muted-foreground">{image.description}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
};

export default Services;
