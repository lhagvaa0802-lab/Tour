"use client";

// import { Tour } from "@/components/Tour";
const destionation = [
  {
    id: 1,
    image: "https://www.course-api.com/images/tours/tour-1.jpeg",
    def: "Best of Paris in 7 Days Tour",
    text: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  },
  {
    id: 2,
    image: "https://www.course-api.com/images/tours/tour-1.jpeg",
    def: "Best of Paris in 7 Days Tour",
    text: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  },
  {
    id: 3,
    image: "https://www.course-api.com/images/tours/tour-1.jpeg",
    def: "Best of Paris in 7 Days Tour",
    text: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  },
  {
    id: 4,
    image: "https://www.course-api.com/images/tours/tour-1.jpeg",
    def: "Best of Paris in 7 Days Tour",
    text: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  },
  {
    id: 5,
    image: "https://www.course-api.com/images/tours/tour-1.jpeg",
    def: "Best of Paris in 7 Days Tour",
    text: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  },
];
export default function Home() {
  return (
    <div className="bg-white-200 h-screen grid grid-cols-3 gap-4 w-264 items-center ml-auto mr-auto">
      {destionation.map(({ id, image, def, text }) => (
        <Tour key={id} image={image} def={def} text={text} />
      ))}
    </div>
  );
}

const Tour = ({ image, def, text }) => {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg shadow-lg pb-8">
      <img src={image} alt="pic" width={352} height={350} />
      <h2 className="font-semibold">{def}</h2>
      <div className=" flex flex-col gap-10 w-88 items-center px-6">
        <p className=" text-gray-500">{text}</p>
        <button className="border-2 border-green-600 w-full text-green-600">
          Not Interested
        </button>
      </div>
    </div>
  );
};
