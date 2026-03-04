// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);
}

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  mobileNav.classList.toggle("active");
  document.body.style.overflow = mobileNav.classList.contains("active")
    ? "hidden"
    : "auto";
});

// Close mobile menu when clicking a link
document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    mobileNav.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Project data for modals
const projectData = {
  joblynest: {
    title: "JoblyNest - Final Year Project",
    description:
      "A role-based job marketplace connecting job posters with seekers. Features secure authentication, admin verification, and Stripe payments.",
    fullDescription:
      "JoblyNest is a comprehensive job marketplace platform that addresses the gaps in traditional job platforms. It includes proper user verification, secure role-based access, safe payment mechanisms, and efficient short-term task matching. The platform has three user roles: Job Posters can create and manage jobs, make payments; Job Seekers can create profiles, add skills, accept jobs; and Admins approve users and handle complaints.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "Supabase",
      "Stripe",
      "PostgreSQL",
    ],
    screenshots: [
      {
        title: "Job Poster Dashboard",
        path: "images/projects/joblynest/JobPosterDashboard.png",
        description: "Main dashboard for the Job Poster",
      },
      {
        title: "Job Seeker Dashboard",
        path: "images/projects/joblynest/JobSeekerDashboard.png",
        description: "Main dashboard for the Job Poster",
      },
      {
        title: "Admin Dashboard",
        path: "images/projects/joblynest/AdminDash.png",
        description: "Main dashboard for the Admin",
      },
      {
        title: "Real Time Notifications",
        path: "images/projects/joblynest/Notifications.png",
        description: "Real time notification screen for job seekers",
      },
      {
        title: "Generate Description",
        path: "images/projects/joblynest/GenerateDescription.png",
        description:
          "Using gemini model to create description for the job seeker",
      },
      {
        title: "Maps for selecting location",
        path: "images/projects/joblynest/Maps.png",
        description:
          "Maps for selecting the current or customized location for the job seeker",
      },
      {
        title: "Messages Screen",
        path: "images/projects/joblynest/Messages.png",
        description:
          "Messages screen for real time communication between job seekers and job posters",
      },
      {
        title: "Rating/Review Screen",
        path: "images/projects/joblynest/RatingReviewSeeker.png",
        description:
          "Two way rating/review system for both job seekers and job posters",
      },
      {
        title: "Set availability Screen",
        path: "images/projects/joblynest/SetAvailibity.png",
        description:
          "Set availibility screen so that the seeker can choose the time and date they are availible for work",
      },
      {
        title: "Recommendation Screen",
        path: "images/projects/joblynest/RecommendedSeekers.png",
        description:
          "Recommendation screen that shows the suitable job seekers for a task",
      },
      {
        title: "Task Creation Screen",
        path: "images/projects/joblynest/TaskCreation.png",
        description: "Task creation screen for job posters",
      },
    ],
    github: "https://github.com/LaibaAimen7777/joblynest",
    video: "videos/projects/joblynest/demo.mp4",
    hasVideo: true,
    badge: "FYP",
  },
  audiobook: {
    title: "React Native Audiobook App",
    description:
      "Cross-platform mobile application that allows users to listen to audiobooks, create personalized playlists, and track listening progress.",
    fullDescription:
      "This app provides a seamless audiobook experience with features like background playback, sleep timer, bookmarking, and progress synchronization across devices. Users can discover new books, create custom playlists, and earn badges for listening milestones. Built with React Native for both iOS and Android platforms.",
    tech: ["React Native", "JavaScript", "Firebase"],
    screenshots: [
      {
        title: "Login Screen",
        path: "images/projects/audiobook/login.jpeg",
        description: "Login screen of the website",
      },
      {
        title: "Main Screen",
        path: "images/projects/audiobook/main.jpeg",
        description: "",
      },
      {
        title: "AudioBooks Screen",
        path: "images/projects/audiobook/audio.jpeg",
        description: "",
      },
      {
        title: "Author Screen",
        path: "images/projects/audiobook/author.jpeg",
        description: "",
      },
      {
        title: "Books Screen",
        path: "images/projects/audiobook/books.jpeg",
        description: "",
      },
      {
        title: "Audio Player Screen",
        path: "images/projects/audiobook/player.jpeg",
        description: "",
      },
      {
        title: "Playlist Screen",
        path: "images/projects/audiobook/playlist.jpeg",
        description: "",
      },
      {
        title: "Progress Screen",
        path: "images/projects/audiobook/progress.jpeg",
        description: "",
      },
    ],
    github: "https://github.com/LaibaAimen7777/ReactMad",
    video: "videos/projects/audiobook/demo.mp4",
    hasVideo: true,
  },
  mern: {
    title: "Hobstr - MERN Social Platform",
    description:
      "Social media platform built with the MERN stack that connects people through shared hobbies and interests.",
    fullDescription:
      "Users can create profiles, join hobby-based communities, share posts, organize events, and connect with like-minded individuals. The platform includes features like real-time chat, event scheduling, and content moderation. Built with MongoDB, Express, React, and Node.js with Socket.io for real-time features.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Cloudinary"],
    screenshots: [
      {
        title: "Landing Screen",
        path: "images/projects/mern/landingPage.png",
        description: "Landing Screen of the website",
      },
      {
        title: "Login Screen",
        path: "images/projects/mern/login.png",
        description: "",
      },
      {
        title: "Signup Screen",
        path: "images/projects/mern/signup.png",
        description: "",
      },
      {
        title: "User Account Screen",
        path: "images/projects/mern/account.png",
        description: "",
      },
      {
        title: "Edit Profile Screen",
        path: "images/projects/mern/edit.png",
        description: "",
      },
      {
        title: "Feed Screen",
        path: "images/projects/mern/main.png",
        description: "",
      },
      {
        title: "Gemini Bot",
        path: "images/projects/mern/bot.png",
        description: "",
      },
      {
        title: "Notification Screen",
        path: "images/projects/mern/notification.png",
        description: "",
      },
      {
        title: "New Post Screen",
        path: "images/projects/mern/post.png",
        description: "",
      },
    ],
    github: "https://github.com/LaibaAimen7777/hobstr",
  },
  dotnet: {
    title: "PDF Rewards - .NET Application",
    description:
      "A .NET-based web application that gamifies reading by allowing users to earn points based on reading time.",
    fullDescription:
      "Users can read PDF books directly in the browser, earn points for time spent reading, and redeem those points to purchase additional books from the marketplace. Features include progress tracking, achievements, and a reward system to promote user engagement and learning.",
    tech: ["ASP.NET MVC", "C#", "SQL Server", "Entity Framework", "Bootstrap"],
    screenshots: [
      {
        title: "Landing Page",
        path: "images/projects/dotnet/landingPage.png",
        description: "Landing page of the website",
      },
      {
        title: "Login Screen",
        path: "images/projects/dotnet/login.png",
        description: "",
      },
      {
        title: "Signup Screen",
        path: "images/projects/dotnet/signup.png",
        description: "",
      },
      {
        title: "Main Dashboard",
        path: "images/projects/dotnet/mainPage.png",
        description: "",
      },
      {
        title: "Purchased books",
        path: "images/projects/dotnet/purchase.png",
        description: "",
      },
      {
        title: "Stats Screen",
        path: "images/projects/dotnet/stats.png",
        description: "",
      },
      {
        title: "Pdf Reading Screen",
        path: "images/projects/dotnet/pdf.png",
        description: "",
      },
    ],
  },
  tictactoe: {
    title: "Tic Tac Toe Game",
    description:
      "Classic Tic Tac Toe game built with React and TypeScript featuring AI opponent and multiplayer modes.",
    fullDescription:
      "A fully interactive Tic Tac Toe game with multiple difficulty levels for AI opponents, local multiplayer, and beautiful animations. Includes score tracking, game history, and responsive design for all devices. Built with React, TypeScript, and Vite for fast performance.",
    tech: ["React", "Javascript", "CSS", "HTML"],
    screenshots: [
      {
        title: "",
        path: "images/projects/tictactoe/thumbnail.png",
        description: "",
      },
      {
        title: "",
        path: "images/projects/tictactoe/main.png",
        description: "",
      },
    ],
    github: "https://github.com/LaibaAimen7777/tic-tac-toe",
    demo: "https://laibaaimen7777.github.io/tic-tac-toe/",
  },
  school: {
    title: "School Portal (In Progress)",
    description:
      "A comprehensive school management system built with Next.js and NestJS.",
    fullDescription:
      "Currently developing a full-featured school portal with student management, attendance tracking, grade management, parent-teacher communication, and administrative dashboards. Built with modern best practices and scalable architecture using Next.js frontend and NestJS backend with PostgreSQL database.",
    tech: ["Next.js", "NestJS", "MySql", "TypeORM"],
    screenshots: [
      {
        title: "",
        path: "images/projects/school/landingD.png",
        description: "",
      },
      {
        title: "",
        path: "images/projects/school/login.png",
        description: "",
      },
    ],
    github: "https://github.com/LaibaAimen7777/school_portal",
    status: "In Progress",
  },
};

