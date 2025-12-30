"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "./elements/Button";

export const FindMentor = () => {
  const router = useRouter();
  const [expertise, setExpertise] = useState("");

  const handleBrowse = (e) => {
    e.preventDefault();

    if (!expertise) return;

    router.push(`/mentors?expertise=${expertise}`);
  };

  return (
    <section className="relative mt-52 w-full px-6 md:px-12">
      <div className="absolute inset-0 -z-10 bg-transparent" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 md:flex-row">
        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2">
          <div className="mb-8 max-w-xl">
            <h1 className="text-3xl md:text-4xl font-light leading-tight text-neutral-900">
              Learn and grow with help from{" "}
              <span className="font-medium">mentors</span> for free
            </h1>

            <p className="mt-5 text-neutral-600 leading-relaxed">
              Say goodbye to guesswork and expensive mistakes. Get practical,
              real-world guidance directly from startup mentors who’ve been
              there before.
            </p>
          </div>

          {/* FILTER + REDIRECT */}
          <form
            onSubmit={handleBrowse}
            className="flex flex-wrap items-center gap-3"
          >
            <select
              value={expertise}
              onChange={(e) => setExpertise(e.target.value)}
              className="
                h-11 w-full md:w-[210px]
                rounded-md border border-neutral-300
                bg-white px-4 text-sm text-neutral-700
                outline-none transition
                focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/20
              "
            >
              <option value="">Choose expertise</option>
              <option value="backend">Backend Development</option>
              <option value="frontend">Frontend Development</option>
              <option value="fullstack">Full Stack Development</option>
              <option value="datascience">Data Science</option>
              <option value="dataanalysis">Excel / Data Analysis</option>
              <option value="powerbi">Power BI / Python</option>
              <option value="testing">Software Testing</option>
            </select>

            <Button
              type="submit"
              disabled={!expertise}
              className="
                h-11 px-6 mt-4 md:mt-0
                rounded-md bg-yellow-600 text-white
                transition-all
                hover:-translate-y-[1px] hover:bg-yellow-500
                disabled:opacity-50 disabled:cursor-not-allowed
                focus-visible:ring-2 focus-visible:ring-yellow-600/40
              "
            >
              Browse Mentors
            </Button>
          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex w-full md:w-1/2 justify-center">
          <Image
            src="/images/photos/langboard.png"
            alt="mentor"
            width={480}
            height={480}
            priority
            className="
              rounded-xl object-cover
              drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]
            "
          />
        </div>
      </div>
    </section>
  );
};
