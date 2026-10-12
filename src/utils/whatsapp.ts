import { BUSINESS_INFO } from "../data/business";

export interface BookingDetails {
  pickup: string;
  drop: string;
  dateTime?: string;
  vehicle?: string;
  tripType?: string;
  name?: string;
  notes?: string;
}

export function createWhatsAppBookingUrl(details: BookingDetails): string {
  const parts: string[] = ["Hi Shree Balajee Travels, I want to book a cab:"];

  if (details.name) {
    parts.push(`- Name: ${details.name}`);
  }
  if (details.pickup) {
    parts.push(`- Pickup: ${details.pickup}`);
  }
  if (details.drop) {
    parts.push(`- Drop: ${details.drop}`);
  }
  if (details.dateTime) {
    parts.push(`- Date & Time: ${details.dateTime}`);
  }
  if (details.tripType) {
    parts.push(`- Trip Type: ${details.tripType}`);
  }
  if (details.vehicle) {
    parts.push(`- Vehicle: ${details.vehicle}`);
  }
  if (details.notes) {
    parts.push(`- Notes: ${details.notes}`);
  }

  parts.push("");
  parts.push("Please share the fare and availability.");

  const encoded = encodeURIComponent(parts.join("\n"));
  return `https://wa.me/91${BUSINESS_INFO.phoneRaw}?text=${encoded}`;
}

export function createCarBookingWhatsAppUrl(carName: string): string {
  const text = encodeURIComponent(`Hi, I want to book ${carName}`);
  return `https://wa.me/91${BUSINESS_INFO.phoneRaw}?text=${text}`;
}

export function createRouteFareWhatsAppUrl(from: string, to: string): string {
  const text = encodeURIComponent(`Hi Shree Balajee Travels, please quote fare for One-Way Drop from ${from} to ${to}`);
  return `https://wa.me/91${BUSINESS_INFO.phoneRaw}?text=${text}`;
}

export function createPackageWhatsAppUrl(packageTitle: string): string {
  const text = encodeURIComponent(`Hi Shree Balajee Travels, I want to book the ${packageTitle} Local Package in Dhanbad`);
  return `https://wa.me/91${BUSINESS_INFO.phoneRaw}?text=${text}`;
}