// Current image index for gallery
let currentImageIndex = 0;
let currentProjectScreenshots = [];

function openProjectModal(projectId) {
  const modal = document.getElementById("projectModal");
  const modalBody = document.getElementById("modalBody");
  const project = projectData[projectId];

  if (project) {
    currentProjectScreenshots = project.screenshots;
    currentImageIndex = 0;

    // Create tech tags
    const techHTML = project.tech
      .map((t) => `<span class="tech-tag">${t}</span>`)
      .join("");

    // Create gallery HTML
    const galleryHTML = createGalleryHTML(project.screenshots);

    // Create action buttons
    let actionButtons = "";
    if (project.github) {
      actionButtons += `<a href="${project.github}" target="_blank" class="btn btn-github"><i class="fab fa-github"></i> View Code</a>`;
    }
    if (project.demo) {
      actionButtons += `<a href="${project.demo}" target="_blank" class="btn btn-primary"><i class="fas fa-external-link-alt"></i> Live Demo</a>`;
    }

    modalBody.innerHTML = `
            <div class="modal-project">
                ${galleryHTML}
                <h2 class="modal-title">${project.title}</h2>
                ${project.status ? `<span class="project-status">${project.status}</span>` : ""}
                <p class="modal-description">${project.fullDescription || project.description}</p>
                <div class="modal-tech">
                    ${techHTML}
                </div>
                <div class="modal-links">
                    ${actionButtons}
                </div>
            </div>
        `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";

    // Initialize gallery event listeners
    initGalleryEvents();
  }
}

