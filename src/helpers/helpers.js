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
export const yearData = [
  { year: 2020 },
  { year: 2019 },
  { year: 2018 },
  { year: 2017 },
  { year: 2016 },
  { year: 2015 },
  { year: 2014 },
  { year: 2013 },
  { year: 2012 },
  { year: 2011 },
  { year: 2010 },
  { year: 2009 },
  { year: 2008 },
  { year: 2007 },
  { year: 2006 },
  { year: 2005 },
  { year: 2004 },
  { year: 2003 },
  { year: 2002 },
  { year: 2001 },
  { year: 2000 },
  { year: 1999 },
  { year: 1998 },
  { year: 1997 },
  { year: 1997 },
  { year: 1996 },
  { year: 1995 },
  { year: 1994 },
  { year: 1993 },
  { year: 1992 },
  { year: 1991 },
  { year: 1990 },
  { year: 1989 },
  { year: 1988 },
  { year: 1987 },
  { year: 1986 },
  { year: 1985 },
  { year: 1984 },
  { year: 1983 },
  { year: 1982 },
  { year: 1981 },
  { year: 1980 },
  { year: 1979 },
  { year: 1978 },
  { year: 1977 },
  { year: 1976 },
  { year: 1975 },
  { year: 1974 },
  { year: 1973 },
  { year: 1972 },
  { year: 1971 },
  { year: 1970 },
  { year: 1969 },
  { year: 1968 },
  { year: 1967 },
  { year: 1966 },
  { year: 1965 },
  { year: 1964 },
  { year: 1963 },
  { year: 1962 },
  { year: 1961 },
  { year: 1960 },
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
