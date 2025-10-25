
import { Github, Instagram, Linkedin, Mail, Facebook, Twitter } from 'lucide-react';

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Projects', href: '#projects' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export const aboutData = {
  title: 'About TinkerHub [College Name]',
  description: 'TinkerHub is a global community of technology enthusiasts. Our college branch is dedicated to fostering a culture of innovation, learning, and collaboration among students. We provide a platform for students to learn new skills, work on real-world projects, and connect with like-minded peers and industry professionals.',
  mission: 'Our mission is to empower students with the tools and knowledge to build a better future through technology. We believe in learning by doing and encourage hands-on experimentation and creativity.',
  image: 'about-us',
};

export const eventsData = {
  upcoming: [
    {
      id: 1,
      title: 'Intro to React Workshop',
      date: 'October 25, 2024',
      description: 'Join us for a beginner-friendly workshop on React.js. Learn the fundamentals and build your first web application.',
      image: 'event-1',
    },
    {
      id: 2,
      title: 'InnovateX Hackathon 2024',
      date: 'November 15-17, 2024',
      description: 'A 48-hour hackathon to build innovative solutions for real-world problems. Prizes, food, and fun await!',
      image: 'event-2',
    },
  ],
  past: [
    {
      id: 3,
      title: 'Tech Talk: The Future of AI',
      date: 'September 10, 2024',
      description: 'An insightful talk by an industry expert on the latest trends and future possibilities in Artificial Intelligence.',
      image: 'event-3',
    },
    {
      id: 4,
      title: 'Community Icebreaker',
      date: 'August 30, 2024',
      description: 'Our first event of the semester! A fun-filled evening of games, networking, and getting to know the community.',
      image: 'event-4',
    },
  ],
};

export const projectsData = [
  {
    id: 1,
    title: 'Campus Navigator App',
    description: 'A mobile application to help new students navigate the college campus with ease, featuring an interactive map and event schedules.',
    image: 'project-1',
    link: '#',
  },
  {
    id: 2,
    title: 'Student Feedback Platform',
    description: 'A web platform for collecting and analyzing student feedback to improve college services and academic programs.',
    image: 'project-2',
    link: '#',
  },
  {
    id: 3,
    title: 'Autonomous Delivery Robot',
    description: 'A hardware project focused on building a small, autonomous robot for delivering items across the campus.',
    image: 'project-3',
    link: '#',
  },
  {
    id: 4,
    title: 'Library Occupancy Tracker',
    description: 'An IoT project that uses sensors to provide real-time data on library occupancy, displayed on a public dashboard.',
    image: 'project-4',
    link: '#',
  },
];

export const teamData = {
  faculty: [
    {
      id: 1,
      name: 'Dr. Evelyn Reed',
      role: 'Faculty Coordinator',
      major: 'Computer Science Dept.',
      year: '',
      image: 'team-faculty-1',
    },
  ],
  students: [
    {
      id: 2,
      name: 'Alice Johnson',
      role: 'Student Lead',
      major: 'Computer Engineering',
      year: '4th Year',
      image: 'team-student-1',
    },
    {
      id: 3,
      name: 'Bob Williams',
      role: 'Events Lead',
      major: 'Information Technology',
      year: '3rd Year',
      image: 'team-student-2',
    },
    {
      id: 4,
      name: 'Charlie Brown',
      role: 'Projects Lead',
      major: 'Electronics &amp; Comm.',
      year: '3rd Year',
      image: 'team-student-3',
    },
    {
      id: 5,
      name: 'Diana Prince',
      role: 'Outreach Lead',
      major: 'Mechanical Engineering',
      year: '2nd Year',
      image: 'team-student-4',
    },
  ],
};

export const coreTeamData = [
  { id: 1, name: 'Alex Doe', role: 'Community Lead', image: 'core-team-1', bio: "Used to work at IBM but quit because of robotz.", socials: { twitter: "#", facebook: "#", linkedin: "#" } },
  { id: 2, name: 'Brenda Smith', role: 'Technical Lead', image: 'core-team-2', bio: "Hello, I like not doing anything at all. Let's DM.", socials: { twitter: "#", facebook: "#", linkedin: "#" } },
  { id: 3, name: 'Chris Johnson', role: 'Operations Lead', image: 'core-team-3', bio: "Prodigy with record-breaking 176 IQ and many awards.", socials: { twitter: "#", facebook: "#", linkedin: "#" } },
  { id: 4, name: 'Diana Miller', role: 'Marketing Lead', image: 'core-team-4', bio: "Hello, I like money. It is the only purpose of in my life.", socials: { twitter: "#", facebook: "#", linkedin: "#" } },
];

export const membersData = [
  { id: 1, name: 'Ethan Hunt', role: 'Member', image: 'member-1', bio: "I'm just here to clean the floor, that's all. Nothing special.", socials: { twitter: "#", facebook: "#", linkedin: "#" } },
  { id: 2, name: 'Fiona Glenanne', role: 'Member', image: 'member-2', bio: "I don't choose this job. It choose me. Do you get it?", socials: { twitter: "#", facebook: "#", linkedin: "#" } },
  { id: 3, name: 'George Costanza', role: 'Member', image: 'member-3', bio: "I like managing people and controlling them.", socials: { twitter: "#", facebook: "#", linkedin: "#" } },
  { id: 4, name: 'Hannah Montana', role: 'Member', image: 'member-4', bio: "Ex-Singer but decided to work on startups.", socials: { twitter: "#", facebook: "#", linkedin: "#" } },
  { id: 5, name: 'Ian Malcolm', role: 'Member', image: 'member-5', bio: "Prodigy with record-breaking 176 IQ and many awards.", socials: { twitter: "#", facebook: "#", linkedin: "#" } },
  { id: 6, name: 'Julia Child', role: 'Member', image: 'member-6', bio: "Hello, I like not doing anything at all. Let's DM.", socials: { twitter: "#", facebook: "#", linkedin: "#" } },
];

export const participantsData = [
  { id: 1, name: 'Kara Danvers', role: 'Participant', image: 'participant-1', bio: "Used to work at IBM but quit because of robotz.", socials: { twitter: "#", facebook: "#", linkedin: "#" } },
  { id: 2, name: 'Leo Fitz', role: 'Participant', image: 'participant-2', bio: "Hello, I like money. It is the only purpose of in my life.", socials: { twitter: "#", facebook: "#", linkedin: "#" } },
  { id: 3, name: 'Monica Geller', role: 'Participant', image: 'participant-3', bio: "I don't choose this job. It choose me. Do you get it?", socials: { twitter: "#", facebook: "#", linkedin: "#" } },
  { id: 4, name: 'Nate Archibald', role: 'Participant', image: 'participant-4', bio: "I like managing people and controlling them.", socials: { twitter: "#", facebook: "#", linkedin: "#" } },
  { id: 5, name: 'Olivia Pope', role: 'Participant', image: 'participant-5', bio: "Ex-Singer but decided to work on startups.", socials: { twitter: "#", facebook: "#", linkedin: "#" } },
  { id: 6, name: 'Peter Parker', role: 'Participant', image: 'participant-6', bio: "Prodigy with record-breaking 176 IQ and many awards.", socials: { twitter: "#", facebook: "#", linkedin: "#" } },
];


export const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/tinkerhub' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/tinkerhub' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/tinkerhub' },
  { name: 'Email', icon: Mail, url: 'mailto:contact@tinkerhub.org' },
];
