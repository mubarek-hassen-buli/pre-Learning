export interface Course {
  id: string
  title: string
  description: string
  instructor: string
  thumbnail: string
  rating: number
  reviewCount: number
  students: string
  duration: string
  level: "Beginner" | "Intermediate" | "Advanced"
  price: number
  categories: string[]
  whatYouWillLearn:string[]
  instructorPhoto:string
}
export interface featuredCourse{
  id: string
  title: string
  description: string
  instructor: string
  thumbnail: string
  rating: number
  reviewCount: number
  students: string
  duration: string
  level: "Beginner" | "Intermediate" | "Advanced"
  price: number
  categories: string[]
}

export interface Job {
  id: string
  title: string
  company: string
  companyLogo: string
  location: string
  type: string
  salary: string
  description: string
  skills: string[]
  postedAt: string
}

