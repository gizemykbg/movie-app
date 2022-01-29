export const movieGenres = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];
export const formatDate = (date, monthType = "long") => {
  return new Date(date).toLocaleString("en-US", {
    day: "numeric",
    year: "numeric",
    month: monthType,
  });
};
export function formatRuntime(runtime) {
  const hours = Math.floor(runtime / 60);
  const remainder = runtime - hours * 60;

  if (hours === 0) {
    return `${remainder}m`;
  } else if (remainder === 0) {
    return `${runtime / 60}h`;
  } else {
    return `${hours}h ${remainder}m`;
  }
}
export function colorPercentage(pct) {
  const percentColors = [
    { pct: 0.4, color: { r: 0xff, g: 0x00, b: 0 } },
    { pct: 0.7, color: { r: 0xff, g: 0xff, b: 0 } },
    { pct: 0.9, color: { r: 0x00, g: 0xff, b: 0 } },
  ];

  for (var i = 1; i < percentColors.length - 1; i++) {
    if (pct < percentColors[i].pct) {
      break;
    }
  }
  const lower = percentColors[i - 1];
  const upper = percentColors[i];
  const range = upper.pct - lower.pct;
  const rangePct = (pct - lower.pct) / range;
  const pctLower = 1 - rangePct;
  const pctUpper = rangePct;
  const color = {
    r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
    g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
    b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper),
  };
  return "rgb(" + [color.r, color.g, color.b].join(",") + ")";
}
