export type Tool = {
  name: string
  slug: string
  description: string
  image?: string
}

export type Domain = {
  name: string
  slug: string
  description: string
  image?: string
  tools: Tool[]
}

export const resourceHubData: Domain[] = [
  {
    name: "Full Stack",
    slug: "full-stack",
    description: "Master frontend, backend, and database technologies.",
    tools: [
      { name: "TypeScript", slug: "typescript", description: "Typed JavaScript at any scale." },
      { name: "HTML", slug: "html", description: "The standard markup language for documents designed to be displayed in a web browser." },
      { name: "MongoDB", slug: "mongodb", description: "The most popular database for modern apps." },
      { name: "React", slug: "react", description: "A JavaScript library for building user interfaces." },
      { name: "Node.js", slug: "nodejs", description: "JavaScript runtime built on Chrome's V8 JavaScript engine." },
    ]
  },
  {
    name: "ML & DL",
    slug: "ml-dl",
    description: "Dive into Machine Learning and Deep Learning.",
    tools: [
       { name: "Python", slug: "python", description: "The language of choice for data science and machine learning." },
       { name: "TensorFlow", slug: "tensorflow", description: "An end-to-end open source platform for machine learning." },
       { name: "PyTorch", slug: "pytorch", description: "An open source machine learning framework." }
    ]
  },
  {
    name: "Design",
    slug: "design",
    description: "Create beautiful and functional user experiences.",
    tools: [
        { name: "Figma", slug: "figma", description: "The collaborative interface design tool." },
        { name: "Adobe XD", slug: "adobe-xd", description: "Fast & powerful UI/UX design solution." }
    ]
  },
    {
    name: "Cybersecurity",
    slug: "cybersecurity",
    description: "Protect systems, networks, and programs from digital attacks.",
    tools: [
        { name: "Kali Linux", slug: "kali", description: "Advanced Penetration Testing Distribution." },
        { name: "Wireshark", slug: "wireshark", description: "The world's foremost network protocol analyzer." }
    ]
  }
]
