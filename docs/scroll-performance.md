# Mobile stack and scroll review — October 23, 2026

Restored the mobile services stack using native CSS sticky positioning and the existing open-source Motion card scaling. Smaller mobile offsets keep seven cards visible. Very short viewports use a normal list so content remains reachable; reduced-motion preferences disable scaling.

Removed the individual service-image parallax trackers, including service-page covers. Photos now fill stationary frames. Lenis was temporarily removed during profiling, then restored at the user request with its original settings and reduced-motion support. A replacement animation library is unnecessary for this effect.

The measurements below describe the temporary no-Lenis version, not the final restored-Lenis configuration. Production-build checks used headless Microsoft Edge, 4× CPU throttling, and a six-second scripted scroll. These single-run measurements identify reduced work, not a guarantee about physical-device performance:

| Measurement | Before | After |
| --- | --- | --- |
| Desktop image style mutations | 542 | 0 |
| Mobile image style mutations | 614 | 0 |
| Idle animation callbacks per second | About 150 | 76 |
| 95th-percentile scroll frame interval | 13.5 ms | 13.5 ms |

Neither run reproduced scroll frames longer than 33 ms. Intermittent startup lag therefore remains unproven; this change removes unnecessary work rather than claiming a measured frame-rate improvement.

Checked seven cards, image space, CTA visibility, horizontal overflow, sticky behavior, and English/Albanian/Macedonian copy at 390×844, 360×640, 320×568, and 1440×900. Also checked reduced motion, stationary service-page images, and browser errors.

References: [Motion performance](https://motion.dev/docs/performance), [Motion scroll animations](https://motion.dev/docs/react-scroll-animations), [Lenis](https://github.com/darkroomengineering/lenis).

This supersedes the non-stacking mobile layout recorded in map-redesign.md.
