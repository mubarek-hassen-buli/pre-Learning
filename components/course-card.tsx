"use client";

import Link from "next/link";
import { Clock, ShoppingCart, Star, Users } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import type { Course } from "@/lib/types";
import { useCart } from "@/contexts/cart-context";
import { useToast } from "@/components/ui/use-toast";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  let addToCart: (course: Course) => void = () => {};

  try {
    const cart = useCart();
    addToCart = cart.addToCart;
  } catch (error) {
    console.error("Error using cart context:", error);
  }

  const { toast } = useToast();

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    try {
      addToCart(course);
      toast({
        title: "Added to cart",
        description: `${course.title} has been added to your cart.`,
      });
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast({
        title: "Error",
        description: "Could not add item to cart",
        variant: "destructive",
      });
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <Link href={`/courses/${course.id}`}>
        <div className=" w-full overflow-hidden">
          {/* <img
            src={course.thumbnail || "/placeholder.svg"}
            alt={course.title}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          /> */}
          <Image
            src={course.thumbnail || "/placeholder.svg"}
            alt={course.title}
            className="h-full w-full object-cover transition-transform hover:scale-105"
            width={300}
            height={300}
          />
        </div>
        <CardHeader className="p-4">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h3 className="font-semibold leading-tight line-clamp-2">
                {course.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-1">
                {course.instructor}
              </p>
            </div>
            <Badge
              variant={
                course.level === "Beginner"
                  ? "secondary"
                  : course.level === "Intermediate"
                  ? "default"
                  : "destructive"
              }
            >
              {course.level}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {course.description}
          </p>
        </CardContent>
      </Link>
      <CardFooter className="flex justify-between p-4 pt-0">
        <div className="flex items-center text-sm text-muted-foreground">
          <Star className="mr-1 h-4 w-4 fill-amber-400 text-amber-400" />
          <span>
            {course.rating} ({course.reviewCount})
          </span>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="mr-1 h-4 w-4" />
            <span>{course.students}</span>
          </div>
        </div>
      </CardFooter>
      <CardFooter className="p-4 pt-0">
        <div className="flex justify-between items-center w-full">
          <span className="text-lg font-bold">${course.price.toFixed(2)}</span>
          <Button onClick={handleAddToCart} disabled={isAddingToCart}>
            {isAddingToCart ? (
              <span>Adding...</span>
            ) : (
              <>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </>
            )}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
