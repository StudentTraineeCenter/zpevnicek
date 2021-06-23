import Header from "./header";

/**
 * Defintiion of the song class.
 */
class Song {
  constructor(name, slug, author, note, text) {
    this.name = name;
    this.slug = slug;
    this.author = author;
    this.note = note;
    this.text = text;
  }
}

/**
 * Save data from simply from into the json file.
 */
function saveData() {
  const name = document.getElementById("fname").value;
  const slug = document.getElementById("fslug").value;
  const author = document.getElementById("fauthor").value;
  const note = document.getElementById("fnote").value;
  const text = document.getElementById("ftext").value;

  if (name !== "" && slug !== "" && author !== "" && text !== "") {
    const song = new Song(name, slug, author, note, text);
    downloadObjectAsJson(song, slug);
  } else {
    alert("Nevyplnil jsi všechny povinné položky!");
  }
}

/**
 * Download data as a JSON.
 * @param {*} exportObj
 * @param {*} exportName
 */
function downloadObjectAsJson(exportObj, exportName) {
  const dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(exportObj));
  const downloadAnchorNode = document.createElement("a");
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".json");
  document.body.appendChild(downloadAnchorNode); // required for Firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

export default function FormLayout() {
  const handleClick = () => {
    saveData();
  };

  return (
    <div>
      <Header />
      <h2 className="text-3xl mb-3 leading-snug">Základní informace</h2>
      <div className="mb-4">
        <label>Název písně</label>
        <input
          for="grid-first-name"
          type="text"
          id="fname"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></input>
      </div>
      <div className="mb-4">
        <label>URL slug písně (nazev-pisne-jmeno-autora)</label>
        <input
          for="grid-first-name"
          type="text"
          id="fslug"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></input>
      </div>
      <div className="mb-4">
        <label>Autor, skladatel, skupina</label>
        <input
          for="grid-first-name"
          type="text"
          id="fauthor"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></input>
      </div>
      <div className="mb-4">
        <label>Poznámka</label>
        <input
          for="grid-first-name"
          type="text"
          id="fnote"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></input>
      </div>
      <h2 className="text-3xl mb-3 leading-snug">Text písně s akordy</h2>
      <div className="mb-4">
        <label>
          Text písně musí vždy obsahovat akordy, které jsou v hranatých
          závorkách
        </label>
        <textarea
          rows="10"
          id="ftext"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y border rounded-md"
        ></textarea>
      </div>
      <button
        onClick={() => handleClick()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Stáhnout JSON
      </button>
    </div>
  );
}
