"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { PitchModal } from "./PitchModal";

const getInitials = (name = "") =>
  name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

export const MentorCard = ({ mentor }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="group relative flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
        
        {/* Header */}
        <div className="flex items-center gap-4">
          {mentor.image ? (
            <Image
              src={mentor.image}
              alt={mentor.name}
              width={64}
              height={64}
              className="h-16 w-16 rounded-full object-cover ring-2 ring-neutral-100"
            />
          ) : (
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-neutral-200 to-neutral-100 text-lg font-semibold text-neutral-700">
              {getInitials(mentor.name)}
            </div>
          )}

          <div>
            <h3 className="text-base font-semibold text-neutral-900">
              {mentor.name}
            </h3>
            <p className="text-sm text-neutral-500">
              ⭐ {mentor.years}+ years experience
            </p>
          </div>
        </div>

        {/* Expertise */}
        <div className="mt-4 flex flex-wrap gap-2">
          {mentor.expertise.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Bio */}
        <p className="mt-4 line-clamp-3 text-sm text-neutral-600">
          {mentor.bio}
        </p>

        {/* CTA */}
        <button
          onClick={() => setOpen(true)}
          className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-medium text-yellow-600 transition-all hover:gap-2"
        >
          Pitch yourself <ArrowRight size={14} />
        </button>
      </div>

      <PitchModal
        open={open}
        onClose={() => setOpen(false)}
        mentor={mentor}
      />
    </>
  );
};
