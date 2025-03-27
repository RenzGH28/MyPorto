/**
 * Site Configuration
 *
 * This file contains all the configurable settings for the website.
 * Edit these values to update the website content without changing code.
 */
    // Recode And Added Feature
    
     export const timezones = {
  Asia: ["Asia/Jakarta", "Asia/Tokyo", "Asia/Seoul", "Asia/Kolkata"],
  Eropa: ["Europe/London", "Europe/Moscow", "Europe/Istanbul", "Europe/Madrid"],
  Amerika: ["America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles"],
  Afrika: ["Africa/Cairo", "Africa/Johannesburg", "Africa/Nairobi", "Africa/Lagos"],
  Australia: ["Australia/Sydney", "Australia/Perth", "Australia/Adelaide", "Australia/Hobart"],
    }

    export function formatTimezone(tz: string): string {
        return tz.replace(/_/g, " ");
    }
    
    // My More
    
    export const lebaranSongs = [
  {
    title: "Lagu Lebaran 1",
    spotifyUrl: "https://open.spotify.com/track/4YxgOtbkTJKYDShDEdrYnr?si=hiJktQ7IQ3-vxEXf4Rai7Q",
  },
  {
    title: "Lagu Lebaran 2",
    spotifyUrl: "https://open.spotify.com/track/4gcQ4sBOIX8s510XrNZQUA?si=jpHNjg0nRdO1Fztohv1dCg",
  },
];

    export const siteConfig = {
      // Website information
      name: "Rz Developer",
      title: "Rz Developer - Personal Portfolio",
      description: "Tech enthusiast who loves breaking and rebuilding systems. Full-Stack Engineer and System & Software Modder with a passion for automation, security, and digital customization. Always exploring new technologies, from backend development to system modifications.",
    
      // Social media links
      social: {
        github: "https://github.com/RenzGH28",
        email: "rzdevxaventa@gmail.com",
      },
    
      // Location information
      location: "Jambi, Indonesia",
    
      // Professional roles
      roles: ["Full Stack Developer", "Reverse Engineer", "Cybersecurity Enthusiast"],
    
      // Typing animation text
      typingTexts: ["Full-Stack Engineer", "Software & System Modder", "Reverse Engineer"],
    
      // Media settings
      media: {
        backgroundMusic: "https://files.catbox.moe/kxu767.mp3",
        profileImage: "https://files.catbox.moe/4gvmlh.jpg",
        portfolioImage: "https://raw.githubusercontent.com/latesturl/dbCDN/refs/heads/main/my-DB/my-portofolio.jpg",
      },

      // Skills configuration - simplified for easy editing
    skills: {
      // Tech skills (frontend, backend, etc.)
      techStack: [
        {
          name: "HTML",
          icon: "https://cdn.iconscout.com/icon/free/png-512/free-html-logo-icon-download-in-svg-png-gif-file-formats--brand-company-business-brands-pack-logos-icons-2284975.png?f=webp&w=512",
          category: "frontend",
          level: "intermediate",
          needsWhiteBackground: false,
        },
        {
          name: "CSS",
          icon: "https://cdn.iconscout.com/icon/free/png-512/free-css-logo-icon-download-in-svg-png-gif-file-formats--logos-pack-icons-722685.png?f=webp&w=512",
          category: "frontend",
          level: "intermediate",
          needsWhiteBackground: false,
        },
        {
          name: "JavaScript",
          icon: "https://cdn.iconscout.com/icon/free/png-512/free-javascript-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-225993.png?f=webp&w=512",
          category: "backend",
          level: "advanced",
          needsWhiteBackground: false,
        },
        {
          name: "Node.js",
          icon: "https://cdn.iconscout.com/icon/free/png-512/free-node-js-1174925.png?f=webp&w=512",
          category: "backend",
          level: "advanced",
          needsWhiteBackground: false,
        },
        {
          name: "TypeScript",
          icon: "https://cdn.iconscout.com/icon/free/png-512/free-typescript-1174965.png?f=webp&w=512",
          category: "backend",
          level: "beginner",
          needsWhiteBackground: false,
        },
        {
          name: "Bash/Shell",
          icon: "https://cdn.iconscout.com/icon/free/png-512/free-terminal-3521711-2945011.png?f=webp&w=512",
          category: "backend",
          level: "beginner",
          needsWhiteBackground: false,
        },
      ],
    
      // Development tools
      tools: [
        {
          name: "Git",
          icon: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
          category: "tools",
          level: "intermediate",
          needsWhiteBackground: true,
        },
        {
          name: "GitHub",
          icon: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
          category: "tools",
          level: "intermediate",
          needsWhiteBackground: true,
        },
      ],
    },

  // Projects information - removed personal portfolio project
      projects: [],
    }
    
    