"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Project } from "@/hooks/useModal";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % project.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-full h-full p-0 flex flex-col">
        <DialogHeader className="p-6 flex-shrink-0">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold">
              {project.title}
            </DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
            </Button>
          </div>
        </DialogHeader>
        <div className="flex-grow overflow-auto p-6">
          <div className="mb-8 relative">
            <Image
              src={project.image}
              alt={`${project.title} image ${currentImageIndex + 1}`}
              width={1200}
              height={800}
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute hidden top-1/2 left-0 right-0  justify-between transform -translate-y-1/2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevImage}
                className="rounded-full bg-white/80"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextImage}
                className="rounded-full bg-white/80"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Project Details</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold">Location</h4>
                <p>{project?.location || "Not Disclosed"}</p>
              </div>
              <div>
                <h4 className="font-semibold">Duration</h4>
                <p>{project?.duration || "Not Disclosed"}</p>
              </div>
              <div>
                <h4 className="font-semibold">Cost</h4>
                <p>{project?.cost || "Not Disclosed"}</p>
              </div>
              <div>
                <h4 className="font-semibold">Services Provided</h4>
                <ul className="list-disc pl-5">
                  {project.categories.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
