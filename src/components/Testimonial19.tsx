"use client";

import React, { useState, useEffect } from "react";
import type { CarouselApi } from "@relume_io/relume-ui";
import { BiSolidStar } from "react-icons/bi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";

type ImageProps = {
  src: string;
  alt?: string;
};

type GoogleReview = {
  numberOfStars: number;
  quote: string;
  avatar: ImageProps;
  name: string;
  date: string;
  initial?: string;
};

type Props = {
  heading: string;
  description: string;
  googleRating: number;
  totalReviews: number;
  reviews: GoogleReview[];
};

export type GoogleReviewsCarouselProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

// Sample data
const sampleReview: GoogleReview = {
  numberOfStars: 5,
  quote: "Stefan je pravi profesionalac!",
  avatar: {
    src: "https://ui-avatars.com/api/?name=A+Dc&background=4285f4&color=fff&size=48",
    alt: "Adam avatar",
  },
  name: "Adam",
  date: "Pre 3 nedelje",
  initial: "A"
};

const GoogleReviewsCarouselDefaults: Props = {
  heading: "Šta naši klijenti kažu",
  description: "Pogledajte šta kažu zadovoljni klijenti o našem radu",
  googleRating: 5.0,
  totalReviews: 64,
  reviews: [
    sampleReview,
    {
      numberOfStars: 5,
      quote: "Nakon intenzivnih bolova u donjem delu ledja, Stefan je pronašao rešenje i nakon par seansi kod njega sve je bilo mnogo bolje čak i više od toga. Što je najlepše od svega, pregled je besplatan!!! Moja iskrena preporuka 🤌🤌",
      avatar: {
        src: "https://ui-avatars.com/api/?name=Sna+Movanovic&background=34a853&color=fff&size=48",
        alt: "Stefan Manžuković avatar",
      },
      name: "Stefan Manžuković",
      date: "Pre 5 mesec",
      initial: "S"  
    },
    {
      numberOfStars: 5,
      quote: "Желим да изразим своје највише похвале за Стефана за изузетну помоћ и професионализам који је показао током терапије колена. Његова стручност, пажљив приступ и људски однос су заиста на високом нивоу. Увек ми је објаснио сваки корак терапије, што ми је пружило додатну сигурност и поверење. Захваљујући његовом раду, осећам значајно побољшање. Велико хвала Стефану на свему што је учинио за моје здравље!",
      avatar: {
        src: "https://ui-avatars.com/api/?name=Stefan+Sikolic&background=ea4335&color=fff&size=48",
        alt: "Stefan Nikolić avatar",
      },
      name: "Strahinja Stojanović",
      date: "Pre 5 meseci",
      initial: "S"
    },
    {
      numberOfStars: 5,
      quote: "Sve preporuke za Stefana i njegovu fizioterapeutsku ordinaciju! Od prvog trenutka do poslednjeg tretmana – sve je bilo predobro. Profesionalan, ljubazan, posvećen i izuzetno stručan, Stefan zaista zna svoj posao i vidi se da ga radi s puno ljubavi i znanja. Posle samo nekoliko tretmana osetila sam ogromno olakšanje i napredak. Pristup je potpuno individualan, sve se objašnjava jasno i sa pažnjom, a atmosfera je topla i prijatna, kao da dolazite kod prijatelja, a ne na terapiju. Stvarno sam prezadovoljna i sa sigurnošću mogu reći da ću se uvek vraćati kod Stefana kad mi bude potrebna pomoć. Ako tražite vrhunskog fizioterapeuta kojem možete potpuno da verujete – ne tražite dalje!",
      avatar: {
        src: "https://ui-avatars.com/api/?name=Ailica+Atojanovic&background=fbbc05&color=333&size=48",
        alt: "Anica Milovanović avatar",
      },
      name: "Anica Milovanović",
      date: "Pre 1 mesec",
      initial: "A"
    },
    {
      numberOfStars: 5,
      quote: "Nakon višemesečne borbe sa jakim bolovima i nemogućnosti da normalno hodam zbog diskus hernije, mislila sam da mi nema pomoći. Međutim, dolaskom kod Stefana u ordinaciju Myspine, moj oporavak je konačno krenuo pravim putem. Stefan je izuzetno stručan, posvećen i pažljiv. Već na prvom pregledu ulio mi je poverenje detaljnim objašnjenjima mog stanja i jasnim planom terapije. Ono što me posebno impresioniralo jeste njegov individualni pristup i strpljenje — svaki tretman je bio prilagođen mom napretku, bez žurbe i bez površnosti. Zahvaljujući njegovom znanju, profesionalizmu i podršci, danas ponovo hodam bez bolova i vraćam se svakodnevnim aktivnostima koje su mi ranije bile nezamislive. Ordinacija Myspine je moderno opremljena, prijatna i organizovana, a osoblje uvek ljubazno i dostupno. Topla preporuka za sve koji traže pravog stručnjaka u oblasti fizikalne medicine i rehabilitacije. Stefane, hvala Vam od srca!",
      avatar: {
        src: "https://ui-avatars.com/api/?name=Likola+Mitrovic&background=9c27b0&color=fff&size=48",
        alt: "LifelivebyMaja avatar",
      },
      name: "LifelivebyMaja",
      date: "Pre 2 meseca",
      initial: "L"
    },
    {
      numberOfStars: 5,
      quote: "Sve preporuke, dosao sam s jakim bolovima u ledjima, nisam mogao da hodam i da stojim dugo, disk mi je iscureo. Posle deset tretmana i dekompresije kicme osecam veliko poboljsanje, dobru pokretljivpst i izvodjenje svih dnevnih aktivnosti. Stefan ljubazan, fin i strucan.",
      avatar: {
        src: "https://ui-avatars.com/api/?name=Movana+Retrovic&background=ff5722&color=fff&size=48",
        alt: "Marko Rajkovic avatar",
      },
      name: "Marko Rajkovic",
      date: "Pre 3 meseca",
      initial: "M"
    }
  ],
};

