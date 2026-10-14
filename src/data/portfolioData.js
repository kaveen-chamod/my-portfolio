export const personalInfo = {
  name: "Kaveen Chamod",
  primaryRoles: [
    "Full-Stack Developer",
    "Network & Cloud Enthusiast",
    "UI/UX Designer",
    "ICT Undergraduate"
  ],
  roleString: "Full-Stack Developer | Network & Cloud Enthusiast | UI/UX Designer | ICT Undergraduate",
  tagline: "Architecting Resilient Networks & Engineering Scalable, Modern Web Applications",
  shortBio: "Undergraduate ICT student at the Faculty of Technology, University of Colombo, passionate about full-stack web engineering, cloud-network infrastructure, and intuitive interface design.",
  location: "Colombo / Anuradhapura, Sri Lanka",
  coordinates: { lat: 7.8731, lon: 80.7718 }, // Sri Lanka Lat/Lon
  email: "kaveenchamod344@gmail.com",
  linkedin: "https://www.linkedin.com/in/kaveen-chamod",
  github: "https://github.com/kaveen-chamod",
  resume: "https://drive.google.com/file/d/1NJJFtw1Is1zhTm7MK7VLE_F1j9bqQpV2/view?usp=sharing",
};

export const aboutData = {
  photo: "/about-profile.jpg",
  detailedBio: "I am an undergraduate student pursuing a Bachelor of Information and Communication Technology Honours degree at the Faculty of Technology, University of Colombo. With a strong foundation spanning modern full-stack development, computer networking, and UI/UX design, I build end-to-end digital solutions that are robust, visually refined, and technically sound.",
  stats: [
    {
      value: "2+ Years",
      label: "Hands-on Development",
      subtext: "Full-Stack & Networking",
      icon: "Code"
    },
    {
      value: "10+",
      label: "Projects Completed",
      subtext: "Web & Network Infrastructure",
      icon: "CheckCircle"
    },
    {
      value: "15+",
      label: "Tech Tools & Frameworks",
      subtext: "Mastered Across Stack",
      icon: "Cpu"
    },
    {
      value: "BICT (Hons)",
      label: "Academic Specialization",
      subtext: "University of Colombo",
      icon: "GraduationCap"
    }
  ]
};

export const courseworkData = [
  { id: 1, title: "Software Engineering", code: "SE301", status: "Completed", category: "Core Software" },
  { id: 2, title: "Database Management Systems (DBMS)", code: "DB204", status: "Completed", category: "Data Systems" },
  { id: 3, title: "Web Development", code: "WEB202", status: "Completed", category: "Frontend & Backend" },
  { id: 4, title: "Human-Computer Interaction (HCI)", code: "HCI305", status: "Completed", category: "UI/UX & Design" },
  { id: 5, title: "Data Science", code: "DS308", status: "Completed", category: "Analytics & ML" },
  { id: 6, title: "Quality Assurance (QA)", code: "QA401", status: "Completed", category: "Testing & DevOps" },
  { id: 7, title: "Network Security Fundamentals", code: "NET402", status: "Completed", category: "Cybersecurity & Net" },
  { id: 8, title: "Artificial Intelligence (AI)", code: "AI405", status: "In Progress", category: "Machine Learning" },
  { id: 9, title: "Cloud Computing & Architecture", code: "CLD410", status: "Planned", category: "Cloud & Infrastructure" },
  { id: 10, title: "Introduction to Software Quality Assurance", code: "UOM-QA101", status: "Completed", category: "Testing & DevOps" },
  { id: 11, title: "Introduction to Greenhouse Gas Accounting for IT", code: "CISCO-GHG01", status: "Completed", category: "Green IT & Sustainability" },
  { id: 12, title: "IT Customer Support Basics", code: "CISCO-ITCS01", status: "Completed", category: "IT Support & Services" },
  { id: 13, title: "Getting Started with Linux Fundamentals", code: "RH-LINUX01", status: "Completed", category: "Systems & Linux" },
  { id: 14, title: "Computer Hardware Basics", code: "CISCO-CHB01", status: "Completed", category: "Hardware & Systems" },
  { id: 15, title: "Creating Compelling Reports", code: "CISCO-CCR01", status: "Completed", category: "Professional Skills" },
  { id: 16, title: "Data Science Essentials with Python", code: "CISCO-DSPY01", status: "Completed", category: "Analytics & ML" },
  { id: 17, title: "Front-End Web Development", code: "UOM-FEW101", status: "Completed", category: "Frontend & Backend" },
  { id: 18, title: "Docker & Containerization Essentials", code: "DCK501", status: "Planned", category: "DevOps & Cloud" },
  { id: 19, title: "Kubernetes & Microservices Architecture", code: "K8S502", status: "Planned", category: "DevOps & Cloud" }
];


