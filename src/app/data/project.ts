import { ProjectData } from "./types/project";

export const projects: ProjectData[] = [
  // =======================
  // 1. SOCIAL GROUP RECOMMENDATION (UNI)
  // =======================
  {
    type: "uni",
    title: "Sistem Rekomendasi Social Group Meeting Point",
    subtitle:
      "A Smart Recommendation App for Finding Perfect Hangout Spots — Individually or in Groups ☕",
    description:
      "This project was developed as my final assignment. It recommends hangout places using a knowledge-based approach. Preference knowledge is collected through Google Maps scraping, processed using sentiment analysis, and later matched with user preferences. The system also supports group recommendations by combining multiple user preferences using the Borda Count method. The frontend is built with Flutter, while the backend uses Flask and Firebase for authentication and data storage.",
    tags: [
      "Python",
      "Flutter",
      "Firebase",
      "Flask",
      "Google Calendar API",
      "NLP",
      "Borda Count",
      "Knowledge-Based System"
    ],
    github: "https://github.com/maulina-sabrina/social-group-recommendation",
    live: "https://appetize.io/app/b_ufppmoexgaj3zysocbfy47rhpm",
    thumbnail: "/assets/images/sospo.jpeg",

    details: {
      role: "Fullstack Developer",
      thumbnail: "/assets/images/sospo.jpeg",
      github: "https://github.com/maulina-sabrina/social-group-recommendation",
      live: "https://appetize.io/app/b_ufppmoexgaj3zysocbfy47rhpm",

      key_features: [
        "Individual Recommendation System",
        "Group Preference Aggregation (Borda Count)",
        "Aspect-Based Sentiment Analysis",
        "Google Calendar Scheduling",
        "User Profile Management",
        "Firebase Auth & Firestore Sync"
      ],

      challenges: [
        "Highly noisy and inconsistent Google Maps review data",
        "Fairly merging preferences from multiple users",
        "Fluctuating sentiment scores using lexicon-based methods",
        "Slow API responses caused by sentiment processing and scraping"
      ],

      solutions: [
        "Building a cleaning pipeline for review normalization",
        "Implementing Borda Count for voting-based ranking",
        "Adding rule-based corrections to sentiment scoring",
        "API optimization by fetching only the required data fields to reduce payload and improve performance."
      ],

      tech_stack: {
        backend: [
          "Python",
          "Flask API",
          "Knowledge-Based Recommendation",
          "Sentiment Analysis",
          "Borda Count Algorithm",
          "Google Calendar API",
          "Firebase Authentication",
          "Firestore Database"
        ],
        frontend: [
          "Flutter",
          "Dart",
        ],
        tools: ["SerpAPI", "Figma", "Google Colab", "VS Code"]
      }
    }
  },

  // =======================
  // 2. PERSONAL PORTFOLIO & JOURNAL WEBSITE (PORTFOLIO)
  // =======================
  {
    type: "portfolio",
    title: "Personal Portfolio dan Journal Website",
    subtitle: "A Minimalist Web Platform for Writing Journals and Showcasing Projects ✨",
    description:
      "Website personal modern berbasis Laravel yang menyediakan jurnal publik, portofolio, dan dashboard admin. Menerapkan gaya minimalis dengan Tailwind CSS.",
    tags: [
      "PHP",
      "Laravel",
      "Tailwind CSS",
      "Vite",
      "Alpine.js",
      "Laravel Breeze",
      "Portfolio",
      "Blog System"
    ],
    github: "https://github.com/maulinasabrina/maulina-life-repo",
    live: "https://maulina-life-repo-production-3143.up.railway.app/",
    thumbnail: "/assets/images/personal.jpeg",

    details: {
      role: "Fullstack Developer",
      thumbnail: "/assets/images/personal.jpeg",
      github: "https://github.com/maulinasabrina/maulina-life-repo",
      live: "https://maulina-life-repo-production-3143.up.railway.app/",

      key_features: [
        "Admin Authentication (Laravel Breeze)",
        "CRUD Journal with Slug Generation",
        "Public Journal Display",
        "Project Management Dashboard",
        "Responsive Minimalist UI",
        "Server-Rendered Blade Templates"
      ],

      challenges: [
        "Perlu sistem autentikasi admin yang aman",
        "Struktur konten yang harus mudah dikelola dari dashboard",
        "Harus tetap ringan meski menggunakan Laravel",
        "Desain UI minimalis tapi tetap informatif"
      ],

      solutions: [
        "Menggunakan Laravel Breeze sebagai pondasi autentikasi",
        "Membangun CMS mini untuk jurnal + portofolio",
        "Optimasi database & cache untuk performa lebih cepat",
        "Menggunakan Tailwind untuk menciptakan UI clean"
      ],

      tech_stack: {
        backend: ["PHP 8.2", "Laravel 12", "Eloquent ORM", "Laravel Breeze"],
        frontend: ["Tailwind CSS", "Vite", "Alpine.js", "Blade Templates"],
        tools: ["Composer", "NPM", "VS Code", "Pest"]
      }
    }
  },

  // =======================
  // 3. CAFE FINDER (LEARNING)
  // =======================
  {
    type: "learning",
    title: "Cafe Finder - Web App to Discover Nearby Coffee Shops",
    subtitle: "Peta Interaktif untuk Menemukan Kafe Terdekat ☕📍",
    description:
      "Aplikasi web berbasis peta yang menampilkan coffee shops terdekat menggunakan Leaflet.js. Backend proxy dengan Express mengambil data real-time dari SerpAPI.",
    tags: [
      "JavaScript",
      "Node.js",
      "Express",
      "Leaflet",
      "OpenStreetMap",
      "SerpAPI",
      "Frontend",
      "Backend",
      "Geolocation"
    ],
    github: "https://github.com/maulinasabrina/cafe_finder",
    live: "https://cafefinder-production-c8d8.up.railway.app/",
    thumbnail: "/assets/images/cafe.jpeg",

    details: {
      role: "Fullstack Developer",
      thumbnail: "/assets/images/cafe.jpeg",
      github: "https://github.com/maulinasabrina/cafe_finder",
      live: "https://cafefinder-production-c8d8.up.railway.app/",

      key_features: [
        "Real-Time Geolocation Detection",
        "Interactive Map with Leaflet",
        "Search Coffee Shops by Keyword",
        "Radius Filter",
        "Auto Fit Bounds Map View",
        "Custom Cafe Markers & Popups"
      ],

      challenges: [
        "Mengolah data dari SerpAPI agar rapi dan usable",
        "Membangun map UI yang interaktif tapi tetap ringan",
        "Menangani error geolocation user",
        "Membuat backend proxy agar API key tidak terekspos"
      ],

      solutions: [
        "Membuat normalizer hasil SerpAPI menggunakan Node.js",
        "Optimasi Leaflet agar tidak lag saat multi-marker",
        "Fallback location handler untuk perangkat tertentu",
        "Membangun Express proxy server untuk keamanan API"
      ],

      tech_stack: {
        backend: ["Node.js", "Express.js", "SerpAPI Proxy"],
        frontend: ["HTML5", "CSS3", "Vanilla JS", "Leaflet.js"],
        tools: ["NPM", "VS Code", "OpenStreetMap"]
      }
    }
  }
];
