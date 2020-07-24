window.onload = function chordFromSuperMusic() {
    let str = document.getElementById("textSongu").innerHTML;
    str = str.split("[").join("<em>")
    str = str.split("]").join("</em>")
    document.getElementById("textSongu").innerHTML = str;
}
