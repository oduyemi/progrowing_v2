import { Suspense } from "react";
import MentorsClient from "@/components/Mentor/MentorsClient";

export default function MentorsPage() {
  return (
    <Suspense fallback={<MentorsSkeleton />}>
      <MentorsClient />
    </Suspense>
  );
}

function MentorsSkeleton() {
  return (
    <section className="px-6 md:px-12 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 h-8 w-64 rounded bg-neutral-200 animate-pulse" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-72 rounded-2xl bg-neutral-100 animate-pulse"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
