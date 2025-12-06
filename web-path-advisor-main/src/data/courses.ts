
import { Course } from "@/components/CourseCard";

export const courseData: { [key: string]: Course[] } = {
  frontend: [
    {
      id: "fe1",
      title: "The Complete Front-End Web Development Course",
      provider: "Udemy",
      level: "Beginner",
      duration: "40 hours",
      rating: 4.7,
      matchPercentage: 98,
      tags: ["HTML", "CSS", "JavaScript", "React"],
      url: "https://example.com/course/frontend1",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "fe2",
      title: "Front-End Developer Professional Certificate",
      provider: "Coursera",
      level: "Beginner to Intermediate",
      duration: "3 months",
      rating: 4.8,
      matchPercentage: 95,
      tags: ["HTML", "CSS", "JavaScript", "React", "UX"],
      url: "https://example.com/course/frontend2",
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "fe3",
      title: "Advanced CSS and Sass: Flexbox, Grid, Animations",
      provider: "Udemy",
      level: "Intermediate",
      duration: "28 hours",
      rating: 4.9,
      matchPercentage: 92,
      tags: ["CSS", "Sass", "Flexbox", "CSS Grid", "Animations"],
      url: "https://example.com/course/frontend3",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "fe4",
      title: "JavaScript: The Advanced Concepts",
      provider: "ZeroToMastery",
      level: "Advanced",
      duration: "25 hours",
      rating: 4.8,
      matchPercentage: 89,
      tags: ["JavaScript", "OOP", "Functional Programming", "Performance"],
      url: "https://example.com/course/frontend4",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
    }
  ],
  mern: [
    {
      id: "mern1",
      title: "MERN Stack Front To Back: Full Stack React, Redux & Node.js",
      provider: "Udemy",
      level: "Intermediate",
      duration: "12 hours",
      rating: 4.6,
      matchPercentage: 97,
      tags: ["React", "Node.js", "Express", "MongoDB"],
      url: "https://example.com/course/mern1",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "mern2",
      title: "Complete MERN Fullstack Development",
      provider: "Coursera",
      level: "Beginner to Advanced",
      duration: "3 months",
      rating: 4.7,
      matchPercentage: 94,
      tags: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      url: "https://example.com/course/mern2",
      image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "mern3",
      title: "Node.js API Masterclass With Express & MongoDB",
      provider: "Udemy",
      level: "Intermediate",
      duration: "15 hours",
      rating: 4.8,
      matchPercentage: 91,
      tags: ["Node.js", "Express", "MongoDB", "REST API"],
      url: "https://example.com/course/mern3",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "mern4",
      title: "Advanced React and Redux",
      provider: "PluralSight",
      level: "Advanced",
      duration: "20 hours",
      rating: 4.6,
      matchPercentage: 88,
      tags: ["React", "Redux", "Authentication", "Testing"],
      url: "https://example.com/course/mern4",
      image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&q=80&w=800"
    }
  ],
  android: [
    {
      id: "and1",
      title: "Android App Development Masterclass using Kotlin",
      provider: "Udemy",
      level: "Beginner",
      duration: "35 hours",
      rating: 4.7,
      matchPercentage: 96,
      tags: ["Kotlin", "Android SDK", "Material Design"],
      url: "https://example.com/course/android1",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "and2",
      title: "Android Developer Nanodegree",
      provider: "Udacity",
      level: "Intermediate",
      duration: "4 months",
      rating: 4.8,
      matchPercentage: 93,
      tags: ["Java", "Kotlin", "Android", "Firebase"],
      url: "https://example.com/course/android2",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "and3",
      title: "Advanced Android App Development",
      provider: "Coursera",
      level: "Advanced",
      duration: "2 months",
      rating: 4.6,
      matchPercentage: 90,
      tags: ["Kotlin", "Jetpack Compose", "MVVM"],
      url: "https://example.com/course/android3",
      image: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "and4",
      title: "Android Testing and Debugging",
      provider: "LinkedIn Learning",
      level: "Intermediate",
      duration: "15 hours",
      rating: 4.5,
      matchPercentage: 87,
      tags: ["Testing", "Debugging", "Android", "JUnit"],
      url: "https://example.com/course/android4",
      image: "https://images.unsplash.com/photo-1596742578443-7682ef5251cd?auto=format&fit=crop&q=80&w=800"
    }
  ],
  "data-analytics": [
    {
      id: "da1",
      title: "Data Science and Machine Learning Bootcamp with Python",
      provider: "Udemy",
      level: "Beginner to Intermediate",
      duration: "42 hours",
      rating: 4.8,
      matchPercentage: 99,
      tags: ["Python", "NumPy", "Pandas", "Matplotlib"],
      url: "https://example.com/course/data1",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "da2",
      title: "Google Data Analytics Professional Certificate",
      provider: "Coursera",
      level: "Beginner",
      duration: "6 months",
      rating: 4.9,
      matchPercentage: 96,
      tags: ["R", "SQL", "Data Visualization", "Tableau"],
      url: "https://example.com/course/data2",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "da3",
      title: "Advanced Data Science with IBM",
      provider: "EdX",
      level: "Advanced",
      duration: "3 months",
      rating: 4.7,
      matchPercentage: 92,
      tags: ["Machine Learning", "Deep Learning", "Big Data"],
      url: "https://example.com/course/data3",
      image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "da4",
      title: "Business Analytics Specialization",
      provider: "Coursera",
      level: "Intermediate",
      duration: "5 months",
      rating: 4.6,
      matchPercentage: 89,
      tags: ["Excel", "Business Intelligence", "Data Models"],
      url: "https://example.com/course/data4",
      image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?auto=format&fit=crop&q=80&w=800"
    }
  ]
};
