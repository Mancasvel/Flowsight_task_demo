"use client";

import { ChevronRight, X } from "lucide-react";
import { TOUR_STEPS, type ViewId } from "@/lib/data";

interface TourCalloutProps {
  currentStep: number;
  onStepChange: (step: number) => void;
  onNavigate: (view: ViewId) => void;
  onDismiss: () => void;
}

export function TourCallout({
  currentStep,
  onStepChange,
  onNavigate,
  onDismiss,
}: TourCalloutProps) {
  const step = TOUR_STEPS[currentStep];
  if (!step) return null;

  return (
    <aside className="fixed right-6 top-1/2 z-50 w-72 -translate-y-1/2 animate-fade-in">
      <div className="dashboard-card border-[#00B8A9]/20 p-5 shadow-lg shadow-black/5">
        <div className="mb-3 flex items-center justify-between">
          <span className="rounded-full bg-[#00B8A9]/10 px-2.5 py-0.5 text-xs font-semibold text-[#00B8A9]">
            PM guide · {step.step}/3
          </span>
          <button
            type="button"
            onClick={onDismiss}
            className="rounded-md p-1 text-[#71717A] transition hover:bg-[#f4f4f5] hover:text-[#18181B]"
            aria-label="Dismiss tour"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <h3 className="text-sm font-semibold text-[#18181B]">{step.title}</h3>
        <p className="mt-2 text-xs leading-relaxed text-[#71717A]">{step.body}</p>

        <div className="mt-4 flex gap-1.5">
          {TOUR_STEPS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onStepChange(i)}
              className={`h-1.5 flex-1 rounded-full transition ${
                i === currentStep ? "bg-[#00B8A9]" : "bg-[#e4e4e7]"
              }`}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          {currentStep > 0 && (
            <button
              type="button"
              onClick={() => onStepChange(currentStep - 1)}
              className="flex-1 rounded-lg border border-[#e4e4e7] px-3 py-2 text-xs font-medium text-[#71717A] transition hover:bg-[#fafafa]"
            >
              Back
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              onNavigate(step.view);
              if (currentStep < TOUR_STEPS.length - 1) {
                onStepChange(currentStep + 1);
              } else {
                onDismiss();
              }
            }}
            className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-[#00B8A9] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#00a396]"
          >
            {currentStep < TOUR_STEPS.length - 1 ? "Next" : "Got it"}
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
