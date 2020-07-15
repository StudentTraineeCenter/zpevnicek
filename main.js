window.onload = function chordFromSuperMusic() {
    let str = document.getElementById("textSongu").innerHTML;
        for (let index = 0; index < str.length; index++) {
            let c = str[index];
            if (c == "[") {
                str = str.replace("[", "<em>");
            }else if (c == "]") {
                str = str.replace("]", "</em>");
            }   
        }
        document.getElementById("textSongu").innerHTML = str;
}