const MAX_LENGTH = 190;

// ----------------- KOMPONENTA -----------------
export const GoogleReviewsCarousel = (props: GoogleReviewsCarouselProps) => {
  const { 
    heading, 
    description, 
    googleRating, 
    totalReviews, 
    reviews,
  } = {
    ...GoogleReviewsCarouselDefaults,
    ...props,
  };

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section 
      id="google-reviews" 
      className="px-[5%] py-16 md:py-24 lg:py-28"
      style={{ backgroundColor: '#f8f9fa' }}
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="mx-auto mb-12 w-full max-w-4xl text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl" style={{ color: '#333' }}>
            {heading}
          </h2>
          <p className="md:text-md" style={{ color: '#666' }}>{description}</p>
          
          {/* Google Rating Display */}
          <div className="flex items-center justify-center gap-4 mb-6 mt-8">
            <GoogleLogo />
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array(5).fill(null).map((_, i) => (
                  <BiSolidStar 
                    key={i} 
                    className="w-6 h-6"
                    style={{ 
                      color: i < Math.floor(googleRating) ? '#ffc107' : '#e0e0e0' 
                    }}
                  />
                ))}
              </div>
              <span className="text-lg font-semibold" style={{ color: '#333' }}>
                {googleRating} ({totalReviews} recenzija)
              </span>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: "start",
          }}
          className="overflow-hidden"
        >
          <div className="relative">
            <CarouselContent className="ml-0 md:mx-3.5">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="pl-0 md:basis-1/2 md:px-4 lg:basis-1/3">
                  <GoogleReviewCard review={review} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious 
              className="hidden md:flex md:size-12 lg:size-14" 
              style={{ 
                backgroundColor: 'white',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
            <CarouselNext 
              className="hidden md:flex md:size-12 lg:size-14"
              style={{ 
                backgroundColor: 'white',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>
          
          {/* Dots */}
          <div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className="relative mx-[3px] inline-block size-2 rounded-full"
                style={{
                  backgroundColor: current === index + 1 ? '#4285f4' : 'rgba(0,0,0,0.3)'
                }}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
};

// --------- KARTICA SA PROCITAJ VISE I FADE ----------
const GoogleReviewCard = ({ review }: { review: GoogleReview }) => {
  const [expanded, setExpanded] = useState(false);

  const isLong = review.quote.length > MAX_LENGTH;
  const displayQuote = expanded ? review.quote : review.quote.slice(0, MAX_LENGTH);

  // Dinamična visina: 400px kad je skraćen tekst, auto kad je prošireno
  const cardHeight = expanded ? "auto" : "400px";

  return (
    <div
      className="flex w-full flex-col items-start justify-between p-6 md:p-8 relative transition-all duration-300"
      style={{
        backgroundColor: "white",
        border: "1px solid #e0e0e0",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        height: cardHeight,
        minHeight: 0,
      }}
    >
      {/* Stars */}
      <div className="mb-5 flex md:mb-6">
        {Array(review.numberOfStars)
          .fill(null)
          .map((_, starIndex) => (
            <BiSolidStar
              key={starIndex}
              className="w-6 h-6"
              style={{ color: "#ffc107" }}
            />
          ))}
      </div>

      {/* Quote */}
      <blockquote
        className="md:text-md flex-grow relative"
        style={{
          color: "#333",
          fontStyle: "italic",
          lineHeight: "1.6",
          transition: "max-height 0.3s",
          marginBottom: 0
        }}
      >
        "{displayQuote}"
        {!expanded && isLong && <>...{" "}
          <button
            onClick={() => setExpanded(true)}
            className="text-[#4285f4] font-semibold underline cursor-pointer"
            style={{ background: "none", border: "none", padding: 0 }}
          >
            Pročitaj više
          </button>
        </>}
        {expanded && isLong && (
          <button
            onClick={() => setExpanded(false)}
            className="text-[#4285f4] font-semibold underline cursor-pointer ml-2"
            style={{ background: "none", border: "none", padding: 0 }}
          >
            Prikaži manje
          </button>
        )}
        {/* Fade efekat na dnu samo ako je skraćeno */}
        {!expanded && isLong && (
          <span
            style={{
              display: "block",
              position: "absolute",
              left: 0,
              right: 0,
              bottom: "-12px",
              height: "3em",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0) 0%, white 100%)",
              pointerEvents: "none"
            }}
          />
        )}
      </blockquote>

      {/* Author */}
      <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
        <div>
          {review.avatar?.src ? (
            <img
              src={review.avatar.src}
              alt={review.avatar.alt || `${review.name} avatar`}
              className="size-12 min-h-12 min-w-12 rounded-full object-cover"
            />
          ) : (
            <div
              className="size-12 min-h-12 min-w-12 rounded-full flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: "#4285f4" }}
            >
              {review.initial || review.name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <p className="font-semibold" style={{ color: "#333" }}>
            {review.name}
          </p>
          <p style={{ color: "#666" }}>
            {review.date}
          </p>
        </div>
      </div>
    </div>
  );
};


// ----------- GOOGLE LOGO -----------
const GoogleLogo = () => (
  <a
    href="https://www.google.com/search?q=myspine+smederevo&oq=myspin&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjjAjIJCAAQIxgnGOMCMgwIARAuGCcYrwEYxwEyBggCEEUYOzIGCAMQRRg5MgYIBBBFGDwyBggFEEUYPDIGCAYQRRhBMgYIBxBFGDzSAQgyNjM2ajBqNKgCALACAQ&sourceid=chrome&ie=UTF-8#lrd=0x4750937f529230cb:0x8ac1c052dcf37692,1,,,," 
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none" }}
  >
    <span
      style={{
        fontWeight: 700,
        fontSize: "1.5rem",
        fontFamily: "Arial, sans-serif",
        display: "inline-block",
        letterSpacing: "-1px",
        cursor: "pointer",
        userSelect: "none",
        transition: "opacity 0.2s"
      }}
      onMouseOver={e => (e.currentTarget.style.opacity = "0.8")}
      onMouseOut={e => (e.currentTarget.style.opacity = "1")}
      title="Pogledaj Google recenzije"
    >
      <span style={{ color: "#4285F4" }}>G</span>
      <span style={{ color: "#EA4335" }}>o</span>
      <span style={{ color: "#FBBC05" }}>o</span>
      <span style={{ color: "#4285F4" }}>g</span>
      <span style={{ color: "#34A853" }}>l</span>
      <span style={{ color: "#EA4335" }}>e</span>
    </span>
  </a>
);


// Export aliases za kompatibilnost sa postojećim kodom
export const Testimonial19 = GoogleReviewsCarousel;
export const Testimonial19Defaults = GoogleReviewsCarousel
