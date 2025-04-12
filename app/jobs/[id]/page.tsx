import Link from "next/link";
import {
  ArrowLeft,
  Briefcase,
  Building,
  Clock,
  DollarSign,
  Globe,
  MapPin,
  Share2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { featuredJobs } from "@/lib/data";
import JobCard from "@/components/job-card";

export default function JobPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the job by ID from an API
  const job = featuredJobs.find((j) => j.id === params.id) || featuredJobs[0];

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Link
                    href="/jobs"
                    className="inline-flex items-center text-sm font-medium text-primary mb-2"
                  >
                    <ArrowLeft className="mr-1 h-4 w-4" />
                    Back to Jobs
                  </Link>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    {job.title}
                  </h1>
                  <div className="flex items-center gap-2">
                    <img
                      src={job.companyLogo || "/placeholder.svg"}
                      alt={job.company}
                      className="h-8 w-8 rounded-md object-cover"
                    />
                    <p className="text-xl font-medium">{job.company}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center">
                    <MapPin className="mr-1 h-4 w-4 text-muted-foreground" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="mr-1 h-4 w-4 text-muted-foreground" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="mr-1 h-4 w-4 text-muted-foreground" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                    <span>Posted {job.postedAt}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full">
                  <CardHeader className="pb-3">
                    <h3 className="text-lg font-semibold">
                      Apply for this position
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Button className="w-full" size="lg">
                        Apply Now
                      </Button>
                      <Button variant="outline" className="w-full" size="lg">
                        <Share2 className="mr-2 h-4 w-4" />
                        Share Job
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">
                        You can also save this job to apply later
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full max-w-md grid grid-cols-3 mb-8">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="company">Company</TabsTrigger>
                <TabsTrigger value="related">Related Jobs</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Job Description</h2>
                  <div className="prose max-w-none">
                    <p>{job.description}</p>
                    <h3>Responsibilities:</h3>
                    <ul>
                      <li>
                        Design and implement user interfaces for web
                        applications
                      </li>
                      <li>
                        Collaborate with backend developers to integrate
                        frontend with APIs
                      </li>
                      <li>
                        Optimize applications for maximum speed and scalability
                      </li>
                      <li>Implement responsive design for mobile devices</li>
                      <li>
                        Maintain code quality, organization, and automatization
                      </li>
                    </ul>
                    <h3>Requirements:</h3>
                    <ul>
                      <li>
                        3+ years of experience with React.js and modern
                        JavaScript
                      </li>
                      <li>Strong proficiency in TypeScript</li>
                      <li>
                        Experience with state management libraries (Redux,
                        Context API)
                      </li>
                      <li>
                        Knowledge of modern frontend build pipelines and tools
                      </li>
                      <li>
                        Understanding of server-side rendering and its benefits
                      </li>
                      <li>
                        Experience with CSS preprocessors and CSS-in-JS
                        libraries
                      </li>
                    </ul>
                    <h3>Benefits:</h3>
                    <ul>
                      <li>Competitive salary and equity package</li>
                      <li>Flexible work hours and remote work options</li>
                      <li>Health, dental, and vision insurance</li>
                      <li>401(k) with company match</li>
                      <li>Professional development budget</li>
                      <li>Paid time off and parental leave</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="company" className="space-y-8">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={job.companyLogo || "/placeholder.svg"}
                      alt={job.company}
                      className="h-16 w-16 rounded-md object-cover"
                    />
                    <div>
                      <h2 className="text-2xl font-bold">{job.company}</h2>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Globe className="mr-1 h-4 w-4" />
                        <a href="#" className="hover:underline">
                          https://www.techcorp.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="prose max-w-none">
                    <p>
                      TechCorp is a leading technology company specializing in
                      enterprise software solutions. Founded in 2010, we&apos;ve
                      grown to over 500 employees across 12 countries, serving
                      clients in various industries including finance,
                      healthcare, and retail.
                    </p>
                    <p>
                      Our mission is to empower businesses with innovative
                      technology solutions that drive growth and efficiency.
                      We&apos;re committed to creating a diverse and inclusive
                      workplace where everyone can thrive and contribute to our
                      success.
                    </p>
                    <h3>Company Culture</h3>
                    <p>
                      At TechCorp, we value collaboration, innovation, and
                      continuous learning. We believe in work-life balance and
                      provide our employees with the flexibility they need to
                      succeed both professionally and personally.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <Card>
                        <CardContent className="p-4 flex flex-col items-center text-center">
                          <Building className="h-8 w-8 mb-2 text-primary" />
                          <h4 className="font-semibold">Company Size</h4>
                          <p className="text-sm text-muted-foreground">
                            501-1000 employees
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4 flex flex-col items-center text-center">
                          <Globe className="h-8 w-8 mb-2 text-primary" />
                          <h4 className="font-semibold">Industry</h4>
                          <p className="text-sm text-muted-foreground">
                            Enterprise Software
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4 flex flex-col items-center text-center">
                          <MapPin className="h-8 w-8 mb-2 text-primary" />
                          <h4 className="font-semibold">Headquarters</h4>
                          <p className="text-sm text-muted-foreground">
                            San Francisco, CA
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="related" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Similar Jobs</h2>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {featuredJobs
                      .filter((j) => j.id !== job.id)
                      .map((relatedJob) => (
                        <JobCard key={relatedJob.id} job={relatedJob} />
                      ))}
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
