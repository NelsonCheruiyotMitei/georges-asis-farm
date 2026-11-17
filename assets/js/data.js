/* ============================================================
   GEORGES ASIS FARM: website content.
   Edit this file to change prices, contacts, hours, status or photos.
   Fields ending in _sw are the Kiswahili version shown when a visitor
   switches the language. Other Kiswahili text is in assets/js/i18n.js.
   ============================================================ */
window.FARM = {
  name: "Georges Asis Farm",
  tagline: "Inclusive Greenhouse Seedling Propagation Enterprise",
  location: "Kapkatet, Kericho County",
  landmark: "near Chematich Primary School",
  landmark_sw: "karibu na Shule ya Msingi Chematich",
  mapsQuery: "Chematich Primary School, Kapkatet, Kericho",

  // WhatsApp booking line in international format, no + or spaces
  whatsapp: "254723400665",
  whatsappDisplay: "0723 400 665",
  contactPerson: "Nelson Cheruiyot Mitei",
  phone: "+254712358810",
  phoneDisplay: "0712 358 810",
  email: "mcmitey@gmail.com",

  // Leave empty to hide. Example: "https://www.tiktok.com/@georgesasisfarm"
  social: { tiktok: "", facebook: "", instagram: "" },

  // Opening hours for collecting seedlings
  hours: [
    { days: "Monday – Friday", days_sw: "Jumatatu – Ijumaa", time: "8:00am – 5:00pm", time_sw: "Saa 2 asubuhi – saa 11 jioni" },
    { days: "Saturday", days_sw: "Jumamosi", time: "8:00am – 1:00pm", time_sw: "Saa 2 asubuhi – saa 7 mchana" },
    { days: "Sunday", days_sw: "Jumapili", time: "Closed", time_sw: "Tumefunga" }
  ],

  // Status shown on the site. When you start selling, set launched: true
  launched: false,

  // Prices are per seedling (KSh)
  seedlings: [
    { id: "cabbage", name: "Cabbage", local: "Kabichi", price: 2.5, note: "Firm, uniform heads for market and home use.", note_sw: "Vichwa imara vinavyolingana, kwa soko na matumizi ya nyumbani.", art: "cabbage" },
    { id: "kale", name: "Kale", local: "Sukuma wiki", price: 2, note: "Kenya's everyday green, ready for continuous picking.", note_sw: "Mboga ya kila siku nchini Kenya, tayari kuvunwa mara kwa mara.", art: "kale" },
    { id: "capsicum", name: "Capsicum", local: "Hoho", price: 4, note: "Sweet pepper seedlings for open field or greenhouse.", note_sw: "Miche ya pilipili hoho kwa shamba la wazi au greenhouse.", art: "capsicum" }
  ],

  // Free stock photos from Pexels (free for commercial use). Replace with real farm photos later,
  // e.g. "assets/img/greenhouse.jpg"
  photos: {
    hero: "https://images.pexels.com/photos/6508409/pexels-photo-6508409.jpeg?auto=compress&cs=tinysrgb&w=1920",
    gallery: [
      { src: "https://images.pexels.com/photos/16678080/pexels-photo-16678080/free-photo-of-plants-in-greenhouse.jpeg?auto=compress&cs=tinysrgb&w=1200", cap: "Greenhouse growing", cap_sw: "Ukuzaji ndani ya greenhouse" },
      { src: "https://images.pexels.com/photos/4390619/pexels-photo-4390619.jpeg?auto=compress&cs=tinysrgb&w=1200", cap: "Young seedlings", cap_sw: "Miche michanga" },
      { src: "https://images.pexels.com/photos/4118322/pexels-photo-4118322.jpeg?auto=compress&cs=tinysrgb&w=1200", cap: "Healthy early growth", cap_sw: "Ukuaji wa mapema wenye afya" },
      { src: "https://images.pexels.com/photos/7728382/pexels-photo-7728382.jpeg?auto=compress&cs=tinysrgb&w=1200", cap: "Preparing seedling trays", cap_sw: "Kuandaa trei za miche" }
    ]
  },

  // M-Pesa payment details
  payment: {
    paybill: "247247",
    account: "0723400665",
    note: "Pay after we confirm your order and collection date on WhatsApp.",
    note_sw: "Lipa baada ya sisi kuthibitisha oda yako na tarehe ya kuchukua kupitia WhatsApp."
  },

  // Partnership offers (business partnerships, not grants)
  partner: {
    title: "Work with us: seedlings, training and demonstration",
    title_sw: "Fanya kazi nasi: miche, mafunzo na maonyesho",
    intro: "We partner with organisations that support farmers. Buy quality seedlings for the groups you work with, train farmers at our greenhouse, or showcase your farm products to the farmers who visit us.",
    intro_sw: "Tunashirikiana na mashirika yanayosaidia wakulima. Nunueni miche bora kwa vikundi mnavyofanya kazi navyo, fundisheni wakulima kwenye greenhouse yetu, au onyesheni bidhaa zenu za kilimo kwa wakulima wanaotutembelea.",
    offers: [
      { icon: "🤝", t: "Seedlings for CBOs & farmer groups", d: "NGOs, programmes and county projects can buy seedlings in bulk for the CBOs, women's and youth groups they support, with delivery planned around the planting season.", tag: "Bulk supply",
        t_sw: "Miche kwa CBO na vikundi vya wakulima", d_sw: "Mashirika, miradi na programu za kaunti zinaweza kununua miche kwa wingi kwa ajili ya CBO, vikundi vya wanawake na vijana wanaowasaidia, na usambazaji kupangwa kulingana na msimu wa kupanda.", tag_sw: "Oda kubwa" },
      { icon: "🎓", t: "Training & demonstration ground", d: "Use our greenhouse as a practical learning site for farmer field days, youth and school visits, and hands-on training in nursery and greenhouse practice.", tag: "Field days",
        t_sw: "Mahali pa mafunzo na maonyesho", d_sw: "Tumieni greenhouse yetu kama mahali pa kujifunzia kwa vitendo: siku za maonyesho kwa wakulima, ziara za vijana na shule, na mafunzo ya vitendo kuhusu kitalu na greenhouse.", tag_sw: "Siku za maonyesho" },
      { icon: "📣", t: "Product demonstration & promotion", d: "Agro-input companies can demonstrate seeds, fertilisers, irrigation kits, trays and other farm products on site and introduce them to the farmers who buy from us.", tag: "Demo plots",
        t_sw: "Maonyesho na utangazaji wa bidhaa", d_sw: "Kampuni za pembejeo zinaweza kuonyesha mbegu, mbolea, vifaa vya umwagiliaji, trei na bidhaa nyingine shambani, na kuzitambulisha kwa wakulima wanaonunua kwetu.", tag_sw: "Mashamba ya maonyesho" }
    ],
    benefits: ["Healthy, uniform seedlings at transparent prices", "A real working greenhouse for practical learning", "Direct reach to smallholder farmers in Kericho", "Clear records of seedlings supplied for your reporting"],
    benefits_sw: ["Miche yenye afya na inayolingana kwa bei wazi", "Greenhouse halisi inayofanya kazi kwa mafunzo ya vitendo", "Kuwafikia moja kwa moja wakulima wadogo wa Kericho", "Rekodi wazi za miche iliyosambazwa kwa ajili ya ripoti zenu"]
  }
};