export const skillCategories = [
  {
    category: "Frontend Engineering",
    skills: [
      { name: "React.js", color: "#61DAFB", icon: "SiReact" },
      { name: "JavaScript (ES6+)", color: "#F7DF1E", icon: "SiJavascript" },
      { name: "HTML5", color: "#E34F26", icon: "SiHtml5" },
      { name: "CSS3", color: "#1572B6", icon: "SiCss3" },
      { name: "Tailwind CSS", color: "#06B6D4", icon: "SiTailwindcss" }
    ]
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: "Node.js", color: "#339933", icon: "SiNodedotjs" },
      { name: "Express.js", color: "#68A063", icon: "SiExpress" },
      { name: "Java", color: "#ED8B00", icon: "FaJava" },
      { name: "Python", color: "#3776AB", icon: "SiPython" },
      { name: "C Language", color: "#A8B9CC", icon: "SiC" },
      { name: "MongoDB", color: "#47A248", icon: "SiMongodb" },
      { name: "MySQL", color: "#4479A1", icon: "SiMysql" },
      { name: "Supabase", color: "#3ECF8E", icon: "SiSupabase" }
    ]
  },
  {
    category: "Networking & Cloud Infrastructure",
    skills: [
      { name: "Cisco Packet Tracer", color: "#1BA0D7", icon: "SiCisco" },
      { name: "Vercel", color: "#FFFFFF", icon: "SiVercel" },
      { name: "Render", color: "#46E3B7", icon: "SiRender" },
      { name: "AWS Fundamentals", color: "#FF9900", icon: "SiAmazon" }
    ]
  },
  {
    category: "Mobile & UI/UX Design",
    skills: [
      { name: "Android Studio", color: "#3DDC84", icon: "SiAndroidstudio" },
      { name: "Figma", color: "#F24E1E", icon: "SiFigma" },
      { name: "Canva", color: "#00C4CC", icon: "SiCanva" }
    ]
  },
  {
    category: "Developer Tools & Workflow",
    skills: [
      { name: "Git", color: "#F05032", icon: "SiGit" },
      { name: "GitHub", color: "#E6EDF3", icon: "SiGithub" },
      { name: "Postman", color: "#FF6C37", icon: "SiPostman" },
      { name: "VS Code", color: "#007ACC", icon: "SiVisualstudiocode" }
    ]
  }
];

