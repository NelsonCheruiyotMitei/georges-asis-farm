/* ============================================================
   GEORGES ASIS FARM: website content.
   Edit this file to change prices, contacts, status or photos.
   ============================================================ */
window.FARM = {
  name: "Georges Asis Farm",
  tagline: "Inclusive Greenhouse Seedling Propagation Enterprise",
  location: "Kapkatet, Kericho County",
  landmark: "near Chematich Primary School",
  mapsQuery: "Chematich Primary School, Kapkatet, Kericho",

  // WhatsApp booking line in international format, no + or spaces
  whatsapp: "254723400665",
  whatsappDisplay: "0723 400 665",
  contactPerson: "Nelson Cheruiyot Mitei",
  phone: "+254712358810",
  phoneDisplay: "0712 358 810",
  email: "mcmitey@gmail.com",

  // Leave empty to hide. Example: "https://www.tiktok.com/@georgesasisfarm"
  social: { tiktok: "", facebook: "" },

  // Status shown on the site. When you start selling, set launched: true
  launched: false,

  // Prices are per seedling (KSh)
  seedlings: [
    { id: "cabbage", name: "Cabbage", local: "Kabichi", price: 2.5, note: "Firm, uniform heads for market and home use.", art: "cabbage" },
    { id: "kale", name: "Kale", local: "Sukuma wiki", price: 2, note: "Kenya's everyday green, ready for continuous picking.", art: "kale" },
    { id: "capsicum", name: "Capsicum", local: "Hoho", price: 4, note: "Sweet pepper seedlings for open field or greenhouse.", art: "capsicum" }
  ],

  // Setup progress (done: true shows a tick)
  progress: [
    { t: "Land secured", d: "Site ready in Kapkatet", done: true },
    { t: "Greenhouse & irrigation", d: "8m × 24m (192 m²) greenhouse with irrigation: being set up", done: false },
    { t: "Trays, seeds & growing media", d: "Inputs for the first batch: being sourced", done: false },
    { t: "First batch", d: "Pre-booking open now", done: false, current: true }
  ],

  // Free stock photos from Pexels (free for commercial use). Replace with real farm photos later,
  // e.g. "assets/img/greenhouse.jpg"
  photos: {
    hero: "https://images.pexels.com/photos/6508409/pexels-photo-6508409.jpeg?auto=compress&cs=tinysrgb&w=1920",
    gallery: [
      { src: "https://images.pexels.com/photos/16678080/pexels-photo-16678080/free-photo-of-plants-in-greenhouse.jpeg?auto=compress&cs=tinysrgb&w=1200", cap: "Greenhouse growing" },
      { src: "https://images.pexels.com/photos/4390619/pexels-photo-4390619.jpeg?auto=compress&cs=tinysrgb&w=1200", cap: "Young seedlings" },
      { src: "https://images.pexels.com/photos/4118322/pexels-photo-4118322.jpeg?auto=compress&cs=tinysrgb&w=1200", cap: "Healthy early growth" },
      { src: "https://images.pexels.com/photos/7728382/pexels-photo-7728382.jpeg?auto=compress&cs=tinysrgb&w=1200", cap: "Preparing seedling trays" }
    ]
  },

  partner: {
    budget: "KSh 650,000",
    covers: ["Greenhouse establishment", "Irrigation system", "Seedling trays", "Quality seeds", "Growing media", "Initial inputs"],
    asks: [
      { t: "Equipment", d: "Greenhouse materials, irrigation kits and seedling trays" },
      { t: "Inputs", d: "Certified seeds and growing media for the first batches" },
      { t: "Technical support", d: "Agronomy advice, incubation and mentorship" },
      { t: "Market linkages", d: "Introductions to cooperatives, agro-dealers and institutions" }
    ]
  }
};
