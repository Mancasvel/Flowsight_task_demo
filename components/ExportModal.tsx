"use client";

import { FileText, X } from "lucide-react";
import { CLOSED_TICKETS, PM_INSIGHT, TOP_TICKETS, TEAM_NAME } from "@/lib/data";

interface ExportModalProps {
  open: boolean;
  onClose: () => void;
}

export function ExportModal({ open, onClose }: ExportModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6 backdrop-blur-sm">
      <div className="animate-fade-in w-full max-w-lg rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#f4f4f5] px-6 py-4">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-[#00B8A9]" />
            <h2 className="text-lg font-semibold text-[#18181B]">Weekly rollup export</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-[#71717A] transition hover:bg-[#f4f4f5]"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4 px-6 py-5 text-sm">
          <div className="rounded-xl border border-[#f4f4f5] bg-[#fafafa] p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#71717A]">
              {TEAM_NAME} · Week of May 12–18, 2026
            </p>
            <p className="mt-2 font-medium text-[#18181B]">{PM_INSIGHT}</p>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#71717A]">
              Delivered (top initiatives)
            </p>
            <ul className="space-y-1">
              {TOP_TICKETS.slice(0, 5).map((t) => (
                <li key={t.key} className="flex justify-between font-mono text-xs">
                  <span>
                    {t.key} · {t.area}
                  </span>
                  <span className="font-semibold text-[#00B8A9]">{t.hours}h</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#71717A]">
              Recently closed
            </p>
            <ul className="space-y-1 text-xs text-[#71717A]">
              {CLOSED_TICKETS.slice(0, 4).map((t) => (
                <li key={t.ticket}>
                  {t.ticket} · {t.worker} ({t.role}) · {t.adjusted}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800">
            <strong>Risks:</strong> Customer Success at 94% capacity. Cross-team dependency
            between Growth and Marketing on funnel experiment assets.
          </div>

          <p className="text-xs italic text-[#71717A]">
            Planning aid, not a guarantee. Export formats: CSV · PDF (mock).
          </p>
        </div>

        <div className="flex gap-3 border-t border-[#f4f4f5] px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-lg border border-[#e4e4e7] py-2.5 text-sm font-medium text-[#71717A] transition hover:bg-[#fafafa]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-lg bg-[#00B8A9] py-2.5 text-sm font-semibold text-white transition hover:bg-[#00a396]"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
