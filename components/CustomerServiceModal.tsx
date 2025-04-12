"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const services = [
  {
    title: "Graphic Design",
    description: "Brand identity, illustrations, and visual content creation",
    icon: "🎨",
    path: "/services/graphic-design",
  },
  {
    title: "Web Development",
    description: "Custom websites and web applications",
    icon: "💻",
    path: "/services/web-development",
  },
  {
    title: "Software Development",
    description: "Custom software solutions and applications",
    icon: "⚙️",
    path: "/services/software-development",
  },
  {
    title: "Digital Marketing",
    description: "SEO, social media, and online advertising",
    icon: "📱",
    path: "/services/digital-marketing",
  },
  {
    title: "Content Creation",
    description: "Engaging content for your brand",
    icon: "✍️",
    path: "/services/content-creation",
  },
  {
    title: "Architectural Planning",
    description: "Professional architectural design and planning",
    icon: "🏗️",
    path: "/services/architectural-planning",
  },
];

function CustomerServiceModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();

  const handleServiceSelect = (path: string) => {
    onOpenChange(false);
    router.push(path);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-3xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold text-center mb-6">
            What Service Are You Looking For?
          </AlertDialogTitle>
          <AlertDialogDescription className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => handleServiceSelect(service.path)}
                >
                  <CardHeader>
                    <div className="text-4xl mb-2">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default CustomerServiceModal;
// "use client";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";

// const services = [
//   {
//     id: "graphic-design",
//     title: "Graphic Design",
//     icon: "🎨",
//   },
//   {
//     id: "web-development",
//     title: "Web Development",
//     icon: "💻",
//   },
//   {
//     id: "software-development",
//     title: "Software Development",
//     icon: "⚙️",
//   },
//   {
//     id: "digital-marketing",
//     title: "Digital Marketing",
//     icon: "📱",
//   },
//   {
//     id: "content-creation",
//     title: "Content Creation",
//     icon: "✍️",
//   },
//   {
//     id: "architectural-planning",
//     title: "Architectural Planning",
//     icon: "🏗️",
//   },
// ];

// export default function CustomerServiceModal({
//   open,
//   onOpenChange,
// }: {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
// }) {
//   const router = useRouter();

//   const handleServiceSelect = (serviceId: string) => {
//     onOpenChange(false);
//     router.push(`/services/${serviceId}`);
//   };

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>Choose a Service</DialogTitle>
//         </DialogHeader>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="grid grid-cols-2 gap-4"
//         >
//           {services.map((service) => (
//             <motion.div
//               key={service.id}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Button
//                 variant="outline"
//                 className="w-full h-24 flex flex-col items-center justify-center gap-2"
//                 onClick={() => handleServiceSelect(service.id)}
//               >
//                 <span className="text-2xl">{service.icon}</span>
//                 <span className="text-sm text-center">{service.title}</span>
//               </Button>
//             </motion.div>
//           ))}
//         </motion.div>
//       </DialogContent>
//     </Dialog>
//   );
// }