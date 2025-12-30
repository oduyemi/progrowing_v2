"use client";
import { useSearchParams } from "next/navigation";
import { mentors } from "@/data/mentors";
import { MentorCard } from "@/components/Mentor/MentorCard";

export default function MentorsPage() {
  const searchParams = useSearchParams();
  const expertise = searchParams.get("expertise");

  const filteredMentors = expertise
  ? mentors.filter((mentor) =>
      mentor.expertise.includes(expertise)
    )
  : mentors;


  const title = expertise
    ? `${expertise.replace(/^\w/, (c) => c.toUpperCase())} Mentors`
    : "All Mentors";

  return (
    <section className="px-6 md:px-12 py-16">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <header className="mb-10 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-light text-neutral-900">
            {title}
          </h1>
          <p className="mt-3 text-neutral-600">
            Learn directly from experienced professionals who’ve worked on real
            products and teams.
          </p>
        </header>

        {/* EMPTY STATE */}
        {filteredMentors.length === 0 && (
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-10 text-center">
            <p className="text-neutral-600">
              No mentors found for this expertise yet.
            </p>
          </div>
        )}

        {/* MENTORS GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredMentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
      </div>
    </section>
  );
}
