import Image from "next/image";
import { Check, Users, BookOpen, Zap, Award, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(244,140,6,0.2),transparent_60%)]"></div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="flex flex-col space-y-4">
              <div className="inline-flex items-center rounded-full border border-orange-200/20 bg-orange-100/10 px-3 py-1 text-sm text-orange-400">
                Our Story
              </div>
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                Reimagining <span className="text-[#F48C06]">Learning</span> &{" "}
                <span className="text-[#F48C06]">Collaboration</span>
              </h1>
              <p className="max-w-[600px] text-slate-300 md:text-xl">
                ሀ ሁ is bridging the gap between education and professional
                growth, empowering people to develop skills, deliver projects,
                and achieve their goals effortlessly.
              </p>
              <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 mt-2">
                <Button size="lg" className="bg-[#F48C06] hover:bg-[#E67E00]">
                  Join Our Community
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-600 text-black hover:bg-slate-700 hover:text-white"
                >
                  Explore Courses
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -left-8 -top-8 h-72 w-72 rounded-full bg-[#F48C06]/20 blur-3xl"></div>
              <div className="relative rounded-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm overflow-hidden shadow-xl">
                <div className="grid grid-cols-2 gap-px bg-slate-700/20">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="aspect-square p-6 backdrop-blur-sm">
                      <div className="flex h-full w-full items-center justify-center rounded-xl bg-slate-800/50 p-4">
                        {i === 0 && (
                          <Users className="h-12 w-12 text-[#F48C06]" />
                        )}
                        {i === 1 && (
                          <BookOpen className="h-12 w-12 text-indigo-400" />
                        )}
                        {i === 2 && <Zap className="h-12 w-12 text-sky-400" />}
                        {i === 3 && (
                          <Award className="h-12 w-12 text-emerald-400" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm">
              Our Mission
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Bridging Education and Professional Growth
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              ሀ ሁ is an innovative e-learning platform and collaborative
              workspace designed to empower educators, professionals, and
              businesses. Our platform provides a seamless environment where
              instructors can create and manage online courses, store course
              materials, assign quizzes and exams, track progress, and provide
              feedback—all in one place.
            </p>
          </div>

          <div className="mt-16">
            <Tabs defaultValue="platform" className="w-full">
              <div className="flex justify-center">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="platform">Platform</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="workspace">Workspace</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="platform" className="mt-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="flex flex-col items-center p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F48C06]/10 text-[#F48C06]">
                        <Users className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 text-xl font-bold">
                        Collaborative Environment
                      </h3>
                      <p className="mt-2 text-center text-muted-foreground">
                        A space where teams can work together efficiently,
                        sharing resources and ideas.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="flex flex-col items-center p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 text-xl font-bold">
                        Comprehensive Courses
                      </h3>
                      <p className="mt-2 text-center text-muted-foreground">
                        High-quality educational content designed by industry
                        experts.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="flex flex-col items-center p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <Zap className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 text-xl font-bold">
                        Innovative Tools
                      </h3>
                      <p className="mt-2 text-center text-muted-foreground">
                        Cutting-edge features that enhance learning and
                        productivity.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="education" className="mt-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg bg-muted p-6">
                    <h3 className="text-2xl font-bold">For Instructors</h3>
                    <ul className="mt-4 space-y-2">
                      {[
                        "Create and manage courses",
                        "Track student progress",
                        "Provide feedback",
                        "Design assessments",
                      ].map((item) => (
                        <li key={item} className="flex items-start">
                          <Check className="mr-2 h-5 w-5 text-[#F48C06]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg bg-muted p-6">
                    <h3 className="text-2xl font-bold">For Students</h3>
                    <ul className="mt-4 space-y-2">
                      {[
                        "Access quality content",
                        "Learn at your own pace",
                        "Get real-time feedback",
                        "Connect with experts",
                      ].map((item) => (
                        <li key={item} className="flex items-start">
                          <Check className="mr-2 h-5 w-5 text-[#F48C06]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="workspace" className="mt-8">
                <div className="relative overflow-hidden rounded-xl border bg-background p-6 md:p-10">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h3 className="text-2xl font-bold">Beyond Education</h3>
                      <p className="mt-2 text-muted-foreground">
                        ሀ ሁ also serves as a dynamic workspace where teams and
                        clients can collaborate efficiently.
                      </p>
                      <ul className="mt-6 space-y-4">
                        {[
                          "Project management and tracking",
                          "Client collaboration portals",
                          "Resource sharing and version control",
                          "Integrated communication tools",
                        ].map((item) => (
                          <li key={item} className="flex items-start">
                            <Check className="mr-2 h-5 w-5 text-[#F48C06]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="relative h-64 w-64">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F48C06] to-orange-400 opacity-20 blur-3xl"></div>
                        <div className="relative flex h-full w-full items-center justify-center rounded-full border border-orange-200/20 bg-background">
                          <Users className="h-24 w-24 text-[#F48C06]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="mx-auto text-center md:max-w-[58rem]">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Meet the passionate people behind ሀ ሁ who are dedicated to
              revolutionizing education and collaboration.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-xl bg-background p-6 shadow-lg w-72 mx-auto mt-7">
            <div className="flex flex-col items-center">
              <div className="relative h-24 w-24 overflow-hidden rounded-full">
                <Image
                  src="/image/habte.JPG"
                  alt="habte"
                  className="object-cover"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="mt-4 text-xl font-bold">Habtewolde Bizuayhu</h3>
              <p className="text-muted-foreground">Founder & CEO</p>
              {/* social media links */}
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-7 md:grid-cols-4">
            {[
              {
                name: "Mubarek Hassen ",
                role: "Web Developer",
                image: "/image/mu-img.jpg",
              },
              {
                name: "Awol Ibrahim",
                role: "App Developer",
                image: "/image/diddy.JPG",
              },
              {
                name: "Nahom T/yohanes",
                role: "Promotion and Advertising manager",
                image: "/image/nahi.jpg",
              },
              {
                name: "Fuad",
                role: "Marketing Manager",
                image: "/image/fuadd-img.jpg",
              },
            ].map((person) => (
              <div
                key={person.name}
                className="relative overflow-hidden rounded-xl bg-background p-7  shadow-lg"
              >
                <div className="flex flex-col items-center">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full">
                    <Image
                      src={person.image}
                      alt={person.name}
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{person.name}</h3>
                  <p className="text-muted-foreground">{person.role}</p>
                  {/* social media links */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid gap-16 md:grid-cols-2 lg:gap-24">
            <div>
              <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm">
                Our Values
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                What Drives Us Forward
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Our values guide every decision we make and shape the experience
                we create for our users.
              </p>
              <div className="mt-8 space-y-8">
                {[
                  {
                    title: "Innovation",
                    description:
                      "We constantly push boundaries to create cutting-edge solutions that meet evolving needs.",
                  },
                  {
                    title: "Accessibility",
                    description:
                      "We believe quality education and collaboration tools should be accessible to everyone.",
                  },
                  {
                    title: "Excellence",
                    description:
                      "We are committed to delivering the highest quality in everything we do.",
                  },
                ].map((value) => (
                  <div key={value.title} className="rounded-lg bg-muted p-6">
                    <h3 className="text-xl font-bold">{value.title}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-4 top-0 h-72 w-72 rounded-full bg-[#F48C06]/20 blur-3xl"></div>
              <div className="relative h-full rounded-2xl border bg-background p-10">
                <blockquote className="space-y-2">
                  <p className="text-xl text-muted-foreground">
                    &quot;Our goal is to bridge the gap between learning and
                    professional growth, ensuring that individuals and
                    organizations have the resources to develop skills, deliver
                    projects, and achieve their goals effortlessly.&quot;
                  </p>
                  <footer className="pt-4">
                    <div className="flex items-center">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full">
                        <Image
                         src="/image/habte.JPG"
                          alt="Habte"
                          className="object-cover"
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-semibold">Habtewold</div>
                        <div className="text-sm text-muted-foreground">
                          Founder & CEO
                        </div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full overflow-hidden bg-slate-900 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,140,6,0.15),transparent_70%)]"></div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Join the ሀ ሁ Revolution
            </h2>
            <p className="mt-4 max-w-[700px] text-slate-300 md:text-xl">
              Whether you&apos;re an educator, a freelancer, or a business
              looking to streamline operations, ሀ ሁ offers the tools you need to
              succeed.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-[#F48C06] hover:bg-[#E67E00]">
                Get Started Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-700 text-black hover:bg-slate-800 hover:text-white"
              >
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
