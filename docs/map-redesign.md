# Regional map and visual review — October 22, 2026

Replaces the country-outline map described in homepage-media-map.md with Leaflet 1.9.4 (BSD-2-Clause) and OpenStreetMap raster tiles. Removed the unused React Simple Maps dependency and country geometry.

The view fits the existing four town locations in the Polog area. Town buttons and keyboard-accessible numbered markers select a location; Show all locations restores the regional view. The map includes zoom controls, translated labels, visible attribution, and an external full-map link. Marker positions represent towns, not office addresses or coverage boundaries.

The map module and tile requests load only near the viewport. Wheel zoom is disabled; mobile dragging is disabled so page scrolling stays available. Pinch/zoom controls remain available. ResizeObserver updates the map size, and unmount removes the map and observer. Failed tile requests show a message and a full-map link. OSM tiles remain an external, best-effort service; normal browser caching and referrer behavior are retained. No tile prefetching or offline downloads.

Sources:
- https://leafletjs.com/examples/quick-start/
- https://leafletjs.com/reference
- https://operations.osmfoundation.org/policies/tiles/

Other visual improvements: full-frame gallery crops with per-photo focal points, mobile service cards with dedicated image space and no overlapping sticky stack, responsive Next Image delivery for service cards and service-page covers.

Development: the Windows nested workspace reproduced a Turbopack dev CSS-resolution loop against the parent directory. The dev script uses the supported Webpack mode, which compiled successfully; production builds continue using Turbopack. Tailwind scans the src directory explicitly.
