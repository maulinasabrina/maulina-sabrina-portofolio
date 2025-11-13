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
