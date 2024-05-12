import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { portfolios } from "@/lib/data";

const Portfolio = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {portfolios.map((portfolio) => (
        <Card key={portfolio.title} className="border-2 border-white bg-black bg-opacity-20 hover:bg-slate-950 text-white">
          <CardHeader className="flex flex-col items-center gap-1">
            <Image src={portfolio.image} alt="Portfolio" width={550} height={400} className="rounded-t-lg" />
            <CardTitle className="text-xl md:text-2xl underline">{portfolio.title}</CardTitle>
          </CardHeader>
          <CardDescription className="mx-6 grid grid-cols-3 sm:grid-cols-4 gap-2">
            {portfolio.tags.map((tag) => (
              <span key={tag} className="bg-white bg-opacity-10 rounded-r-full px-2 text-sky-200 text-xs">
                {tag}
              </span>
            ))}
          </CardDescription>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value={portfolio.title}>
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent className="text-sm px-2">
                  {portfolio.description.split("\n").map((item, key) => {
                    return (
                      <span key={key}>
                        {item}
                        <br />
                      </span>
                    );
                  })}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
          <CardFooter className="flex justify-between text-black">
            <Link href={portfolio.linkSourceCode} target="_blank">
              <Button variant="outline">Source Code</Button>
            </Link>
            <Link href={portfolio.linkVisit} target="_blank">
              <Button variant="outline">Visit</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Portfolio;
