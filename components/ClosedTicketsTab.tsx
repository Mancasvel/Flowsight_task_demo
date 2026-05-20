"use client";

import { CLOSED_TICKETS } from "@/lib/data";

export function ClosedTicketsTab() {
  return (
    <div className="animate-fade-in">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-[#18181B]">Closed ticket snapshots</h2>
        <p className="text-sm text-[#71717A]">
          Adjusted hours at close — defensible delivery history across all roles.
        </p>
      </div>

      <div className="dashboard-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#f4f4f5] bg-[#fafafa]/80 text-left">
              <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-[#71717A]">
                Ticket
              </th>
              <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-[#71717A]">
                Worker
              </th>
              <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-[#71717A]">
                Role
              </th>
              <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-[#71717A]">
                Adjusted
              </th>
              <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wide text-[#71717A]">
                Closed
              </th>
            </tr>
          </thead>
          <tbody>
            {CLOSED_TICKETS.map((row, i) => (
              <tr
                key={row.ticket}
                className={`border-b border-[#f4f4f5] transition hover:bg-[#fafafa] ${
                  i % 2 === 0 ? "bg-white" : "bg-[#fafafa]/30"
                }`}
              >
                <td className="px-5 py-3.5 font-mono font-medium text-[#18181B]">{row.ticket}</td>
                <td className="px-5 py-3.5 text-[#18181B]">{row.worker}</td>
                <td className="px-5 py-3.5 text-xs text-[#71717A]">{row.role}</td>
                <td className="px-5 py-3.5 font-semibold text-[#00B8A9]">{row.adjusted}</td>
                <td className="px-5 py-3.5 text-[#71717A]">{row.closed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
