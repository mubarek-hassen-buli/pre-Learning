import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  BookOpen,
  Clock,
  Download,
  Globe,
  MessageSquare,
  Share2,
  ShoppingCart,
  Star,
  Users,
  Video,
  Calendar,
} from "lucide-react";
// import { } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { featuredCourses } from "@/lib/data";
import { allCourses } from "@/lib/data";

export default function CoursePage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the course by ID from an API
  const course = allCourses.find((c) => c.id === params.id) || allCourses[0];

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Link
                    href="/courses"
                    className="inline-flex items-center text-sm font-medium text-primary mb-2"
                  >
                    <ArrowLeft className="mr-1 h-4 w-4" />
                    Back to Courses
                  </Link>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    {course.title}
                  </h1>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    {course.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{course.level}</Badge>
                  {course.categories.map((category, index) => (
                    <Badge key={index} variant="outline">
                      {category}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center">
                    <Calendar className="text-blue-500 mr-1" size={24} />
                    <h1>Last updated 1/2025</h1>
                  </div>
                  <div className="flex items-center">
                    <Star className="mr-1 h-4 w-4 fill-amber-400 text-amber-400" />
                    <span>
                      {course.rating} ({course.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-1 h-4 w-4" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    <span>{course.duration} total</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={course.instructorPhoto}
                    alt={course.instructor}
                    className="h-10 w-10 rounded-full object-cover"
                    width={70}
                    height={70}
                  />
                  <div>
                    <p className="text-sm font-medium">Created by</p>
                    <p className="text-sm text-muted-foreground">
                      {course.instructor}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full max-w-md overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={course.thumbnail || "/placeholder.svg"}
                      alt={course.title}
                      className="h-full w-full object-cover"
                      width={500}
                      height={500}
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-baseline justify-between">
                      <div className="text-3xl font-bold">
                        {course.price.toFixed(2)}
                      </div>
                      <div className="text-sm text-muted-foreground line-through">
                        {(course.price * 1.4).toFixed(2)}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <Button className="w-full" size="lg">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                      <Button variant="outline" className="w-full" size="lg">
                        Buy Now
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">
                        30-Day Money-Back Guarantee. Full Lifetime Access.
                      </p>
                    </div>
                    <div className="mt-6 space-y-4">
                      <div className="flex justify-between text-sm">
                        <span>This course includes:</span>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <Video className="mr-2 h-4 w-4 text-muted-foreground" />
                          {course.duration} on-demand video
                        </li>
                        <li className="flex items-center">
                          <Download className="mr-2 h-4 w-4 text-muted-foreground" />
                          20 downloadable resources
                        </li>
                        <li className="flex items-center">
                          <MessageSquare className="mr-2 h-4 w-4 text-muted-foreground" />
                          Full instructor support
                        </li>
                        <li className="flex items-center">
                          <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
                          Access on mobile and TV
                        </li>
                        <li className="flex items-center">
                          <BookOpen className="mr-2 h-4 w-4 text-muted-foreground" />
                          Certificate of completion
                        </li>
                      </ul>
                    </div>
                    <div className="mt-6 flex items-center justify-center gap-4">
                      <Button variant="ghost" size="sm">
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                      </Button>
                      <Button variant="ghost" size="sm">
                        Gift this course
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full max-w-md grid grid-cols-3 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-8">
                <div>
                  <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-3">
                      What you&apos;ll learn
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {course.whatYouWillLearn.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <span className="text-green-500 text-xl">✔</span>
                          <span className="text-lg">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    Course Description
                  </h2>
                  <div className="prose max-w-none">
                    <p>
                      This comprehensive course is designed to take you from
                      beginner to professional web developer. Whether you have
                      never written a line of code before or are looking to
                      upgrade your skills, this course covers everything you
                      need to know to build modern, responsive websites and web
                      applications.
                    </p>
                    <p>
                      Starting with the fundamentals of HTML and CSS,
                      you&apos;ll progress through JavaScript, React, Node.js,
                      and more. By the end of the course, you&apos;ll have built
                      several real-world projects that you can add to your
                      portfolio and use to land your dream job.
                    </p>
                    <p>
                      The course is constantly updated with new content,
                      projects, and modules to keep up with the latest web
                      development trends and best practices. You&apos;ll also
                      get lifetime access to all course materials, including
                      future updates.
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      A computer (Windows, Mac, or Linux) with an internet
                      connection
                    </li>
                    <li>
                      No prior programming experience needed - we&apos;ll teach
                      you everything from scratch
                    </li>
                    <li>A willingness to learn and practice</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="curriculum" className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">Course Content</h2>
                    <div className="text-sm text-muted-foreground">
                      63 lectures • {course.duration} total length
                    </div>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="section-1">
                      <AccordionTrigger className="text-base font-medium">
                        Section 1: Introduction to Web Development
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
                            <Video className="h-4 w-4" />
                            <span className="text-sm">
                              1. Welcome to the Course
                            </span>
                            <span className="ml-auto text-xs text-muted-foreground">
                              5:42
                            </span>
                          </div>
                          <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
                            <Video className="h-4 w-4" />
                            <span className="text-sm">
                              2. Setting Up Your Development Environment
                            </span>
                            <span className="ml-auto text-xs text-muted-foreground">
                              12:18
                            </span>
                          </div>
                          <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
                            <Video className="h-4 w-4" />
                            <span className="text-sm">
                              3. How the Web Works
                            </span>
                            <span className="ml-auto text-xs text-muted-foreground">
                              8:24
                            </span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="section-2">
                      <AccordionTrigger className="text-base font-medium">
                        Section 2: HTML Fundamentals
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
                            <Video className="h-4 w-4" />
                            <span className="text-sm">
                              4. Introduction to HTML
                            </span>
                            <span className="ml-auto text-xs text-muted-foreground">
                              10:15
                            </span>
                          </div>
                          <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
                            <Video className="h-4 w-4" />
                            <span className="text-sm">
                              5. HTML Document Structure
                            </span>
                            <span className="ml-auto text-xs text-muted-foreground">
                              14:32
                            </span>
                          </div>
                          <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
                            <Video className="h-4 w-4" />
                            <span className="text-sm">
                              6. Working with Text Elements
                            </span>
                            <span className="ml-auto text-xs text-muted-foreground">
                              11:47
                            </span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="section-3">
                      <AccordionTrigger className="text-base font-medium">
                        Section 3: CSS Styling
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
                            <Video className="h-4 w-4" />
                            <span className="text-sm">
                              7. Introduction to CSS
                            </span>
                            <span className="ml-auto text-xs text-muted-foreground">
                              9:58
                            </span>
                          </div>
                          <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
                            <Video className="h-4 w-4" />
                            <span className="text-sm">
                              8. Selectors and Properties
                            </span>
                            <span className="ml-auto text-xs text-muted-foreground">
                              16:24
                            </span>
                          </div>
                          <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
                            <Video className="h-4 w-4" />
                            <span className="text-sm">
                              9. Box Model and Layout
                            </span>
                            <span className="ml-auto text-xs text-muted-foreground">
                              13:05
                            </span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">Student Reviews</h2>
                    <div className="text-sm text-muted-foreground">
                      {course.reviewCount} reviews
                    </div>
                  </div>
                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl font-bold">
                          {course.rating}
                        </div>
                        <div className="space-y-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${
                                  i < Math.floor(course.rating)
                                    ? "fill-amber-400 text-amber-400"
                                    : "text-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Course Rating
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="text-sm">5 stars</div>
                          <Progress value={78} className="h-2 flex-1" />
                          <div className="text-sm text-muted-foreground">
                            78%
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-sm">4 stars</div>
                          <Progress value={15} className="h-2 flex-1" />
                          <div className="text-sm text-muted-foreground">
                            15%
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-sm">3 stars</div>
                          <Progress value={5} className="h-2 flex-1" />
                          <div className="text-sm text-muted-foreground">
                            5%
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-sm">2 stars</div>
                          <Progress value={1} className="h-2 flex-1" />
                          <div className="text-sm text-muted-foreground">
                            1%
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-sm">1 star</div>
                          <Progress value={1} className="h-2 flex-1" />
                          <div className="text-sm text-muted-foreground">
                            1%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            alt="User"
                            className="h-10 w-10 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-medium">Sarah Johnson</div>
                            <div className="flex text-muted-foreground">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-4 w-4 fill-amber-400 text-amber-400"
                                />
                              ))}
                              <span className="ml-2 text-xs">2 weeks ago</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm">
                          This course exceeded my expectations! The instructor
                          explains complex concepts in a way that&apos;s easy to
                          understand, and the projects are practical and
                          relevant. I&apos;ve already landed a junior developer
                          position thanks to the skills I learned in this
                          course.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            alt="User"
                            className="h-10 w-10 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-medium">Michael Chen</div>
                            <div className="flex text-muted-foreground">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < 4
                                      ? "fill-amber-400 text-amber-400"
                                      : "text-muted-foreground"
                                  }`}
                                />
                              ))}
                              <span className="ml-2 text-xs">1 month ago</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm">
                          Great course with comprehensive content. The only
                          reason I&apos;m giving 4 stars instead of 5 is that
                          some of the sections could use more exercises for
                          practice. Otherwise, it&apos;s an excellent resource
                          for learning web development.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  );
}
