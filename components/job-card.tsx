import Link from "next/link"
import { Clock, DollarSign, MapPin } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import type { Job } from "@/lib/types"

interface JobCardProps {
  job: Job
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="p-4">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-md overflow-hidden bg-muted flex items-center justify-center">
            <img src={job.companyLogo || "/placeholder.svg"} alt={job.company} className="h-full w-full object-cover" />
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold leading-tight">{job.title}</h3>
            <p className="text-sm text-muted-foreground">{job.company}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex flex-wrap gap-2 mb-4">
          {job.skills.map((skill, index) => (
            <Badge key={index} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-3">{job.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col gap-4">
        <div className="flex justify-between w-full text-sm text-muted-foreground">
          <div className="flex items-center">
            <MapPin className="mr-1 h-4 w-4" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="mr-1 h-4 w-4" />
            <span>{job.salary}</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            <span>{job.type}</span>
          </div>
        </div>
        <Link href={`/jobs/${job.id}`} className="w-full">
          <Button className="w-full">Apply Now</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

