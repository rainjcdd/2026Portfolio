"use client";

import { Analytics as VercelAnalytics } from "@vercel/analytics/next";

export function Analytics() {
  return (
    <VercelAnalytics
      beforeSend={(event) => {
        if (localStorage.getItem("va-disable")) {
          return null;
        }

        return event;
      }}
    />
  );
}
