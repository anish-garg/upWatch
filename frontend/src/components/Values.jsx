/* eslint-disable react/no-unescaped-entities */
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
    {
        title: "Is it accessible?",
        content: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
        title: "Is it styled?",
        content:
            "Yes. It comes with default styles that matches the other components' aesthetic.",
    },
    {
        title: "Is it animated?",
        content:
            "Yes. It's animated by default, but you can disable it if you prefer.",
    },
];

const Values = () => {
    return (
        <div className="mt-24 ml-20">
            <span className="text-2xl font-bold">Our Core Values & Benefits</span>
            <Accordion
                defaultValue="item-0"
                type="single"
                collapsible
                className="max-w-3xl my-4 w-full"
            >
                {items.map(({ title, content }, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="data-[state=open]:border-b-2 data-[state=open]:border-custom-slate dark:data-[state=open]:border-custom-slate"
                    >
                        <AccordionTrigger className="data-[state=open]:text-custom-slate dark:data-[state=open]:text-custom-slate">
                            {title}
                        </AccordionTrigger>
                        <AccordionContent>{content}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default Values