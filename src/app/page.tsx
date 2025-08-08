
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Briefcase,
  GraduationCap,
  Code,
  Link as LinkIcon,
  ChevronRight,
  Facebook,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { 
  greeting, 
  socialMediaLinks, 
  skills,
  skillsData,
  educationInfo, 
  workExperiences,
  bigProjects,
  contactInfo
} from "@/lib/portfolio-data";

export default function Home() {

  const allExperience = [...workExperiences, ...educationInfo];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section id="hero" className="w-full py-24 md:py-32 lg:py-40 text-center">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                {greeting.username}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                {greeting.title}
              </h2>
              <p className="text-muted-foreground md:text-xl">
                {greeting.subTitle}
              </p>
              <div className="flex justify-center gap-4">
                <Button asChild size="lg">
                  <a href="#contact">
                    Get in Touch
                    <Mail className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="#portfolio">
                    My Work
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-16 md:py-24 bg-secondary">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter md:text-4xl font-headline">About Me</h2>
            <div className="mx-auto grid max-w-5xl items-start gap-12 lg:grid-cols-3">
              <div className="lg:col-span-1 flex flex-col items-center text-center lg:items-start lg:text-left">
                <Image
                  src="../img/profile-picture.jpeg"
                  alt={greeting.username}
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-primary shadow-lg mb-6"
                  data-ai-hint="professional portrait"
                />
                <div className="text-muted-foreground space-y-2">
                  {skillsData.map((skill, index) => (
                    <p key={index}>{skill}</p>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2 space-y-8">
                <div>
                    <h3 className="text-2xl font-semibold mb-4 flex items-center"><Briefcase className="mr-3 h-6 w-6 text-primary" />Experience & Education</h3>
                    <div className="relative space-y-6 before:absolute before:left-[11px] before:top-0 before:h-full before:w-0.5 before:bg-border">
                        {allExperience.map((exp, index) => (
                          <div key={index} className="relative pl-8">
                              <div className="absolute left-0 top-0.5 h-6 w-6 rounded-full bg-primary border-4 border-secondary flex items-center justify-center">
                                  <exp.icon className="h-3 w-3 text-primary-foreground" />
                              </div>
                              <p className="font-semibold text-lg">{exp.role}</p>
                              <p className="text-sm text-muted-foreground">{exp.company} • {exp.period}</p>
                              <p className="mt-1">{exp.description}</p>
                          </div>
                        ))}
                    </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 flex items-center"><Code className="mr-3 h-6 w-6 text-primary" />Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-base px-3 py-1 bg-background">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter md:text-4xl font-headline">My Portfolio</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {bigProjects.map((project, index) => (
                <Card key={index} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:shadow-primary/20">
                  <CardHeader>
                    <div className="aspect-video overflow-hidden rounded-md mb-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                        data-ai-hint={project.aiHint}
                      />
                    </div>
                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-start gap-4">
                    <Button asChild variant="outline">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </a>
                    </Button>
                    <Button asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <LinkIcon className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-16 md:py-24 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tighter md:text-4xl font-headline">{contactInfo.title}</h2>
              <p className="mb-8 text-muted-foreground">
                {contactInfo.subtitle}
              </p>
              <Button asChild size="lg" className="mb-8">
                <a href={`mailto:${contactInfo.email_address}`}>
                  <Mail className="mr-2 h-5 w-5" /> Say Hello
                </a>
              </Button>
              <div className="flex justify-center gap-6">
                <a href={socialMediaLinks.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary"><Github className="h-7 w-7" /></a>
                <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary"><Linkedin className="h-7 w-7" /></a>
                <a href={socialMediaLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary"><Facebook className="h-7 w-7" /></a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
