export type FilmsProps = {
  name: string;
  poster: { url: string };
  description: string;
  rating: { kp: number };
  id: number;
  alternativeName: string;
  year: number;
};

export type ApiResponse = {
  docs: FilmsProps[];
};
