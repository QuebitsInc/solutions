import { useState } from "react";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  images: string[];
  location: string;
  duration: string;
  cost: string;
  categories: string[];
}

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return { isOpen, selectedProject, openModal, closeModal };
}
