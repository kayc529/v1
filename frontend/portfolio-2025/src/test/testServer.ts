import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

const base = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8787";

export const server = setupServer(
  http.get(`${base}/visitors`, () => {
    return HttpResponse.json({ visitor_count: 123 });
  }),
);