export const projectsData = [
  {
    id: "mern-ecommerce",
    title: "MERN Stack E-Commerce Platform",
    subtitle: "Web Application",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    description: "Full-featured online store with admin management dashboard, custom RESTful APIs, cart persistence, JWT authentication, and dynamic product filtering.",
    features: [
      "Secure JWT authentication with role-based access control (User/Admin)",
      "Dynamic product catalog with multi-criteria filtering and instant search",
      "Persistent cart storage with automated tax & shipping calculations",
      "Responsive admin dashboard for inventory, order status & revenue tracking"
    ],
    image: "/project-ecommerce.png",
    github: "https://github.com/kaveen-chamod",
    demo: "https://computershopfrontend1.vercel.app/",
    featured: true
  },
  {
    id: "taskflow",
    title: "TaskFlow Productivity Suite",
    subtitle: "Productivity & Task Management",
    tech: ["React.js", "Android Studio (Java)", "Tailwind CSS", "Material Design 3"],
    description: "Productivity and task management solution featuring clean workflow views, interactive Kanban categorization, mobile integration, and responsive state handling.",
    features: [
      "Interactive Kanban boards with drag-and-drop workflow status updates",
      "Cross-platform synchronization between Web and Android Mobile apps",
      "Priority tag badges and deadline reminder scheduling",
      "Sleek dark-mode interface built with Material Design 3 guidelines"
    ],
    image: "/project-taskflow.png",
    github: "https://github.com/kaveen-chamod/TaskFlow-.git",
    demo: "https://www.figma.com/design/u9Ii0rA6BlqpxXEei9oyC1/to-do?node-id=0-1&t=aHn6R11eBLEAX6GV-1",
    featured: true
  },
  {
    id: "network-simulation",
    title: "Multi-Floor Enterprise Network Simulation",
    subtitle: "Network Infrastructure",
    tech: ["Cisco Packet Tracer", "OSPF Routing", "Inter-VLAN", "DHCP", "Network Security"],
    description: "Enterprise multi-floor network topology simulation featuring segmented VLANs, resilient OSPF routing protocols, automated DHCP pools, and SSH network security hardening.",
    features: [
      "Segmented VLAN design across multi-floor department architecture",
      "Dynamic OSPF routing configuration for fast failover path convergence",
      "Centralized DHCP server pools with IP range security reservations",
      "Hardened Cisco IOS switches & routers with SSH access and Port Security"
    ],
    image: "/project-network.png",
    github: "https://github.com/kaveen-chamod",
    demo: "#",
    featured: true
  },
  {
    id: "hotel-network-management",
    title: "Multi-Floor Hotel Enterprise Network Infrastructure",
    subtitle: "Enterprise Network Engineering",
    tech: [
      "Cisco Packet Tracer",
      "Inter-VLAN Routing",
      "OSPF Dynamic Routing",
      "DHCP Services",
      "WLAN / Wireless APs",
      "Network Hardening & SSH"
    ],
    description: "A comprehensive multi-tier network architecture designed for an enterprise hotel, featuring 3 floor-level routers interconnected via serial OSPF links, department-wise VLAN segmentation, dynamic DHCP address provisioning, and unified wired/wireless end-user access.",
    features: [
      "Multi-Floor Router Mesh: 3 Cisco 2901 Routers connected via redundant Serial WAN links (10.10.10.0/30 subnets) running OSPF for resilient packet delivery.",
      "Departmental VLAN Isolation: Segmented VLANs across 3 floors (IT, Admin, Sales, HR, Finance, Reception, Logistics, and Store) with dedicated /24 subnets.",
      "Subnetted Inter-VLAN Routing: Configured sub-interfaces with 802.1Q encapsulation to maintain secure traffic separation between guest/staff networks.",
      "Hybrid Access Architecture: Integrated standalone Wireless Access Points (WAPs) per floor serving laptops, tablets, and mobile devices alongside fixed LAN workstations and printers."
    ],
    image: "/project-hotel-network.png",
    github: "https://github.com/kaveen-chamod",
    demo: "#",
    featured: true
  },
  {
  id: "network-compliance-auditor",
  title: "Automated Network Compliance Auditor",
  subtitle: "NetDevOps & Security Automation",
  tech: ["Python", "Cisco IOS", "Cisco Packet Tracer", "openpyxl", "pandas", "Webhooks"],
  description: "Automated network configuration auditing and compliance engine that ingests Cisco IOS running-configs, audits security baselines via regex, and generates executive-grade reports with real-time alerting.",
  features: [
    "Simulated enterprise multi-router architecture modeled and validated in Cisco Packet Tracer",
    "Automated regex compliance engine checking SSH v2, password encryption, banners, and VTY access controls",
    "Executive Excel audit reporting with dynamic color-coded conditional styling (Green/Red) via openpyxl",
    "Instant zero-lag security alerting dispatched via Discord Webhook rich embeds on policy violations"
  ],
  image: "/project-network-auditor.png",
  github: "https://github.com/kaveen-chamod/network-compliance-auditor.git",
  demo: "https://github.com/kaveen-chamod/network-compliance-auditor.git",
  featured: true
}
];

export const leadershipData = [
  {
    role: "Senior Treasurer",
    organization: "Buddhist Society, Faculty of Technology, UoC",
    period: "2025 - Present",
    type: "Faculty Leadership",
    description: "Overseeing financial planning, budgeting, and resource management for faculty-wide cultural and community welfare projects.",
    badge: "Active Leadership"
  },
  {
    role: "Event Coordinator",
    organization: "Siyothsara Orientation Program, UoC",
    period: "2026",
    type: "University Event",
    description: "Coordinating logistics, student engagement schedules, and stage management for the incoming undergraduate orientation ceremonies.",
    badge: "Organized Event"
  },
  {
    role: "Batch Coordinator (Music Circle)",
    organization: "Arts Club, Faculty of Technology, UoC",
    period: "2026",
    type: "Cultural Leadership",
    description: "Managing music circle performances, organizing rehearsals, and coordinating student talent showcases.",
    badge: "Cultural"
  },
  {
    role: "Volunteer & Graphic Designer",
    organization: "ZeroPlastic Colombo Community",
    period: "2026",
    type: "Community Service",
    description: "Designing promotional media, digital campaigns, and volunteering for environmental sustainability initiatives in Colombo.",
    badge: "Community"
  }
];
