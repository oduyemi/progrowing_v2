"use client";

import Image from "next/image";
import { X, Loader2, Mail, Phone } from "lucide-react";
import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeeqweke";

const getInitials = (name = "") =>
  name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

export const PitchModal = ({ open, onClose, mentor }) => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  if (!open) return null;

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot anti-spam
    if (e.target.company.value) return;

    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("mentor", mentor.name);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        e.target.reset();
        showToast("success", "Your pitch has been sent. The mentor can now reach you directly.");
      } else {
        showToast("error", "Submission failed. Please try again.");
      }
    } catch {
      showToast("error", "Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl">

        {/* Toast */}
        {toast && (
          <div
            className={`absolute top-4 left-1/2 z-50 w-[90%] -translate-x-1/2 rounded-xl px-4 py-3 text-sm shadow-lg
            ${toast.type === "success" ? "bg-emerald-600 text-white" : "bg-red-600 text-white"}`}
          >
            {toast.message}
          </div>
        )}

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-neutral-400 hover:bg-neutral-100"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 border-b border-neutral-100 px-6 py-5">
          {mentor.image ? (
            <Image
              src={mentor.image}
              alt={mentor.name}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-sm font-semibold text-neutral-700">
              {getInitials(mentor.name)}
            </div>
          )}

          <div>
            <h2 className="text-lg font-semibold text-neutral-900">
              Pitch yourself
            </h2>
            <p className="text-sm text-neutral-500">
              Give <span className="font-medium">{mentor.name}</span> enough context to reach you
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 px-6 py-6">

          {/* Honeypot */}
          <input type="text" name="company" tabIndex="-1" autoComplete="off" className="hidden" />

          {/* Personal Info */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input name="first_name" placeholder="First name" className="input" required />
            <input name="last_name" placeholder="Last name" className="input" required />
          </div>

          {/* Contact */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-3 text-neutral-400" />
              <input
                name="email"
                type="email"
                placeholder="Email address"
                className="input pl-9"
                required
              />
            </div>

            <div className="relative">
              <Phone size={16} className="absolute left-3 top-3 text-neutral-400" />
              <input
                name="phone"
                type="tel"
                placeholder="Phone number (optional)"
                className="input pl-9"
              />
            </div>
          </div>

          {/* Role */}
          <input
            name="role"
            placeholder="Current role (e.g. Frontend Developer)"
            className="input"
            required
          />

          {/* Experience */}
          <select name="experience_level" className="input" required>
            <option value="">Experience level</option>
            <option>Beginner</option>
            <option>Intermediate</option>
          </select>

          {/* Pitch */}
          <div>
            <textarea
              name="pitch"
              rows={4}
              placeholder="What are you hoping to learn, and how can this mentor help you?"
              className="input resize-none"
              required
            />
            <p className="mt-1 text-xs text-neutral-400">
              Tip: Mention a specific goal or challenge.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col-reverse gap-3 pt-4 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-100"
              disabled={loading}
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-500 px-6 py-2 text-sm font-medium text-white transition hover:bg-yellow-600 disabled:opacity-60"
            >
              {loading && <Loader2 size={16} className="animate-spin" />}
              Submit pitch
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
