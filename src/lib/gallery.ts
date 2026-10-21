export const galleryImages = {
  collection: "collection-crew",
  lifting: "bin-collection",
  containers: "container-yard",
  skip: "skip-loading",
  timber: "site-clearance",
  bags: "site-bagging",
  sweeping: "site-sweeping",
} as const;

export const galleries = {
  home: ["timber", "collection", "skip", "sweeping"],
  pickup: ["collection", "lifting"],
  rental: ["skip", "containers"],
  demolition: ["timber", "bags", "sweeping"],
} as const satisfies Record<string, readonly (keyof typeof galleryImages)[]>;

export type GalleryKind = keyof typeof galleries;
