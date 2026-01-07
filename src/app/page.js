"use client";
import { useState } from "react";

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
    image: "https://www.course-api.com/images/tours/tour-2.jpeg",
    def: "Best of Paris in 7 Days Tour",
    text: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
  },
  {
    id: 3,
    image: "https://www.course-api.com/images/tours/tour-3.jpeg",
    def: "Best of Paris in 7 Days Tour",
    text: "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days",
  },
  {
    id: 4,
    image: "https://www.course-api.com/images/tours/tour-4.jpeg",
    def: "Best of Paris in 7 Days Tour",
    text: "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
  },
  {
    id: 5,
    image: "https://www.course-api.com/images/tours/tour-5.jpeg",
    def: "Best of Paris in 7 Days Tour",
    text: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
  },
];
export default function Home() {
  const [tours, setTours] = useState(destionation);

  const notInterested = (id) => {
    setTours((prev) => prev.filter((tour) => tour.id !== id));
  };
  const Refresh = () => {
    setTours(destionation);
  };

  return (
    <div className="flex flex-col mt-10 mb-10 items-center">
      <h1 className="flex justify-center text-[40px] font-semibold">
        Our Tour
      </h1>

      <div className="mx-auto mt-3 h-1 w-24 bg-green-500 "></div>
      {tours.length === 0 && (
        <button
          onClick={Refresh}
          className="border-4 border-green-600 text-green-6006 w-20 h-10 mt-4"
        >
          Refresh
        </button>
      )}
      <div className="bg-white-200 h-screen grid grid-cols-3 gap-4 w-264  ml-auto mr-auto mt-8 items-stretch">
        {tours.map(({ id, image, def, text }) => (
          <Tour
            id={id}
            key={id}
            image={image}
            def={def}
            text={text}
            onClick={notInterested}
          />
        ))}
      </div>
    </div>
  );
}

const Tour = ({ id, image, def, text, onClick }) => {
  const [fullText, setFullText] = useState(false);

  const readMore = () => {
    setFullText(true);
  };
  const showLess = () => {
    setFullText(false);
  };

  const newText = !fullText ? text?.slice(0, 300) : text;

  return (
    <div className="flex flex-col items-center gap-4 rounded-lg shadow-lg pb-8">
      <img className="bg-cover w-88 h-80" src={image} alt="pic" />
      <h2 className="font-semibold">{def}</h2>
      <div className=" flex flex-col gap-10 w-88 px-6">
        <p className=" text-gray-500">{newText}</p>
        {fullText ? (
          <button onClick={showLess} className="text-green-500 font-bold w-25">
            Show less
          </button>
        ) : (
          <button onClick={readMore} className="text-green-500 font-bold w-25">
            Read more
          </button>
        )}

        <button
          className="border-2 border-green-600 w-full text-green-6006"
          onClick={() => onClick(id)}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};
