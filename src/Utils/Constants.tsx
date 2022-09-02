const PHYSICAL: string = "Terrain";
const POLITICAL: string = "Territories";
const BURGS: string = "Settlements";
const ROUTES: string = "Roads";

const DEFAULT_VIEW: string = "mapbox://styles/netlisk/cl7j0eocj000414pbh6gcsv2s/draft"

const PHYSICAL_LAYERS: Array<string> = ["heightmap"];
const POLITICAL_LAYERS: Array<string> = ["political-labels", "political-borders", "political-fills"]
const ROUTES_LAYERS: Array<string> = ["searoutes", "trails", "roads", "railways"];
const BURG_LAYERS: Array<string> = ["burgs"]
const ALL_LAYERS: Array<string> = [
    "searoutes",
    "trails",
    "roads",
    "railways",
    "heightmap",
    "burgs",
    "political-labels",
    "political-borders",
    "political-fills"
]
export{
    PHYSICAL,
    POLITICAL,
    POLITICAL_LAYERS,
    PHYSICAL_LAYERS,
    DEFAULT_VIEW,
    ROUTES_LAYERS,
    ALL_LAYERS,
    BURG_LAYERS,
    BURGS,
    ROUTES
}