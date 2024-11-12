"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardNav() {
  const pathname = usePathname();
  const isEventTypesPage = pathname.includes("event-types");

  return (
    <div className="flex gap-4 justify-center">
      <Link
        className={clsx("rounded-full px-4 py-2", {
          "bg-gray-200": isEventTypesPage,
          "bg-blue-600 text-white": !isEventTypesPage,
        })}
        href="/dashboard"
      >
        Booked events
      </Link>
      <Link
        className={clsx(
          "rounded-full px-4 py-2",
          isEventTypesPage ? "bg-blue-600 text-white" : "bg-gray-200"
        )}
        href="/dashboard/event-types"
      >
        Event types
      </Link>
    </div>
  );
}