function createGalleryHTML(screenshots) {
  if (!screenshots || screenshots.length === 0) {
    return '<div class="modal-image-placeholder">📸 No screenshots available</div>';
  }

  const thumbnailsHTML = screenshots
    .map(
      (screenshot, index) => `
        <div class="gallery-thumbnail ${index === 0 ? "active" : ""}" onclick="changeImage(${index})">
            <img src="${screenshot.path}" alt="${screenshot.title}" loading="lazy">
        </div>
    `,
    )
    .join("");

  return `
        <div class="gallery-container">
            <div class="gallery-main">
                <div class="gallery-main-image">
                    <img src="${screenshots[0].path}" alt="${screenshots[0].title}" id="mainGalleryImage">
                    <button class="gallery-fullscreen-btn" onclick="openFullscreen()">
                        <i class="fas fa-expand"></i>
                    </button>
                </div>
                <div class="gallery-main-caption">
                    <h3 id="galleryCaptionTitle">${screenshots[0].title}</h3>
                    <p id="galleryCaptionDesc">${screenshots[0].description || ""}</p>
                </div>
            </div>
            
            <div class="gallery-nav">
                <button class="gallery-nav-btn" onclick="previousImage()">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <span class="gallery-counter" id="galleryCounter">
                    1 / ${screenshots.length}
                </span>
                <button class="gallery-nav-btn" onclick="nextImage()">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            
            <div class="gallery-thumbnails">
                ${thumbnailsHTML}
            </div>
        </div>
    `;
}

// Gallery navigation functions
function changeImage(index) {
  if (index < 0 || index >= currentProjectScreenshots.length) return;

  currentImageIndex = index;
  const screenshot = currentProjectScreenshots[index];

  // Update main image
  document.getElementById("mainGalleryImage").src = screenshot.path;
  document.getElementById("galleryCaptionTitle").textContent = screenshot.title;
  document.getElementById("galleryCaptionDesc").textContent =
    screenshot.description || "";
  document.getElementById("galleryCounter").textContent =
    `${index + 1} / ${currentProjectScreenshots.length}`;

  // Update active thumbnail
  document.querySelectorAll(".gallery-thumbnail").forEach((thumb, i) => {
    if (i === index) {
      thumb.classList.add("active");
    } else {
      thumb.classList.remove("active");
    }
  });
}

function nextImage() {
  const nextIndex = (currentImageIndex + 1) % currentProjectScreenshots.length;
  changeImage(nextIndex);
}

