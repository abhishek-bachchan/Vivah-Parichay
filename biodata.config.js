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
    { year: "2013", degree: "Secondary (10th)",           institution: "DAV BSEB Patna",   percent: "10 CGPA" },
  ],

  // ── FAMILY — PARENTS & SIBLINGS ──────────────────────
  // photo: path inside static/family/ — leave "" if no photo
  family: {
    father: {
      name:  "Ramesh Sharma",
      occ:   "Retd. IAS Officer",
      city:  "Jaipur",
      photo: "static/family/father.jpg",
    },
    mother: {
      name:  "Sunita Sharma",
      occ:   "Homemaker",
      city:  "Jaipur",
      photo: "static/family/mother.jpg",
    },
    brother: {
      name:  "Rohit Sharma",
      occ:   "CA · Married",
      city:  "Jaipur",
      photo: "static/family/brother.jpg",
    },
    sister: {
      name:  "",   // leave name "" to hide this card entirely
      occ:   "",
      city:  "",
      photo: "",
    },
  },

  // ── FAMILY — GRANDPARENTS ────────────────────────────
  grandparents: {
    dadaji: {
      name:  "Late Shri Mohan Lal Sharma",
      occ:   "Retd. Teacher",
      photo: "static/family/dadaji.jpg",
    },
    nanaji: {
      name:  "Shri Suresh Gupta",
      occ:   "Businessman · Jaipur",
      photo: "static/family/nanaji.jpg",
    },
  },

  // ── FAMILY — UNCLES ──────────────────────────────────
  uncles: [
    { name: "Sunil Sharma",  occ: "Engineer · Delhi",    photo: "static/family/uncle1.jpg" },
    { name: "Anil Sharma",   occ: "Doctor · Mumbai",     photo: "static/family/uncle2.jpg" },
    { name: "Vikas Sharma",  occ: "Businessman · Jaipur",photo: "static/family/uncle3.jpg" },
  ],

  // ── COUSINS (free text paragraph) ────────────────────
  cousins: "4 cousins — 2 settled in Delhi in software and finance, 1 in Mumbai as a doctor, 1 in the USA pursuing higher studies. All well-settled and close-knit family.",

  // ── FAMILY BACKGROUND ────────────────────────────────
  familyBackground: "Well-respected Brahmin family originally from Jaipur, Rajasthan. Joint family with strong values of education, discipline and culture. Father served in IAS for 30 years.",

  // ── ABOUT ME ─────────────────────────────────────────
  aboutText: "I am a calm, family-oriented person who values both tradition and modern thinking. I enjoy travelling, reading, and playing cricket on weekends. Looking for a life partner who is kind, grounded, and shares a love for family.",

  // ── HOBBIES — set true to highlight, false to leave unselected
  hobbies: {
    "Travel":      true,
    "Cricket":     true,
    "Reading":     true,
    "Music":       false,
    "Cooking":     false,
    "Photography": true,
    "Yoga":        false,
    "Movies":      true,
    "Fitness":     true,
    "Gardening":   false,
    "Painting":    false,
  },

  // ── CONTACT ──────────────────────────────────────────
  phone:         "+91 98765 43210",
  email:         "rahul.sharma@gmail.com",
  contactPerson: "Ramesh Sharma (Father) · +91 94100 XXXXX",
  address:       "12, Shanti Nagar, Jaipur, Rajasthan — 302001",

};
