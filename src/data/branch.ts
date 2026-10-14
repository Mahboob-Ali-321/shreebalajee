export interface BranchDetails {
  name: string;
  badge: string;
  heading: string;
  subtitle: string;
  address: string;
  phoneDisplay: string;
  phoneRaw: string;
  callUrl: string;
  whatsAppUrl: string;
  directionsUrl: string;
  mapEmbedUrl: string;
}

export const DURGAPUR_BRANCH: BranchDetails = {
  name: "Shree Balajee Travels",
  badge: "BRANCH OFFICE",
  heading: "Our Durgapur Branch",
  subtitle: "Our main office is in Bartand, Dhanbad. You can also visit or call our branch office at City Centre, Durgapur.",
  address: "Plot No 217, Near Junction Mall, City Centre, Durgapur, West Bengal 713216",
  phoneDisplay: "+91 93111 12923",
  phoneRaw: "9311112923",
  callUrl: "tel:+919311112923",
  whatsAppUrl: "https://wa.me/919311112923?text=Hello%20Shree%20Balajee%20Travels%2C%20I%20want%20to%20book%20a%20cab%20from%20the%20Durgapur%20branch.",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=Plot%20No%20217%2C%20Near%20Junction%20Mall%2C%20City%20Centre%2C%20Durgapur%20713216",
  mapEmbedUrl: "https://www.google.com/maps?q=Plot%20No%20217%2C%20Near%20Junction%20Mall%2C%20City%20Centre%2C%20Durgapur%20713216&output=embed",
};
