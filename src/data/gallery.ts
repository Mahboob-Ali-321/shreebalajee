import { IMAGES } from "./images";

export interface GalleryItem {
  id: string;
  src: string;
  caption: string;
  alt: string;
  objectPosition: string;
}

/**
 * Master gallery photos for "Our Ground Fleet in Dhanbad".
 * Existing 6 photos first, followed by the newly added ground fleet photos.
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  // 1. Existing 6 Gallery Items (first and unchanged)
  {
    id: "fleet-hero",
    src: IMAGES.heroFleet,
    caption: "Full Lineup: Swift, Ertiga, Innova Crysta, Scorpio",
    alt: "Full Lineup: Swift, Ertiga, Innova, Scorpio",
    objectPosition: "center center",
  },
  {
    id: "innova-crysta-ground",
    src: IMAGES.innovaCrysta,
    caption: "Toyota Innova Crysta (JH 10 BK 3670) • Executive Class",
    alt: "Toyota Innova Crysta (JH 10 BK 3670)",
    objectPosition: "center center",
  },
  {
    id: "scorpio-lineup",
    src: IMAGES.scorpioLineup,
    caption: "Mahindra Scorpio (JH 10 DG 6565) & MPVs",
    alt: "Mahindra Scorpio Classic and MPV line",
    objectPosition: "center center",
  },
  {
    id: "honda-wrv-ground",
    src: IMAGES.hondaWrv,
    caption: "Honda WR-V (JH 10 BY 8205) • Compact Luxury",
    alt: "Honda WR-V (JH 10 BY 8205)",
    objectPosition: "center center",
  },
  {
    id: "chauffeurs-cabs",
    src: IMAGES.ownerFounder,
    caption: "Dedicated Chauffeurs & Inspected Clean Cabs",
    alt: "Dedicated Team and Inspected Vehicles",
    objectPosition: "center center",
  },
  {
    id: "swift-hatchback",
    src: IMAGES.marutiSwift,
    caption: "Maruti Suzuki Swift • Fuel-Efficient Hatchback",
    alt: "Maruti Suzuki Swift cab in Dhanbad",
    objectPosition: "center 55%",
  },

  // 2. 11 New Real Ground Fleet Photos
  {
    id: "balajee7",
    src: "/images/gallery/balajee7.jpeg",
    caption: "Honda WR-V",
    alt: "Honda WR-V taxi on a lakeside road in Dhanbad",
    objectPosition: "center 72%",
  },
  {
    id: "balajee10",
    src: "/images/gallery/balajee10.jpeg",
    caption: "Wedding car decoration, Innova Crysta",
    alt: "Toyota Innova Crysta decorated with flowers for a wedding",
    objectPosition: "center 50%",
  },
  {
    id: "balajee11",
    src: "/images/gallery/balajee11.jpeg",
    caption: "Toyota Innova Crysta",
    alt: "Toyota Innova Crysta taxi parked under trees",
    objectPosition: "center 60%",
  },
  {
    id: "blajee1",
    src: "/images/gallery/blajee1.jpeg",
    caption: "Wedding car decoration",
    alt: "White Kia car decorated with flowers and ribbons for a wedding",
    objectPosition: "center 55%",
  },
  {
    id: "balajee3",
    src: "/images/gallery/balajee3.jpeg",
    caption: "Kia Carens and Maruti Suzuki XL6",
    alt: "Kia Carens and Maruti Suzuki XL6 cabs parked side by side",
    objectPosition: "center 50%",
  },
  {
    id: "balajee6",
    src: "/images/gallery/balajee6.jpeg",
    caption: "Maruti Suzuki XL6",
    alt: "Maruti Suzuki XL6 cab, side view",
    objectPosition: "center 50%",
  },
  {
    id: "balajee5",
    src: "/images/gallery/balajee5.jpeg",
    caption: "Maruti Suzuki Ertiga",
    alt: "White Maruti Suzuki Ertiga cab, front view",
    objectPosition: "center 45%",
  },
  {
    id: "balajee8",
    src: "/images/gallery/balajee8.jpeg",
    caption: "Honda WR-V and Maruti Suzuki Ertiga",
    alt: "Honda WR-V and Maruti Suzuki Ertiga cabs parked together",
    objectPosition: "center 50%",
  },
  {
    id: "balajee4",
    src: "/images/gallery/balajee4.jpeg",
    caption: "Maruti Suzuki XL6, front view",
    alt: "Maruti Suzuki XL6 cab, front view",
    objectPosition: "center 30%",
  },
  {
    id: "balajee9",
    src: "/images/gallery/balajee9.jpeg",
    caption: "Wedding car decoration, evening event",
    alt: "White Kia car decorated with flowers for a wedding event",
    objectPosition: "center 50%",
  },
  {
    id: "balajee2",
    src: "/images/gallery/balajee2.jpeg",
    caption: "Maruti Suzuki XL6, rear side view",
    alt: "Maruti Suzuki XL6 cab, rear side view",
    objectPosition: "center 50%",
  },
];
