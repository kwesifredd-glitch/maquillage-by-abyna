/**
 * Maquillage by Abyna — Brand Content & Configuration Data
 * 
 * Central hub for all site copy, rates, portfolio items, and business details.
 * To update pricing, add new photos, or adjust FAQs, simply edit this file!
 */

const SITE_CONFIG = {
  brand: {
    name: "Maquillage by Abyna",
    tagline: "Luxury Bridal & Editorial Makeup Artistry",
    shortBio: "Specializing in timeless, radiant bridal beauty and bespoke morning-of bridal pampering across Accra and worldwide.",
    artist: "Abyna",
    location: "Accra, Ghana",
    serviceArea: "Accra, Kumasi, Takoradi & Destination Weddings Worldwide",
    email: "maquillagebyabyna@gmail.com",
    phone: "+233 24 000 0000",
    phoneDisplay: "+233 (0) 24 000 0000",
    whatsappNumber: "233240000000", // International format without '+' or spaces
    instagramHandle: "@maquillage_by_abyna",
    instagramUrl: "https://instagram.com/maquillage_by_abyna",
    tiktokHandle: "@maquillagebyabyna",
    tiktokUrl: "https://tiktok.com/@maquillagebyabyna",
    formspreeEndpoint: "https://formspree.io/f/xbjnqweo", // Replace with client's Formspree endpoint or keep for testing
    workingHours: "Tuesday – Sunday: 7:00 AM – 6:00 PM (Bridal call-times as scheduled)",
  },

  hero: {
    headline: "Welcome — Let's Make Your Bridal Look Unforgettable",
    subline: "Bespoke, skin-first bridal makeup designed to withstand tropical humidity and glow effortlessly from morning prep to the final dance.",
    primaryCta: "Inquire for Your Date",
    secondaryCta: "Explore Portfolio",
    heroImage: "assets/images/portfolio/white-wedding/white-02.jpg",
  },

  brandIntro: {
    heading: "The Abyna Bridal Experience",
    subtitle: "TIMELESS BEAUTY · CAMERA-READY RADIANCE · CALM MORNINGS",
    paragraphs: [
      "At Maquillage by Abyna, bridal makeup is an intimate, luxurious ritual rather than a hurried routine. Every look is custom-formulated to honour the natural depth, warmth, and undertones of your skin. Using high-definition, climate-resilient techniques perfected for Ghana's tropical warmth, our signature finish delivers a weightless, radiant glow that looks breathtaking in person and photographs flawlessly in both 4K video and flash photography.",
      "Beyond the artistry, we pride ourselves on curating a tranquil, serene atmosphere on your wedding morning. From synchronizing with your hairstylist and photographer to ensuring you have a relaxing, champagne-in-hand glam session, we ensure you step into your gown feeling completely calm, confident, and unapologetically beautiful."
    ],
    quote: "“True bridal luxury isn’t about changing how you look — it is unveiling your most confident, luminous self on the most cherished day of your life.”",
    quoteAuthor: "Abyna — Lead Artist & Founder"
  },

  rates: [
    {
      id: "white-wedding",
      title: "The Signature White Wedding Bride",
      subtitle: "For the timeless church ceremony, reception, and radiant aisle moment.",
      priceGHS: "GHS 4,500",
      priceUSD: "Approx. $300 USD",
      featured: true,
      badge: "Most Popular",
      features: [
        "Complete bespoke bridal glam tailored to your skin & facial symmetry",
        "Luxury pre-makeup skin preparation (hydration & depuffing eye masks)",
        "Humidity-resistant, 16-hour camera-ready formulation",
        "Custom premium faux mink lash styling",
        "Collarbone & décolletage body radiance glow",
        "Complimentary bridal morning-of touch-up kit (lipstick, blot papers, sponge)",
        "On-site dressing assistance & veil placement support",
        "Touch-up until bridal departure for ceremony"
      ],
      ctaText: "Inquire for This Package"
    },
    {
      id: "royal-ghanaian",
      title: "The Royal Ghanaian Bride",
      subtitle: "Comprehensive 2-event luxury package for Traditional Kente + White Wedding.",
      priceGHS: "GHS 8,000",
      priceUSD: "Approx. $550 USD",
      featured: true,
      badge: "Full Bridal Experience",
      features: [
        "Full bridal makeup for Traditional Engagement (Kente/Islamic ceremony)",
        "Full bridal makeup for White Wedding Church Ceremony & Reception",
        "Complimentary bridal trial & consultation session (2 hours)",
        "2x Luxury pre-event collagen skin prep & lip smoothing rituals",
        "Bespoke color palette harmonized to both your Kente cloth and gown",
        "Henna & gold accessory coordination (Northern/Islamic brides)",
        "2x Luxury bridal touch-up essentials kits",
        "Dedicated lead artist priority on both dates"
      ],
      ctaText: "Inquire for This Package"
    },
    {
      id: "intimate-civil",
      title: "The Civil & Intimate Bride",
      subtitle: "Effortless elegance for court weddings, signing ceremonies, or elopements.",
      priceGHS: "GHS 3,500",
      priceUSD: "Approx. $240 USD",
      featured: false,
      badge: null,
      features: [
        "Signature soft-glam bridal makeup",
        "Express skin hydration & priming ritual",
        "Light-to-medium long-wearing skin-like finish",
        "Natural-volume lash application",
        "Bridal mini touch-up kit",
        "Location service within central Accra"
      ],
      ctaText: "Inquire for This Package"
    },
    {
      id: "bridal-party",
      title: "Bridal Party & Entourage",
      subtitle: "Per person rate for bridesmaids, maid of honor, and mothers of the couple.",
      priceGHS: "GHS 1,200",
      priceUSD: "Per person",
      featured: false,
      badge: "Group Booking",
      features: [
        "Sophisticated glam complementing the bridal party theme",
        "Long-wear skin perfecting base & soft contour",
        "Quality lash application included",
        "Cohesive team look under lead artist direction",
        "Discounts available for parties of 5 or more"
      ],
      ctaText: "Add to Bridal Package"
    },
    {
      id: "bridal-trial",
      title: "Bridal Preview & Trial Session",
      subtitle: "Dedicated in-studio rehearsal to perfect your bridal look prior to the big day.",
      priceGHS: "GHS 1,800",
      priceUSD: "In-Studio Session",
      featured: false,
      badge: "Recommended",
      features: [
        "2.5 hours of dedicated one-on-one consultation & application",
        "Comprehensive skin type & allergy assessment",
        "Lip shade matching to floral arrangements & bridal bouquet",
        "Veil, hair accessory, and jewelry compatibility check",
        "High-definition test photography under varied lighting",
        "Detailed face chart documentation for wedding morning"
      ],
      ctaText: "Book Trial Session"
    }
  ],

  addOns: [
    {
      title: "Reception Glam Look Change",
      price: "GHS 1,500",
      description: "On-site artist stay to transition your look from romantic ceremony soft glam to dramatic, sultry reception glam with bold lips and heightened radiance."
    },
    {
      title: "Extended Touch-Up Hours",
      price: "GHS 500 / hr",
      description: "Artist standby coverage during couple photoshoots, church services, and pre-reception cocktail hour to guarantee shine-free, pristine perfection."
    },
    {
      title: "Luxury Skin Prep Upgrade",
      price: "GHS 400",
      description: "Cryo-globe lymphatic facial massage, 24k gold hydrogel sheet mask, and intensive hyaluronic lip plumping therapy before makeup application."
    },
    {
      title: "Nationwide & Destination Travel",
      price: "Custom Quote",
      description: "Available for Kumasi, Takoradi, Sunyani, Aburi, Tamale, and destinations across West Africa and internationally. Includes travel, flight/fuel, and accommodation."
    }
  ],

  portfolio: [
    // Traditional Wedding
    {
      id: "trad-01",
      title: "Regal Islamic Bridal Grace",
      category: "traditional",
      categoryLabel: "Traditional Wedding",
      image: "assets/images/portfolio/traditional/trad-01.jpg",
      thumbnail: "assets/images/portfolio/traditional/trad-01.jpg",
      description: "Warm golden tones, sculpted bone structure, and exquisite henna detailing harmonized with gold jewelry and saffron veil.",
      tag: "Northern & Islamic Bridal"
    },
    {
      id: "trad-02",
      title: "Golden Saffron Elegance",
      category: "traditional",
      categoryLabel: "Traditional Wedding",
      image: "assets/images/portfolio/traditional/trad-02.jpg",
      thumbnail: "assets/images/portfolio/traditional/trad-02.jpg",
      description: "Luminous velvet complexion paired with delicate smokey eyes and high-shine neutral lip.",
      tag: "Islamic Ceremony"
    },
    {
      id: "trad-03",
      title: "Royal Henna & Gold Portrait",
      category: "traditional",
      categoryLabel: "Traditional Wedding",
      image: "assets/images/portfolio/traditional/trad-03.jpg",
      thumbnail: "assets/images/portfolio/traditional/trad-03.jpg",
      description: "Intricate bridal henna, warm bronze eyes, and immaculate skin work for the traditional wedding celebration.",
      tag: "Bridal Henna Look"
    },
    {
      id: "trad-04",
      title: "Pure Tradition & Grace",
      category: "traditional",
      categoryLabel: "Traditional Wedding",
      image: "assets/images/portfolio/traditional/trad-04.jpg",
      thumbnail: "assets/images/portfolio/traditional/trad-04.jpg",
      description: "Traditional ceremony bridal look highlighting natural facial warmth and seamless contouring.",
      tag: "Ceremony Look"
    },
    {
      id: "trad-05",
      title: "Royal Purple Beaded Radiance",
      category: "traditional",
      categoryLabel: "Traditional Wedding",
      image: "assets/images/portfolio/traditional/trad-05.jpg",
      thumbnail: "assets/images/portfolio/traditional/trad-05.jpg",
      description: "A beaming Ghanaian bride adorned in custom purple hand-beaded engagement lace, paired with vibrant orchid lids and glossy caramel lips.",
      tag: "Ghanaian Engagement"
    },
    {
      id: "trad-06",
      title: "Opulent Mother of the Bride / Reception Glam",
      category: "traditional",
      categoryLabel: "Traditional Wedding",
      image: "assets/images/portfolio/traditional/trad-06.jpg",
      thumbnail: "assets/images/portfolio/traditional/trad-06.jpg",
      description: "Gilded throne elegance featuring a rich plum lip, sculpted eyebrows, and refined evening bridal glam.",
      tag: "Reception Glam"
    },
    {
      id: "trad-07",
      title: "Intricate Kente Bridal Beauty",
      category: "traditional",
      categoryLabel: "Traditional Wedding",
      image: "assets/images/portfolio/traditional/trad-07.jpg",
      thumbnail: "assets/images/portfolio/traditional/trad-07.jpg",
      description: "Bespoke bridal styling tailored to vibrant hand-woven Ghanaian Kente tones.",
      tag: "Kente Glam"
    },
    {
      id: "trad-08",
      title: "Traditional Engagement Glow",
      category: "traditional",
      categoryLabel: "Traditional Wedding",
      image: "assets/images/portfolio/traditional/trad-08.jpg",
      thumbnail: "assets/images/portfolio/traditional/trad-08.jpg",
      description: "Flawless skin-first makeup designed for extended day-to-night traditional festivities.",
      tag: "Engagement"
    },
    {
      id: "trad-09",
      title: "Regal Akan Splendor",
      category: "traditional",
      categoryLabel: "Traditional Wedding",
      image: "assets/images/portfolio/traditional/trad-09.jpg",
      thumbnail: "assets/images/portfolio/traditional/trad-09.jpg",
      description: "Traditional celebration glam accented with gold accessories and precision eye artistry.",
      tag: "Akan Tradition"
    },

    // White Wedding
    {
      id: "white-01",
      title: "The Timeless Aisle Glow",
      category: "white-wedding",
      categoryLabel: "White Wedding",
      image: "assets/images/portfolio/white-wedding/white-01.jpg",
      thumbnail: "assets/images/portfolio/white-wedding/white-01.jpg",
      description: "Luminous dewy skin, champagne shimmer lids, fluttery lashes, and a sculpted ombré chocolate lip paired with pearl earrings.",
      tag: "Aisle Perfection"
    },
    {
      id: "white-02",
      title: "Lace & Radiance",
      category: "white-wedding",
      categoryLabel: "White Wedding",
      image: "assets/images/portfolio/white-wedding/white-02.jpg",
      thumbnail: "assets/images/portfolio/white-wedding/white-02.jpg",
      description: "Joyful bride in hand-beaded lace gown, showcasing glass skin, champagne shimmer, and a radiant smile.",
      tag: "Bridal Gown"
    },
    {
      id: "white-03",
      title: "Modern Minimalist Bride",
      category: "white-wedding",
      categoryLabel: "White Wedding",
      image: "assets/images/portfolio/white-wedding/white-03.jpg",
      thumbnail: "assets/images/portfolio/white-wedding/white-03.jpg",
      description: "Editorial bridal portrait emphasizing soft blush tones, clean liner, and healthy lit-from-within glow.",
      tag: "Veil Portrait"
    },
    {
      id: "white-04",
      title: "Pure Joy & Crystal Sparkle",
      category: "white-wedding",
      categoryLabel: "White Wedding",
      image: "assets/images/portfolio/white-wedding/white-04.jpg",
      thumbnail: "assets/images/portfolio/white-wedding/white-04.jpg",
      description: "Flawless matte-velvet complexion with fluttery wispy lashes and glossy nude lips.",
      tag: "Church Ceremony"
    },
    {
      id: "white-05",
      title: "Morning-Of Robe Serenity",
      category: "white-wedding",
      categoryLabel: "White Wedding",
      image: "assets/images/portfolio/white-wedding/white-05.jpg",
      thumbnail: "assets/images/portfolio/white-wedding/white-05.jpg",
      description: "Getting ready in luxury: bridal pampering session revealing a smooth, hydrated complexion and relaxed bride.",
      tag: "Morning Prep"
    },
    {
      id: "white-06",
      title: "Bridal Suite Glow",
      category: "white-wedding",
      categoryLabel: "White Wedding",
      image: "assets/images/portfolio/white-wedding/white-06.jpg",
      thumbnail: "assets/images/portfolio/white-wedding/white-06.jpg",
      description: "Radiant bride basking in morning window light immediately after glam completion.",
      tag: "Suite Glam"
    },
    {
      id: "white-07",
      title: "High-Definition Bridal Radiance",
      category: "white-wedding",
      categoryLabel: "White Wedding",
      image: "assets/images/portfolio/white-wedding/white-07.jpg",
      thumbnail: "assets/images/portfolio/white-wedding/white-07.jpg",
      description: "Close-up portrait demonstrating zero flashback, seamless neck-to-face color matching, and dimensional contour.",
      tag: "Close-up"
    },
    {
      id: "white-08",
      title: "Fresh Botanical Bride",
      category: "white-wedding",
      categoryLabel: "White Wedding",
      image: "assets/images/portfolio/white-wedding/white-08.jpg",
      thumbnail: "assets/images/portfolio/white-wedding/white-08.jpg",
      description: "Clean, ultra-natural skin texture, tightlined winged eyes, and luminous peach-rose gloss against white hydrangeas.",
      tag: "Natural Glam"
    },

    // Fashion & Editorial
    {
      id: "edit-01",
      title: "Warm Bronze & Gold Choker",
      category: "editorial",
      categoryLabel: "Fashion & Editorial",
      image: "assets/images/portfolio/editorial/edit-01.jpg",
      thumbnail: "assets/images/portfolio/editorial/edit-01.jpg",
      description: "High-fashion editorial beauty shoot with rich bronze shoulder highlights, deep berry gloss, and sultry smokey eyes.",
      tag: "Editorial Beauty"
    },
    {
      id: "edit-02",
      title: "Chocolate Velvet Couture",
      category: "editorial",
      categoryLabel: "Fashion & Editorial",
      image: "assets/images/portfolio/editorial/edit-02.jpg",
      thumbnail: "assets/images/portfolio/editorial/edit-02.jpg",
      description: "Sculpted cheekbones, high-shine lip lacquer, and seamless studio lighting.",
      tag: "Studio Campaign"
    },
    {
      id: "edit-03",
      title: "Gilded Sunset Glamour",
      category: "editorial",
      categoryLabel: "Fashion & Editorial",
      image: "assets/images/portfolio/editorial/edit-03.jpg",
      thumbnail: "assets/images/portfolio/editorial/edit-03.jpg",
      description: "Champagne gold inner corner pop with sleek winged eyeliner and dusty rose lips.",
      tag: "Evening Glam"
    },
    {
      id: "edit-04",
      title: "Polished Minimalist Beauty",
      category: "editorial",
      categoryLabel: "Fashion & Editorial",
      image: "assets/images/portfolio/editorial/edit-04.jpg",
      thumbnail: "assets/images/portfolio/editorial/edit-04.jpg",
      description: "Clean brow architecture, hydrated skin, and bold lash separation.",
      tag: "Clean Beauty"
    },
    {
      id: "edit-05",
      title: "Red Carpet Sophistication",
      category: "editorial",
      categoryLabel: "Fashion & Editorial",
      image: "assets/images/portfolio/editorial/edit-05.jpg",
      thumbnail: "assets/images/portfolio/editorial/edit-05.jpg",
      description: "Chic evening makeup created for gala and milestone celebrations.",
      tag: "Red Carpet"
    },
    {
      id: "edit-06",
      title: "Luminous Melanin Radiance",
      category: "editorial",
      categoryLabel: "Fashion & Editorial",
      image: "assets/images/portfolio/editorial/edit-06.jpg",
      thumbnail: "assets/images/portfolio/editorial/edit-06.jpg",
      description: "Demonstration of skin undertone mastering with zero gray cast or ashy foundation finish.",
      tag: "Undertone Mastery"
    }
  ],

  videos: [
    {
      id: "vid-01",
      title: "Jessica — Intentional Bridal Details",
      caption: "From reference pictures to tiny details — intentional, timeless bridal beauty.",
      videoSrc: "assets/videos/reel-01.mp4",
      poster: "assets/images/portfolio/white-wedding/white-05.jpg"
    },
    {
      id: "vid-02",
      title: "Before & After Bridal Magic",
      caption: "A stunning morning-of transformation bringing quiet luxury and confidence to life.",
      videoSrc: "assets/videos/reel-02.mp4",
      poster: "assets/images/portfolio/white-wedding/white-01.jpg"
    },
    {
      id: "vid-03",
      title: "Sanaa — Skin-Like Bridal Finish",
      caption: "Client brief: 'I want skinlike makeup for my big day.' Delivered: light, hydrating, radiant glow.",
      videoSrc: "assets/videos/reel-05.mp4",
      poster: "assets/images/portfolio/white-wedding/white-06.jpg"
    }
  ],

  testimonials: [
    {
      quote: "Abyna didn’t just do my wedding makeup — she brought an incredible aura of peace to our entire bridal suite. My makeup survived 34-degree Accra heat, our church ceremony, and a wild reception dance without moving an inch!",
      client: "Akua & Kojo",
      event: "Traditional & White Wedding",
      location: "Kempinski Hotel Gold Coast City, Accra",
      rating: 5
    },
    {
      quote: "I was terrified of looking unrecognizable or having cakey foundation under the photographer’s flashes. Abyna gave me the most luminous, skin-like finish I’ve ever experienced. My husband could not stop staring at me all day.",
      client: "Dr. Jessica Mensah",
      event: "White Wedding Ceremony",
      location: "Peduase Valley Resort, Aburi",
      rating: 5
    },
    {
      quote: "The best decision of my wedding planning. Abyna was 15 minutes early, kept everyone to schedule, and made my traditional Northern Ghanaian henna and gold look like royalty. Book her the moment you get engaged!",
      client: "Fatima Al-Hassan",
      event: "Islamic Bridal Ceremony",
      location: "East Legon, Accra",
      rating: 5
    },
    {
      quote: "As someone who rarely wears makeup, Abyna listened so attentively during our bridal preview. She enhanced my eyes, perfected my skin tone without altering my complexion, and gave me so much confidence.",
      client: "Nana Yaa Osei",
      event: "Intimate Wedding & Reception",
      location: "Cantonments, Accra",
      rating: 5
    }
  ],

  faqs: [
    {
      category: "Booking & Retainers",
      question: "How do I officially secure my wedding date with Maquillage by Abyna?",
      answer: "To ensure exclusivity and peak dedication, we only take a limited number of brides per weekend. A non-refundable 50% booking retainer along with a signed bridal contract is required to officially lock in your date. The remaining balance is due 7 days prior to your wedding day."
    },
    {
      category: "Booking & Retainers",
      question: "How far in advance should I book my bridal makeup?",
      answer: "We recommend booking between 3 to 9 months in advance, especially for popular Ghanaian wedding months (April, August, November, and December). Inquiries are accepted on a first-come, first-served basis upon receipt of retainer."
    },
    {
      category: "Travel & Location",
      question: "Do you travel to venues or hotel suites on the wedding morning?",
      answer: "Yes! All bridal services are on-location. We travel directly to your hotel suite, private residence, or bridal preparation venue across Accra, Tema, and surrounding areas. For events within central Accra (Airport Residential, Cantonments, East Legon, Labone), travel fees are included or minimal."
    },
    {
      category: "Travel & Location",
      question: "Do you travel outside Accra or internationally for destination weddings?",
      answer: "Absolutely. Abyna regularly travels nationwide (Kumasi, Takoradi, Sunyani, Aburi) as well as across West Africa, the UK, and destination spots worldwide. Travel, flight tickets (where applicable), and secure lodging are factored into custom destination quotes."
    },
    {
      category: "Trials & Morning Prep",
      question: "When should I schedule my bridal preview (trial session)?",
      answer: "We recommend scheduling your bridal preview 4 to 8 weeks before the wedding date. If you have your bridal gown fittings or traditional attire ready, scheduling on the same day allows you to see the complete ensemble come together."
    },
    {
      category: "Trials & Morning Prep",
      question: "How much time is allocated for bridal glam on the wedding morning?",
      answer: "We allocate 1.5 to 2 hours for the bride. This includes thorough skincare preparation, bespoke application, body glow, and final veil/accessory placement. For bridal party members, we budget approximately 45 minutes per person."
    },
    {
      category: "Trials & Morning Prep",
      question: "What skincare preparation should I do before the wedding day?",
      answer: "Drink plenty of water in the weeks leading up to your date, keep skin well-moisturized, and avoid starting aggressive new chemical peels or harsh facials within 2 weeks of the wedding. On the morning of, simply cleanse, moisturize with your daily gentle cream, and avoid heavy sunscreens that cause camera flashback."
    },
    {
      category: "Policies & Terms",
      question: "What is your cancellation and rescheduling policy?",
      answer: "If you need to reschedule your wedding date due to unforeseen circumstances, your retainer may be transferred to a new date subject to Abyna’s availability. Cancellations forfeit the initial retainer as that date was held exclusively for you."
    }
  ],

  courses: [
    {
      title: "Bridal Artistry Masterclass (Professional)",
      type: "Intensive 3-Day Course · Accra",
      audience: "For aspiring and working makeup artists wanting to master luxury bridal techniques.",
      description: "A comprehensive, high-intensity masterclass covering humidity-proof skin prep, undertone mastery for deep skin, speed & timing management, bridal contract drafting, lighting and camera-ready photography.",
      features: [
        "Live model practical demonstrations",
        "Color theory and shade-matching deep melanin complexions",
        "Kente, veil, and bridal hair synchronization",
        "Social media portfolio lighting & 4K camera reels",
        "Comprehensive student manual & Certificate of Completion",
        "Post-course 1-month WhatsApp mentorship"
      ],
      price: "GHS 3,500",
      cta: "Enroll in Next Cohort"
    },
    {
      title: "Master Your Own Face (Personal 1-on-1)",
      type: "Private 1-Day Workshop · Studio",
      audience: "For everyday women, brides-to-be, and professionals who desire effortless personal beauty.",
      description: "Learn how to expertly highlight your own features, choose the right foundation shade, achieve clean eyebrows, and create a 15-minute everyday polished look that easily transitions into evening glam.",
      features: [
        "Personal makeup bag audit & product decluttering",
        "Hands-on 'half-face' technique: Abyna does one side, you master the other",
        "Custom product recommendation shopping list within your budget",
        "Eyebrow sculpting and effortless eyeliner masterclass",
        "Day-to-night transformation tricks"
      ],
      price: "GHS 1,500",
      cta: "Book Private Workshop"
    }
  ]
};

// Export to window for global access across scripts
if (typeof window !== "undefined") {
  window.SITE_CONFIG = SITE_CONFIG;
}
