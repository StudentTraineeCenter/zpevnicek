import fs from "fs";
export function getSongsMetadata() {
  return JSON.parse(fs.readFileSync("_songs-metadata.json"));
}
