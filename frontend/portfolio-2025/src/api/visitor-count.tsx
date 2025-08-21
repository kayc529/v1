export interface VisitCountResponse {
  count: number;
}

export const getVisitorCount = async (): Promise<VisitCountResponse> => {
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/visitors`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return await res.json();
};
