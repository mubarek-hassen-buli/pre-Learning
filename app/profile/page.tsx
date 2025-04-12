import type { Metadata } from "next"
import { BookOpen, Briefcase, Edit, GraduationCap, Mail, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Profile | LearnWorks",
  description: "View and edit your LearnWorks profile",
}

export default function ProfilePage() {
  // In a real app, you would fetch this data from your API
  const user = {
    name: "John Doe",
    email: "john@example.com",
    location: "New York, USA",
    bio: "Passionate learner and aspiring web developer",
    avatar: "/placeholder.svg?height=100&width=100",
    coursesEnrolled: 4,
    coursesCompleted: 2,
    certificatesEarned: 2,
    jobApplications: 7,
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <Button>
          <Edit className="mr-2 h-4 w-4" /> Edit Profile
        </Button>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <img
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
                className="rounded-full h-20 w-20 object-cover"
              />
              <div>
                <CardTitle>{user.name}</CardTitle>
                <CardDescription>{user.email}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{user.location}</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{user.email}</span>
              </div>
              <div>
                <h3 className="font-medium mb-2">Bio</h3>
                <p className="text-sm text-muted-foreground">{user.bio}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Learning Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="courses">
              <TabsList className="mb-4">
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="certificates">Certificates</TabsTrigger>
                <TabsTrigger value="jobs">Job Applications</TabsTrigger>
              </TabsList>
              <TabsContent value="courses">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <BookOpen className="mr-2 h-4 w-4 text-primary" />
                      <span className="font-medium">Courses Enrolled</span>
                    </div>
                    <span className="text-2xl font-bold">{user.coursesEnrolled}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <GraduationCap className="mr-2 h-4 w-4 text-primary" />
                      <span className="font-medium">Courses Completed</span>
                    </div>
                    <span className="text-2xl font-bold">{user.coursesCompleted}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Overall Progress</span>
                      <span>{Math.round((user.coursesCompleted / user.coursesEnrolled) * 100)}%</span>
                    </div>
                    <Progress value={(user.coursesCompleted / user.coursesEnrolled) * 100} className="h-2" />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="certificates">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <GraduationCap className="mr-2 h-4 w-4 text-primary" />
                      <span className="font-medium">Certificates Earned</span>
                    </div>
                    <span className="text-2xl font-bold">{user.certificatesEarned}</span>
                  </div>
                  {/* Add a list of earned certificates here */}
                </div>
              </TabsContent>
              <TabsContent value="jobs">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Briefcase className="mr-2 h-4 w-4 text-primary" />
                      <span className="font-medium">Job Applications</span>
                    </div>
                    <span className="text-2xl font-bold">{user.jobApplications}</span>
                  </div>
                  {/* Add a list of job applications here */}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

