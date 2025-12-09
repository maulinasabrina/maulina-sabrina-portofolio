import { ProjectData } from "./definitions";


export const projects: ProjectData[] = [
  {
    title: "Sistem Rekomendasi Social Group Meeting Point",
    subtitle:
      "A Smart Recommendation App for Finding Perfect Hangout Spots — Individually or in Groups ☕",
    description:
      "Aplikasi mobile berbasis Android yang membantu pengguna menemukan tempat nongkrong sesuai preferensi suasana, harga, dan lokasi. Sistem ini menggabungkan knowledge-based recommendation, aspect-based sentiment analysis, dan metode Borda Count untuk memberikan rekomendasi individu maupun kelompok secara akurat dan efisien.",
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
    thumbnail:
      "/assets/images/sospo.jpeg",
    details: {
      objective: [
        "Mempermudah pengguna menentukan tempat meeting point sesuai preferensi pribadi atau kelompok.",
        "Mengintegrasikan analisis sentimen ulasan dari Google Maps sebagai basis pengetahuan.",
        "Menggabungkan preferensi beberapa pengguna dengan metode Borda untuk hasil yang representatif bagi kelompok."
      ],
      technologies: {
        backend: [
          "Python (Flask API)",
          "Knowledge-Based Reasoning (Constraint-based)",
          "Aspect-Based Sentiment Analysis (Lexicon-based)",
          "Borda Count Algorithm"
        ],
        frontend: [
          "Flutter (Dart)",
          "Firebase Authentication & Firestore (database & login)",
          "Google Calendar API Integration"
        ],
        tools: [
          "SerpAPI (Web Scraping Google Maps)",
          "Figma (UI/UX Design)",
          "Google Colab (Model Training)",
          "VS Code"
        ]
      },
      features: [
        { name: "🔐 Login & Register", desc: "Autentikasi pengguna (Firebase Auth)." },
        {
          name: "☕ Rekomendasi Individu",
          desc: "Menampilkan tempat berdasarkan preferensi suasana, harga, dan menu."
        },
        {
          name: "👥 Rekomendasi Kelompok (Borda Count)",
          desc: "Menggabungkan preferensi beberapa anggota untuk rekomendasi bersama."
        },
        {
          name: "🗓️ Penjadwalan Google Calendar",
          desc: "Menjadwalkan waktu meeting dan mengirim undangan otomatis."
        },
        {
          name: "👤 Profil Pengguna",
          desc: "Edit nama, preferensi default, dan informasi akun."
        }
      ]
    }
  },
  {
    title: "Personal Portfolio dan Journal Website",
    subtitle: "A Minimalist Web Platform for Writing Journals and Showcasing Projects ✨",
    description:
      "Sebuah situs personal berbasis Laravel yang menyediakan halaman publik untuk menampilkan jurnal dan portofolio proyek, serta dashboard admin untuk mengelola konten. Website ini dibangun dengan konsep clean, minimalis, dan mudah dikembangkan.",
    tags: [
      "PHP",
      "Laravel",
      "Tailwind CSS",
      "Vite",
      "Alpine.js",
      "Eloquent ORM",
      "Laravel Breeze",
      "Portfolio",
      "Blog System"
    ],
    github: "https://github.com/maulinasabrina/maulina-life-repo",
    live: "https://maulina-life-repo-production-3143.up.railway.app/",
    thumbnail: "/assets/images/personal.jpeg",
    details: {
      objective: [
        "Menyediakan platform pribadi untuk menulis jurnal atau blog secara mudah.",
        "Menampilkan daftar proyek sebagai portofolio dengan tampilan profesional.",
        "Menyediakan dashboard admin yang aman untuk CRUD jurnal dan proyek.",
        "Menciptakan tampilan yang clean dan responsif menggunakan Tailwind CSS."
      ],

      technologies: {
        backend: [
          "PHP 8.2",
          "Laravel 12",
          "Eloquent ORM",
          "Laravel Breeze (Authentication)"
        ],
        frontend: [
          "Tailwind CSS",
          "Vite",
          "Alpine.js",
          "Blade Templates"
        ],
        tools: [
          "Composer",
          "NPM",
          "Pest (Testing)",
          "VS Code"
        ]
      },

      features: [
        {
          name: "🔐 Autentikasi Admin",
          desc: "Login dan register menggunakan Laravel Breeze, dengan proteksi middleware auth."
        },
        {
          name: "📓 CRUD Journal",
          desc: "Admin dapat membuat, mengedit, menghapus, dan melihat seluruh jurnal dengan slug otomatis."
        },
        {
          name: "📰 Halaman Publik Journal",
          desc: "Pengguna dapat melihat daftar jurnal dan membaca detail berdasarkan slug."
        },
        {
          name: "💼 Manajemen Proyek",
          desc: "Fitur untuk menyimpan project dengan deskripsi, tech stack, GitHub link, dan thumbnail."
        },
        {
          name: "📊 Dashboard Admin",
          desc: "Tampilan ringkas untuk melihat jumlah jurnal dan proyek secara keseluruhan."
        },
        {
          name: "🎨 Frontend Responsif",
          desc: "UI minimalis yang dibuat dengan Tailwind, cocok untuk blog dan portofolio modern."
        },
      ]
    }
  },
  {
    "title": "Cafe Finder - Web App to Discover Nearby Coffee Shops",
    "subtitle": "Peta Interaktif untuk Menemukan Kafe Terdekat ☕📍",
    "description": "Aplikasi web berbasis JavaScript yang menampilkan peta interaktif untuk menemukan kafe di sekitar pengguna. Frontend menggunakan Leaflet dan backend menggunakan Node.js & Express untuk mem-proxy data dari SerpAPI.",
    "tags": [
      "JavaScript",
      "Node.js",
      "Express",
      "Leaflet",
      "OpenStreetMap",
      "SerpAPI",
      "Frontend",
      "Backend",
      "Geolocation",
      "Map App"
    ],
    "github": "https://github.com/maulinasabrina/cafe_finder",
    "live": "https://cafefinder-production-c8d8.up.railway.app/",
    "thumbnail": "/assets/images/cafe.jpeg",
    "details": {
      "objective": [
        "Memberikan cara mudah mencari kafe terdekat melalui peta interaktif.",
        "Mendukung pencarian berbasis kata kunci seperti 'coffee', 'kopi', dan lainnya.",
        "Menampilkan marker lengkap dengan nama, rating, dan alamat kafe.",
        "Menyediakan backend ringan untuk mengambil data kafe real-time dari SerpAPI.",
        "Membangun aplikasi geolocation yang cepat, minimalis, dan mudah dikembangkan."
      ],

      "technologies": {
        "backend": [
          "Node.js",
          "Express.js",
          "Fetch API / Dynamic Import",
          "Environment Variables (SERP_API_KEY, SERP_BASE_URL)"
        ],
        "frontend": [
          "HTML5",
          "CSS3",
          "Vanilla JavaScript",
          "Leaflet.js",
          "OpenStreetMap Tiles"
        ],
        "tools": [
          "NPM",
          "VS Code",
          "SerpAPI",
          "Browser Geolocation API"
        ]
      },

      "features": [
        {
          "name": "📍 Geolokasi Pengguna",
          "desc": "Menampilkan posisi pengguna di peta dengan marker khusus beserta radius lokasi."
        },
        {
          "name": "🔎 Pencarian Kafe",
          "desc": "Pencarian berdasarkan kata kunci yang dikirim ke backend kemudian diteruskan ke SerpAPI."
        },
        {
          "name": "📡 Filter Radius",
          "desc": "Menampilkan kafe dalam radius tertentu berdasarkan pilihan pengguna."
        },
        {
          "name": "☕ Marker Kafe & Popup",
          "desc": "Marker khusus kafe dengan popup yang menampilkan nama, rating, dan alamat."
        },
        {
          "name": "🌐 Backend API Proxy",
          "desc": "Endpoint Node.js yang memformat data SerpAPI menjadi JSON siap pakai untuk frontend."
        },
        {
          "name": "🧭 Auto Fit Bounds",
          "desc": "Peta otomatis menyesuaikan zoom agar seluruh marker pencarian terlihat."
        }
      ]
    }
  }


    
];


 export const techStack = [
    { name: 'HTML5', icon: '/assets/icon/html5.png' },
    { name: 'Tailwind', icon: '/assets/icon/tailwind.png' },
    { name: 'SQL', icon: '/assets/icon/sql.png' },
    { name: 'React.js', icon: '/assets/icon/react.png' },
    { name: 'JavaScript', icon: '/assets/icon/javascript.png' },
    { name: 'Next.js', icon: '/assets/icon/nextjs.png' },
    { name: 'Node.js', icon: '/assets/icon/nodejs.png' },
    { name: 'Git', icon: '/assets/icon/git.png' },
    { name: 'Flutter', icon: '/assets/icon/flutter.png' },
    { name: 'Laravel', icon: '/assets/icon/laravel.png' },
    { name: 'Python', icon: '/assets/icon/python.png' },
    { name: 'Postman', icon: '/assets/icon/postman.png' },
    { name: 'Firebase', icon: '/assets/icon/firebase.png' },
    { name: 'C++', icon: '/assets/icon/c++.png' },
  ];

  export   const tools = [
    { name: "Notion",
      icon: '/assets/images/notion.png'
     },
    { name: "Figma",
      icon: '/assets/images/figma.png'
     },
    { name: "VS Code",
      icon: '/assets/images/vscode.png'
     },
    { name: "Github",
      icon: '/assets/images/github.png'
     },
  ];
