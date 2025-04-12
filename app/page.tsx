"use client";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseCard from "@/components/course-card";
import JobCard from "@/components/job-card";
import { featuredCourses, featuredJobs } from "@/lib/data";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import CustomerServiceModal from "@/components/CustomerServiceModal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col">
      <CustomerServiceModal open={isOpen} onOpenChange={setIsOpen} />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Navigation />
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-8 bg-[#FFF2E1]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    <span className="text-[#F48C06]"> Learn </span> Skills &
                    Find Work <span>Opportunities</span>
                  </h1>
                  <p className="max-w-[600px] text-[#464646] md:text-sm">
                    Our platform combines high-quality courses with real job
                    opportunities. Learn, grow, and earn all in one place.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/courses">
                    <Button size="lg" className="w-full">
                      Explore Courses
                    </Button>
                  </Link>
                  <Link href="/jobs">
                    <Button size="lg" variant="outline" className="w-full">
                      Find Jobs
                    </Button>
                  </Link>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full"
                    onClick={() => setIsOpen(true)}
                  >
                    Customer Service
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/image/home.png"
                  alt="Learning platform hero"
                  width={800}
                  height={800}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-[#F5F5FC]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  What are you looking for?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Search for courses to learn new skills or jobs to apply your
                  expertise
                </p>
              </div>
              <div className="w-full max-w-2xl">
                <Tabs defaultValue="courses" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="courses">Courses</TabsTrigger>
                    <TabsTrigger value="jobs">Jobs</TabsTrigger>
                  </TabsList>
                  <TabsContent value="courses" className="mt-4">
                    <div className="flex w-full max-w-sm items-center space-x-2">
                      <Input
                        type="text"
                        placeholder="Search for courses..."
                        className="flex-1"
                      />
                      <Button type="submit">
                        <Search className="h-4 w-4 mr-2" />
                        Search
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="jobs" className="mt-4">
                    <div className="flex w-full max-w-sm items-center space-x-2">
                      <Input
                        type="text"
                        placeholder="Search for jobs..."
                        className="flex-1"
                      />
                      <Button type="submit">
                        <Search className="h-4 w-4 mr-2" />
                        Search
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center justify-between w-full">
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
                  Featured Courses
                </h2>
                <Link
                  href="/courses"
                  className="flex items-center text-sm font-medium text-primary"
                >
                  View all courses <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {featuredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center justify-between w-full">
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
                  Latest Jobs
                </h2>
                <Link
                  href="/jobs"
                  className="flex items-center text-sm font-medium text-primary"
                >
                  View all jobs <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featuredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-[#FFF2E1] ">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-[#2F327D]">
                    Become an Instructor
                  </h2>
                  <p className="max-w-[600px] md:text-sm/relaxed text-[#464646]">
                    Share your knowledge with millions of students and earn
                    money while making an impact.
                  </p>
                </div>
                <div>
                  <Link href="/teach">
                    <Button variant="default" size="lg">
                      Start Teaching Today
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-[#2F327D]">
                    Hire Skilled Professionals
                  </h2>
                  <p className="max-w-[600px] md:text-sm/relaxed text-[#464646]">
                    Post jobs and connect with talented professionals who have
                    verified skills from our courses.
                  </p>
                </div>
                <div>
                  <Link href="/hire">
                    <Button variant="default" size="lg">
                      Post a Job
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0 bg-black">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left md:ml-4">
            © 2023 LearnWorks. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/terms"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
