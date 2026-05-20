"use client";

import { TOP_TICKETS, WORKER_TICKET_ROWS } from "@/lib/data";

const CATEGORY_COLORS: Record<string, string> = {
  "Focused work": "bg-[#00B8A9]/10 text-[#00B8A9]",
  Iteration: "bg-[#38bdf8]/10 text-[#38bdf8]",
  Meeting: "bg-[#6366f1]/10 text-[#6366f1]",
  "Research & admin": "bg-[#f4f4f5] text-[#71717A]",
};

export function TimePerTicketTab() {
  return (
    <div className="animate-fade-in grid grid-cols-1 gap-5 xl:grid-cols-5">
      <div className="dashboard-card p-5 xl:col-span-2">
        <h2 className="mb-1 text-lg font-semibold text-[#18181B]">Top tickets (last 30d)</h2>
        <p className="mb-4 text-sm text-[#71717A]">
          Initiatives ranked by logged hours across the GTM squad.
        </p>
        <ul className="space-y-1">
          {TOP_TICKETS.map((ticket, i) => (
            <li
              key={ticket.key}
              className="flex items-center justify-between rounded-lg px-3 py-2.5 transition hover:bg-[#fafafa]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded text-xs font-medium text-[#71717A]">
                  {i + 1}
                </span>
                <div>
                  <span className="font-mono text-sm font-medium text-[#18181B]">{ticket.key}</span>
                  <span className="ml-2 text-xs text-[#71717A]">{ticket.area}</span>
                </div>
              </div>
              <span className="text-sm font-semibold text-[#00B8A9]">{ticket.hours}h</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="dashboard-card overflow-hidden p-5 xl:col-span-3">
        <h2 className="mb-1 text-lg font-semibold text-[#18181B]">Time per worker × ticket</h2>
        <p className="mb-4 text-sm text-[#71717A]">
          Drill-down for sprint retros — who spent time where, by role.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#f4f4f5] text-left">
                <th className="pb-3 pr-4 text-xs font-semibold uppercase tracking-wide text-[#71717A]">
                  Ticket
                </th>
                <th className="pb-3 pr-4 text-xs font-semibold uppercase tracking-wide text-[#71717A]">
                  Worker
                </th>
                <th className="pb-3 pr-4 text-xs font-semibold uppercase tracking-wide text-[#71717A]">
                  Role
                </th>
                <th className="pb-3 pr-4 text-xs font-semibold uppercase tracking-wide text-[#71717A]">
                  Time
                </th>
                <th className="pb-3 text-xs font-semibold uppercase tracking-wide text-[#71717A]">
                  Top category
                </th>
              </tr>
            </thead>
            <tbody>
              {WORKER_TICKET_ROWS.map((row, i) => (
                <tr
                  key={`${row.ticket}-${row.worker}`}
                  className={`border-b border-[#f4f4f5] transition hover:bg-[#fafafa] ${
                    i % 2 === 0 ? "" : "bg-[#fafafa]/50"
                  }`}
                >
                  <td className="py-3 pr-4 font-mono font-medium text-[#18181B]">{row.ticket}</td>
                  <td className="py-3 pr-4 text-[#18181B]">{row.worker}</td>
                  <td className="py-3 pr-4 text-xs text-[#71717A]">{row.role}</td>
                  <td className="py-3 pr-4 font-semibold text-[#18181B]">{row.time}</td>
                  <td className="py-3">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        CATEGORY_COLORS[row.topCategory] ?? "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {row.topCategory}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
