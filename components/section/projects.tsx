"use client";
import React from "react";
import { Headline, Title } from "./services";
import { ProjectModal } from "./project-modal";
import { useModal } from "@/hooks/useModal";

const Projects = ({ works }: { works: any[] }) => {
  const { isOpen, selectedProject, openModal, closeModal } = useModal();

  return (
    <>
      <div className="py-10 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto p-4 w-full flex flex-col justify-center items-center  gap-4">
          <Headline title="Recent Works" />
          <Title title="Our Work Speaks for Itself" />
          <p className="text-sm md:text-base text-center">
            From renovations to installations, we focus on providing reliable
            solutions that meet your needs.
          </p>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-full md:h-[500px]">
            <div className="md:col-span-2 h-full  relative rounded-sm overflow-hidden ">
              <img
                src={works[0]?.image}
                alt="Main property view"
                className="w-full  object-cover h-full aspect-[4/3] rounded-sm"
                onClick={() => openModal(works[0]?.image)}
              />
            </div>
            <div className="md:col-span-2 h-full grid grid-cols-1 md:grid-cols-2 gap-4">
              {works.slice(1).map((image, index) => (
                <div
                  onClick={() => openModal(image)}
                  key={index}
                  className="relative w-full rounded-sm overflow-hidden cursor-pointer"
                >
                  <img
                    src={image.image}
                    alt={`Property view ${index + 2}`}
                    className="w-full h-full object-cover rounded-sm hover:opacity-90 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ProjectModal
        project={selectedProject}
        isOpen={isOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default Projects;
