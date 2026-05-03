/**
 * ╔══════════════════════════════════════════════════════╗
 *   VIVAH PARICHAY — biodata.config.js
 *   Only edit THIS file. index.html reads it automatically.
 *
 *   FOLDER STRUCTURE:
 *   your-repo/
 *   ├── index.html
 *   ├── biodata.config.js
 *   └── static/
 *       ├── photos/
 *       │   ├── main.jpg          ← your main photo (front flip)
 *       │   └── second.jpg        ← second photo (back flip)
 *       ├── family/
 *       │   ├── father.jpg
 *       │   ├── mother.jpg
 *       │   ├── brother.jpg
 *       │   ├── sister.jpg
 *       │   ├── dadaji.jpg
 *       │   ├── nanaji.jpg
 *       │   ├── uncle1.jpg
 *       │   ├── uncle2.jpg
 *       │   └── uncle3.jpg
 *       └── icons/
 *           ├── personal.jpg      ← icon for Personal section header
 *           ├── work.jpg          ← icon for Work section header
 *           ├── education.jpg
 *           ├── family.jpg
 *           ├── about.jpg
 *           └── contact.jpg
 *
 *   TIP: If you don't have a photo for someone, just set it to ""
 *        and a placeholder will show instead.
 * ╚══════════════════════════════════════════════════════╝
 */

const BIODATA = {

  // ── MAIN PHOTOS ──────────────────────────────────────
  // Put photos in static/photos/ folder
  photo1: "static/photos/main.jpg",     // front face of flip card
  photo2: "static/photos/second.jpg",   // back face of flip card

  // ── SECTION ICONS (shown in accordion headers) ────────
  // Put icons in static/icons/ folder — square images work best
  icons: {
    personal:  "static/icons/personal.jpg",
    work:      "static/icons/work.jpg",
    education: "static/icons/education.jpg",
    family:    "static/icons/family.jpg",
    about:     "static/icons/about.jpg",
    contact:   "static/icons/contact.jpg",
  },

  // ── HERO ─────────────────────────────────────────────
  name:       "Abhishek Bachchan Rai",
  instagram:  "https://www.instagram.com/abhi_rai_1997?igsh=MTJjeG04eXNuaWkxMQ%3D%3D&utm_source=qr",    // leave "" to hide
  linkedin:   "https://www.linkedin.com/in/abhishek-bachchan-ism ",  // leave "" to hide

  // ── QUICK STATS (right column of hero card) ───────────
  dob:        "10 Jun 1997",
  rashi:      "Tula",
  height:     "6 ft",
  bloodGroup: "O+",
  manglik:    "Non-Manglik",
  city:       "Bengaluru, Karnataka",

  // ── PERSONAL INFORMATION ──────────────────────────────
  timeOfBirth:   "10:15 AM",
  placeOfBirth:  "Darbhanga, Bihar",
  religion:      "Hindu",
  caste:         "Bhumihar",
  gotra:         "Bharadwaj",
  diet:          "Non-vegeterian",
  complexion:    "Fair",
  maritalStatus: "Single",
  languages:     "Hindi, English",
  nativePlace:   "Kaimur, Bhabua, Bihar",

  // ── WORK EXPERIENCE ──────────────────────────────────
  jobs: [
  {
    title:   "Lead Software Engineer",
    company: "ITILITE Technologies Private Limited · Bengaluru",
    from:    "2023",
    to:      "Present",
    desc:    "Leading backend development for flight services, building scalable systems for fast search, booking, and payments in the corporate travel domain for US and India markets.",
  },
  {
    title:   "Software Engineer",
    company: "Amazon India · Hyderabad",
    from:    "2022",
    to:      "2023",
    desc:    "Worked in the Payments team, contributing to systems handling invoice payments and financial transactions for third-party partners.",
  },
  {
    title:   "Software Engineer",
    company: "Jaguar Land Rover India · Bangalore",
    from:    "2020",
    to:      "2022",
    desc:    "Worked across multiple teams on infotainment systems, contributing to development and integration of automotive software solutions.",
  },
],

  // ── EDUCATION ─────────────────────────────────────────
  education: [
    { year: "2020", degree: "B.Tech, Computer Science",  institution: "IIT Dhanbad",               percent: "8.51 CGPA" },
    { year: "2016", degree: "Higher Secondary (12th)",   institution: "Shivam International School",   percent: "92.4%" },
    { year: "2014", degree: "Secondary (10th)",           institution: "DAV BSEB Patna",   percent: "10 CGPA" },
  ],

  // ── FAMILY — PARENTS & SIBLINGS ──────────────────────
  // photo: path inside static/family/ — leave "" if no photo
  family: {
    father: {
      name:  "Late Shri Akhileshwar Kumar",
      occ:   "Farmer",
      city:  "Kaimur, Bhabua, Bihar",
      photo: "",
    },
    mother: {
      name:  "Mira Kumari",
      occ:   "Homemaker",
      city:  "Patna",
      photo: "",
    },
    brother: {
      name:  "",
      occ:   "",
      city:  "",
      photo: "",
    },
    sister: {
      name:  "Riya Rai",   // leave name "" to hide this card entirely
      occ:   "Software Engineer",
      city:  "Bengalure, Karnataka",
      photo: "",
    },
  },

  // ── FAMILY — GRANDPARENTS ────────────────────────────
  grandparents: {
    dadaji: {
      name:  "Late Shri Bachchan Rai",
      occ:   "Retd. Officer in Fishery Department",
      photo: "",
    },
    nanaji: {
      name:  "",
      occ:   "",
      photo: "",
    },
  },

  // ── FAMILY — UNCLES ──────────────────────────────────
  uncles: [
    { name: "Ram Ekbal Rai",  occ: "LIC · Darbhanga",    photo: "" },
    { name: "Ram Nagina Rai",   occ: "Farmer · Kaimur",     photo: "" },
    { name: "Late Ashok Rai",  occ: "Farmer · Kaimur",photo: "" },
  ],

  // ── COUSINS (free text paragraph) ────────────────────
  cousins: "We are a joint family, 2 cousin sister (Married), 1 cousin brother (Married in Bengaluru, Software), 1 cousin brother(Chennai, LNT), 1 Cousin Brother (Pursuing PHD from IIT), 1 cousin sister(In Deutsche Bank), 1 cousin sister and 1 cousin brother (studying in Varanasi)  ",

  // ── FAMILY BACKGROUND ────────────────────────────────
  familyBackground: "Well-respected Bhumihar family originally from Kaimur, Bhabua,  Bihar. Joint family with strong values of education, discipline and culture. All of us are self employed and earning well.",

  // ── ABOUT ME ─────────────────────────────────────────
  aboutText: "I am a calm, family-oriented person who values both tradition and modern thinking. I enjoy travelling, driving, exploring new places, and playing cricket on weekends. Travelling across the world is one of my dreams, and I love experiencing different cultures and cuisines. Looking for a life partner who is kind, grounded, and shares a love for family and adventures.",
  // ── HOBBIES — set true to highlight, false to leave unselected
  hobbies: {
    "Travel":      true,
    "Cricket":     true,
    "Reading":     false,
    "Music":       true,
    "Cooking":     true,
    "Photography": true,
    "Yoga":        false,
    "Movies":      true,
    "Fitness":     true,
    "Gardening":   true,
    "Painting":    false,
  },

  // ── CONTACT ──────────────────────────────────────────
  phone:         "+91 9939392469",
  email:         "abhbachchan10@gmail.com",
  contactPerson: "Abhishek (myself)",
  address:       "Mahadevapura, Bengaluru, Karnataka — 560048",

};
