const fs = require("fs");

/**
 * The structure contains only the song's metadata. It is used to improve
 * the loading experience by reducing size.
 */
class MetaSong {
  constructor(name, slug, author) {
    this.name = name;
    this.slug = slug;
    this.author = author;
  }
}

/**
 * The function generates the JSON file, which contains only the song's
 * metadata without page content to reduce the loading performance
 * of the index page.
 */
function generateMetaJson() {
  const files = fs.readdirSync("_songs");
  let out = new Array();
  files.map((file) => {
    const song = JSON.parse(fs.readFileSync(`_songs/${file}`));
    out.push(new MetaSong(song.name, song.slug, song.author));
    // fs.writeFileSync(
    //   "_songs-metadata.json",
    //   JSON.stringify(new MetaSong(song.name, song.slug, song.author)) + ",",
    //   { flag: "a+" }
    // );
  });
  fs.writeFileSync("_songs-metadata.json", JSON.stringify(out));
}

generateMetaJson();
