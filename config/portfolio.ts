// Nicole Soltsov's portfolio content. Update this file to change site copy.
export const portfolio = {
  name: "Nicole Soltsov",
  bio: [
    "Hi, I'm **Nicole**, a **Computer Science student at UCLA** who loves turning ideas into useful, thoughtful software.",
    "I'm interested in **full-stack development**, **AI**, and **computer vision**. I've built everything from a live classroom polling platform to an autonomous waste-collection robot.",
    "Outside of coding, I enjoy **tennis**, **K-dramas**, and helping more students feel welcome in tech. I co-founded my high school's Girls Who Code club and love building things with others.",
  ],
  cta: "Want to build something together? Let's connect!",
  githubUsername: "NicoleSoltsov",
  social: {
    twitter: "",
    github: "https://github.com/NicoleSoltsov",
    resume: "/Nicole_Soltsov_Resume.pdf",
    discord: "",
    linkedin: "https://www.linkedin.com/in/nicole-soltsov/",
  },
  techStackProse:
    "I work across the stack with {{Python}}, {{JavaScript}}, {{Django}}, {{Vue.js}}, and {{Node.js}}. I also enjoy building computer vision projects with {{OpenCV}} and {{Raspberry Pi}}.",
  techStackCategories: [
    { category: "Languages", tools: ["Python", "Java", "JavaScript", "HTML", "CSS", "SQL"] },
    { category: "Frameworks & Libraries", tools: ["Django", "Django REST Framework", "Vue.js", "Express.js", "Node.js", "OpenCV", "NumPy"] },
    { category: "Databases", tools: ["MongoDB", "SQLite"] },
    { category: "Tools & Technologies", tools: ["Git", "GitHub", "Raspberry Pi", "OpenAI Whisper", "FFmpeg", "Cloudinary"] },
  ],
  experience: [
    {
      company: "Summer Design Institute",
      photo: "",
      isCurrent: false,
      roles: [
        {
          title: "Software Engineering Intern — Full-Stack K-Drama Tracker",
          type: "Internship",
          location: "",
          startDate: "Jul 2025",
          endDate: "Aug 2025",
          bullets: [
            "Built a full-stack K-drama discovery and tracking platform with authentication and personalized dashboards.",
            "Integrated TMDB and Spotify APIs for watchlists, ratings, reviews, progress tracking, and soundtrack recommendations.",
            "Tested the platform with 10 students and used feedback to improve usability.",
          ],
          tech: ["Django", "Django REST Framework", "Vue.js", "SQLite"],
        },
        {
          title: "Software Engineering Intern — AI Video Summarizer",
          type: "Internship",
          location: "",
          startDate: "Jul 2024",
          endDate: "Aug 2024",
          bullets: [
            "Built a pipeline to download YouTube videos, extract audio with FFmpeg, transcribe with OpenAI Whisper, and generate AI summaries.",
            "Processed 10 videos, including hour-long recordings.",
            "Integrated Cloudinary with a Node.js/Express backend for media storage and automated processing.",
          ],
          tech: ["Node.js", "Express.js", "MongoDB", "JavaScript", "OpenAI Whisper", "FFmpeg", "Cloudinary"],
        },
      ],
    },
    {
      company: "Girls Who Code",
      photo: "",
      isCurrent: false,
      roles: [
        {
          title: "Co-Founder & Co-President",
          type: "Leadership",
          location: "",
          startDate: "Oct 2023",
          endDate: "Jun 2026",
          bullets: [
            "Co-founded and led a 20-member club through workshops, collaborative projects, and guest speaker events.",
            "Created and taught 7+ original Python and Java lessons, mentoring beginners through hands-on projects.",
          ],
          tech: ["Python", "Java"],
        },
      ],
    },
  ],
  projects: [
    {
      title: "Classroom Polling Platform",
      tagline: "A real-time classroom polling experience for instructors and students; piloted with about 40 students in two classrooms, with live results and teacher-informed improvements.",
      tech: ["Django", "Django REST Framework", "Vue.js", "JWT", "WebSockets"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "BinBuddy Autonomous Waste Collection Robot",
      tagline: "Raspberry Pi-powered robot with camera-based navigation, HSV marker detection at approximately 1 meter, and obstacle avoidance tested across 10 runs.",
      tech: ["Python", "OpenCV", "NumPy", "Raspberry Pi"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Full-Stack K-Drama Tracker",
      tagline: "Discover and track K-dramas with personal watchlists, ratings, reviews, progress, and soundtracks powered by TMDB and Spotify.",
      tech: ["Django", "Django REST Framework", "Vue.js", "SQLite"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "AI Video Summarizer",
      tagline: "Automated YouTube video processing, Whisper transcription, and AI summarization; tested on 10 videos, including hour-long recordings.",
      tech: ["Node.js", "Express.js", "MongoDB", "OpenAI Whisper", "FFmpeg", "Cloudinary"],
      liveUrl: "",
      githubUrl: "",
    },
  ],
};
