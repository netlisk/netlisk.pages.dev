# netlisk.pages.dev
A worldbuilding project, created by the demons in my mind.
The tools used to create this were, as follows:
- [Azgaar's Fantasy Map Generator](https://azgaar.github.io/Fantasy-Map-Generator/) to generate geoJSON tiles and markers
- [QGIS](https://www.qgis.org/en/site/) to clean up and manually edit geoJSON
- Uploaded to and rendered by [Mapbox](https://www.mapbox.com/) JS Api

The app is composed of three main components: `Map.tsx`, `MapOverlay.tsx`, `MapInfobar.tsx`.
- `Map.tsx` contains the Mapbox map and is a container for the Overlay and Infobar
- `MapOverlay.tsx` handles anything that modifies the Map (mainly map layers)
- `MapInfobar.tsx` handles the wiki function of the app, loading content specified by either `Map.tsx` or the wiki-root