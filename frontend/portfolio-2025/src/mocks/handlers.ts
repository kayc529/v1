import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(`${import.meta.env.VITE_API_BASE_URL}/visitors`, () => {
    return HttpResponse.json(
      {
        count: 12345,
      },
      { status: 200 },
    );
  }),
];
