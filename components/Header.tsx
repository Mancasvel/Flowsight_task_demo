"use client";

import { ChevronDown, LogOut } from "lucide-react";
import { TEAM_NAME } from "@/lib/data";

export function Header() {
  return (
    <header className="mb-6 flex items-start justify-between gap-4 border-b border-[#f4f4f5] pb-5">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-[#0f172a]">
          Task & sprint focus
        </h1>
        <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-[#71717A]">
          Ticket-level activity across product, sales, marketing, growth and more — per-role
          category mix, delivery history, and sprint planning hints.
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border border-[#e4e4e7] bg-white px-3 py-2 text-sm font-medium text-[#18181B] transition hover:border-[#00B8A9]/40 hover:bg-[#fafafa]"
        >
          {TEAM_NAME}
          <ChevronDown className="h-4 w-4 text-[#71717A]" />
        </button>
        <button
          type="button"
          className="rounded-lg border border-[#e4e4e7] bg-white px-4 py-2 text-sm font-medium text-[#18181B] transition hover:border-[#71717A]/40 hover:bg-[#fafafa]"
        >
          <span className="flex items-center gap-2">
            <LogOut className="h-4 w-4" />
            Sign out
          </span>
        </button>
      </div>
    </header>
  );
}

export function ExportButton({ onExport }: { onExport: () => void }) {
  return (
    <button
      type="button"
      onClick={onExport}
      className="flex items-center gap-2 rounded-lg border border-[#e4e4e7] bg-white px-3 py-1.5 text-sm font-medium text-[#18181B] transition hover:border-[#00B8A9]/50 hover:text-[#00B8A9]"
    >
      Export weekly summary
    </button>
  );
}
