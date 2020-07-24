window.onload = function chordFromSuperMusic() {
    let str = document.getElementById("textSongu").innerHTML;
    str.split("[").join("<em>")
    str.split("]").join("</em>")
    document.getElementById("textSongu").innerHTML = str;
}
