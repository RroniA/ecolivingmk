# Homepage media and service map

The hero uses a WebP still extracted from the existing HeroVideo.mp4 while video loads. The poster is preloaded. A small, non-blocking lime Ring from MIT-licensed UI Ball LDRS shows during initial loading, disappears on loaded data/playback/error and times out after 12 seconds. Reduced-motion users see the still without animation. A loader changes perceived waiting, not download speed.

- Loader source/license: https://github.com/GriffinJohnston/ldrs
- Map implementation: existing MIT-licensed https://github.com/vnedyalk0v/react19-simple-maps
- Map boundary: North Macedonia feature extracted from https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json (Natural Earth public-domain country geometry, world-atlas ISC). This is a generalized country outline, not streets or municipal boundaries.
- Coordinate references: https://mapcarta.com/N1044455497 ; https://en.wikipedia.org/wiki/Gostivar ; https://www.distancecalculator.net/from-brvenica-to-zhelino

The default map focuses on the four existing service towns with geographic markers; country overview provides context. Native location buttons are keyboard/touch accessible, and labels are translated in all three languages. No map tiles, API key, wheel capture or perpetual marker animation. Markers indicate approximate town locations, not office addresses or exact service boundaries.

HeroVideo.mp4 was remuxed with FFmpeg using stream copy and +faststart. Its moov metadata now precedes the media payload; audio/video are not re-encoded.
