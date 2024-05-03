import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { portfolios } from "@/lib/data";

const Portfolio = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {portfolios.map((portfolio) => (
        <Card key={portfolio.title} className="border-2 border-white bg-black bg-opacity-20 hover:bg-slate-950 text-white">
          <CardHeader className="flex flex-col items-center gap-1">
            <Image src={portfolio.image} alt="Portfolio" width={500} height={500} className="rounded-t-lg" />
            <CardTitle className="text-2xl md:text-3xl underline">{portfolio.title}</CardTitle>
          </CardHeader>
          <CardDescription className="mx-6 grid grid-cols-2 sm:grid-cols-3 gap-1">
            {portfolio.tags.map((tag) => (
              <span key={tag} className="bg-white bg-opacity-10 rounded-r-full px-2 text-sky-200 text-xs">{tag}</span>
            ))}
          </CardDescription>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value={portfolio.title}>
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent className="text-sm text-justify indent-8 px-2">{portfolio.description}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
          <CardFooter className="flex justify-between text-black">
            <Link href={portfolio.linkSourceCode}>
              <Button variant="outline">Source Code</Button>
            </Link>
            <Link href={portfolio.linkVisit}>
              <Button variant="outline">Visit</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Portfolio;