function previousImage() {
  const prevIndex =
    (currentImageIndex - 1 + currentProjectScreenshots.length) %
    currentProjectScreenshots.length;
  changeImage(prevIndex);
}

// Fullscreen functionality
function openFullscreen() {
  const modal = document.getElementById("fullscreenModal");
  const image = document.getElementById("fullscreenImage");
  const counter = document.getElementById("fullscreenCounter");

  if (!modal) {
    // Create fullscreen modal if it doesn't exist
    createFullscreenModal();
  }

  document.getElementById("fullscreenImage").src =
    currentProjectScreenshots[currentImageIndex].path;
  document.getElementById("fullscreenCounter").textContent =
    `${currentImageIndex + 1} / ${currentProjectScreenshots.length}`;
  document.getElementById("fullscreenModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function createFullscreenModal() {
  const modal = document.createElement("div");
  modal.className = "fullscreen-modal";
  modal.id = "fullscreenModal";
  modal.innerHTML = `
        <div class="fullscreen-content">
            <button class="fullscreen-close" onclick="closeFullscreen()">
                <i class="fas fa-times"></i>
            </button>
            <button class="fullscreen-prev" onclick="fullscreenPrev()">
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="fullscreen-next" onclick="fullscreenNext()">
                <i class="fas fa-chevron-right"></i>
            </button>
            <img src="" alt="Fullscreen view" class="fullscreen-image" id="fullscreenImage">
            <div class="fullscreen-counter" id="fullscreenCounter"></div>
        </div>
    `;
  document.body.appendChild(modal);
}

function closeFullscreen() {
  document.getElementById("fullscreenModal").classList.remove("active");
  document.body.style.overflow = "auto";
}

function fullscreenPrev() {
  previousImage();
  document.getElementById("fullscreenImage").src =
    currentProjectScreenshots[currentImageIndex].path;
  document.getElementById("fullscreenCounter").textContent =
    `${currentImageIndex + 1} / ${currentProjectScreenshots.length}`;
}

function fullscreenNext() {
  nextImage();
  document.getElementById("fullscreenImage").src =
    currentProjectScreenshots[currentImageIndex].path;
  document.getElementById("fullscreenCounter").textContent =
    `${currentImageIndex + 1} / ${currentProjectScreenshots.length}`;
}

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (document.getElementById("projectModal").classList.contains("active")) {
    if (e.key === "ArrowLeft") {
      previousImage();
    } else if (e.key === "ArrowRight") {
      nextImage();
    }
  }

  if (
    document.getElementById("fullscreenModal")?.classList.contains("active")
  ) {
    if (e.key === "Escape") {
      closeFullscreen();
    } else if (e.key === "ArrowLeft") {
      fullscreenPrev();
    } else if (e.key === "ArrowRight") {
      fullscreenNext();
    }
  }
});

// Touch support for gallery
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  const difference = touchStartX - touchEndX;

  if (Math.abs(difference) > swipeThreshold) {
    if (difference > 0) {
      // Swipe left - next image
      if (
        document.getElementById("projectModal").classList.contains("active")
      ) {
        nextImage();
      }
    } else {
      // Swipe right - previous image
      if (
        document.getElementById("projectModal").classList.contains("active")
      ) {
        previousImage();
      }
    }
  }
}

// Close project modal
function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Open video modal
function openVideoModal(videoSrc) {
  const modal = document.getElementById("videoModal");
  const container = document.getElementById("videoContainer");

  container.innerHTML = `
        <video controls autoplay>
            <source src="${videoSrc}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close video modal
function closeVideoModal() {
  const modal = document.getElementById("videoModal");
  const container = document.getElementById("videoContainer");

  container.innerHTML = ""; // Stop video playback
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Close modals when clicking outside
document.getElementById("projectModal").addEventListener("click", (e) => {
  if (e.target === document.getElementById("projectModal")) {
    closeProjectModal();
  }
});

document.getElementById("videoModal").addEventListener("click", (e) => {
  if (e.target === document.getElementById("videoModal")) {
    closeVideoModal();
  }
});

// Close modals with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProjectModal();
    closeVideoModal();
  }
});

// Image error handling - fallback to emoji
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", function () {
    this.style.display = "none";
    if (
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("fallback-emoji")
    ) {
      this.nextElementSibling.style.display = "flex";
    }
  });
});
