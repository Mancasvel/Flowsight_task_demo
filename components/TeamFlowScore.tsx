"use client";

import { FLOW_SCORE } from "@/lib/data";
import { ExportButton } from "./Header";

interface TeamFlowScoreProps {
  onExport: () => void;
}

export function TeamFlowScore({ onExport }: TeamFlowScoreProps) {
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (FLOW_SCORE.value / 100) * circumference;

  return (
    <div className="dashboard-card mb-5 flex flex-wrap items-center justify-between gap-4 p-4">
      <div className="flex items-center gap-5">
        <div className="relative flex h-[88px] w-[88px] items-center justify-center">
          <svg className="h-[88px] w-[88px] -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#f4f4f5"
              strokeWidth="10"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#00B8A9"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              className="animate-donut"
              style={{ strokeDashoffset: offset }}
            />
          </svg>
          <div className="absolute text-center">
            <span className="text-xl font-bold text-[#0f172a]">{FLOW_SCORE.value}%</span>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-[#71717A]">
            Team Flow Score
          </p>
          <p className="mt-0.5 text-lg font-semibold text-[#18181B]">
            <span className="inline-flex items-center gap-2">
              {FLOW_SCORE.label}
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
                Amber
              </span>
            </span>
          </p>

        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-[#f4f4f5] px-3 py-1 text-xs font-medium text-[#71717A]">
          Last 30 days
        </span>
        <span className="rounded-full bg-[#00B8A9]/10 px-3 py-1 text-xs font-semibold text-[#00B8A9]">
          Auto rollup
        </span>
        <ExportButton onExport={onExport} />
      </div>
    </div>
  );
}
