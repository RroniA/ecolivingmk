export const serviceLocations = [
  { id: "gostivar", lat: 41.8, lng: 20.917, direction: "left" },
  { id: "chegrane", lat: 41.83722, lng: 20.97438, direction: "right" },
  { id: "brvenitsa", lat: 41.9672, lng: 20.9808, direction: "left" },
  { id: "zelino", lat: 41.9803, lng: 21.0642, direction: "right" },
] as const;

export type ServiceLocationId = (typeof serviceLocations)[number]["id"];
