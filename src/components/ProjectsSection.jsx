import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import AceAI from "../utils/AceAI.png";
import CodeReviewAI from "../utils/CodeReviewAI.png";
import devTinder from "../utils/devTinder.png";

const projects = [
  {
    id: 1,
    title: "AceAI",
    description:
      "AceAI is an AI-powered interview preparation platform that helps users practice interviews, improve their skills, and prepare confidently for technical roles.",
    image: AceAI,
    tags: [
      "React.js",
      "SCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "GenAI",
      "Amazon Web Services",
    ],
    demoUrl: "https://aceai.site/register",
    githubUrl: "https://github.com/Citu388/AceAI",
  },
  {
    id: 2,
    title: "devTinder",
    description:
      "DevTinder is a developer networking platform that helps developers discover, connect, and collaborate with others based on their skills, interests, and projects.",
    image: devTinder,
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TailwindCSS",
      "Amazon Web Services",
      "Websocket",
    ],
    demoUrl: "https://tinder-dev.com/",
    githubUrl: "https://github.com/Citu388/devTinder-web",
  },
  {
    id: 3,
    title: "CodeReviewAI",
    description:
      "CodeReviewAI is an AI-powered code review platform that analyzes code, identifies potential issues, and provides actionable suggestions to improve code quality and maintainability.",
    image: CodeReviewAI,
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "Gemini API",
      "GenAI",
      "CSS5",
      "Amazon Web Services",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/Citu388/codereviewai",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Citu388"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
