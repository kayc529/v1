import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(`${import.meta.env.VITE_API_BASE_URL}/visitors`, () => {
    return HttpResponse.json(
      {
        visitor_count: 12345,
      },
      { status: 200 },
    );
  }),
];
