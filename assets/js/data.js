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

  // M-Pesa payment details
  payment: {
    paybill: "247247",
    account: "0723400665",
    note: "Pay after we confirm your order and collection date on WhatsApp."
  },

  // Partnership offers (business partnerships, not grants)
  partner: {
    title: "Work with us: seedlings, training and demonstration",
    intro: "We partner with organisations that support farmers. Buy quality seedlings for the groups you work with, train farmers at our greenhouse, or showcase your farm products to the farmers who visit us.",
    offers: [
      { icon: "🤝", t: "Seedlings for CBOs & farmer groups", d: "NGOs, programmes and county projects can buy seedlings in bulk for the CBOs, women's and youth groups they support, with delivery planned around the planting season.", tag: "Bulk supply" },
      { icon: "🎓", t: "Training & demonstration ground", d: "Use our greenhouse as a practical learning site for farmer field days, youth and school visits, and hands-on training in nursery and greenhouse practice.", tag: "Field days" },
      { icon: "📣", t: "Product demonstration & promotion", d: "Agro-input companies can demonstrate seeds, fertilisers, irrigation kits, trays and other farm products on site and introduce them to the farmers who buy from us.", tag: "Demo plots" }
    ],
    benefits: ["Healthy, uniform seedlings at transparent prices", "A real working greenhouse for practical learning", "Direct reach to smallholder farmers in Kericho", "Clear records of seedlings supplied for your reporting"]
  }
};
