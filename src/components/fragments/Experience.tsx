import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data";

const Experience = () => {
  return (
    <div className="border-l-2 border-white">
      <Accordion type="single" collapsible className="w-full">
        {experiences.map((experience) => (
          <AccordionItem key={experience.company} value={experience.position}>
            <AccordionTrigger>
              <div className="flex items-center justify-between w-full px-2">
                <div className="flex flex-col md:flex-row gap-1 md:gap-4">
                  <h5 className="text-md md:text-lg font-semibold">{experience.position}</h5>
                  <Badge className="text-sm md:text-md bg-primary">{experience.company}</Badge>
                </div>
                <h6 className="text-sm md:text-lg">{experience.duration}</h6>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-lg text-justify indent-8 px-2">{experience.description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Experience;
