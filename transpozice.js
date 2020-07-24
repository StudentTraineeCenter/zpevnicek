function Moduluj2(akord_name2, modulacia) {
  akord_name2 =
    akord_name2.substr(0, 1).toUpperCase() +
    akord_name2.substr(1, akord_name.length);

  if (akord_name2 != "") {
    akord_id = 0;
    switch (akord_name2.substr(0, 2)) {
      case "C#":
        akord_id = 1;
        break;
      case "D#":
        akord_id = 3;
        break;
      case "Es":
        {
          if (akord_name2.substr(0, 3) != "Esu") akord_id = 3;
          else akod_id = 4;
        }
        break;
      case "F#":
        akord_id = 6;
        break;
      case "G#":
        akord_id = 8;
        break;
      case "As":
        {
          if (akord_name2.substr(0, 3) != "Asu") akord_id = 8;
          else akod_id = 9;
        }
        break;
      case "A#":
        akord_id = 10;
        break;
      case "Bb":
        akord_id = 10;
        break;
    }

    if (akord_id == 0) {
      switch (akord_name2.substr(0, 1)) {
        case "C":
          akord_id = 0;
          break;
        case "D":
          akord_id = 2;
          break;
        case "E":
          akord_id = 4;
          break;
        case "F":
          akord_id = 5;
          break;
        case "G":
          akord_id = 7;
          break;
        case "A":
          akord_id = 9;
          break;
        case "B":
          akord_id = 10;
          break;
        case "H":
          akord_id = 11;
          break;
      }
      akord_name2 = akord_name2.substr(1, akord_name2.length);
    } else akord_name2 = akord_name2.substr(2, akord_name2.length);

    akord_id = akord_id + modulacia;

    if (akord_id > 11) akord_id = akord_id - 12;
    if (akord_id < 0) akord_id = akord_id + 12;

    switch (akord_id) {
      case 0:
        akord_name2 = "C" + akord_name2;
        break;
      case 1:
        akord_name2 = "C#" + akord_name2;
        break;
      case 2:
        akord_name2 = "D" + akord_name2;
        break;
      case 3:
        akord_name2 = "Es" + akord_name2;
        break;
      case 4:
        akord_name2 = "E" + akord_name2;
        break;
      case 5:
        akord_name2 = "F" + akord_name2;
        break;
      case 6:
        akord_name2 = "F#" + akord_name2;
        break;
      case 7:
        akord_name2 = "G" + akord_name2;
        break;
      case 8:
        akord_name2 = "As" + akord_name2;
        break;
      case 9:
        akord_name2 = "A" + akord_name2;
        break;
      case 10:
        akord_name2 = "B" + akord_name2;
        break;
      case 11:
        akord_name2 = "H" + akord_name2;
        break;
    }

    elemID = "akord[" + i + "]";

    var obj;
    if (document.all) {
      obj = document.all(elemID);
    } else if (document.getElementById) {
      obj = document.getElementById(elemID);
    } else if (document.layers) {
      obj = document.layers[elemID];
    }

    if (obj) {
      obj.innerHTML = obj.innerHTML + akord_name2;
    }
  }
}

function Moduluj(modulacia) {
  var allakordy_new;
  allakordy_new = "";
  i = 1;
  var akord_name_img;
  akord_name_img = 0;

  while (i < maxakordov) {
    akord_name_img = 0;
    elemID = "akord[" + i + "]";

    var obj;
    if (document.all) {
      obj = document.all(elemID);
    } else if (document.getElementById) {
      obj = document.getElementById(elemID);
    } else if (document.layers) {
      obj = document.layers[elemID];
    }

    if (obj) {
      akord_name = obj.innerHTML;
    }

    akord_name =
      akord_name.substr(0, 1).toUpperCase() +
      akord_name.substr(1, akord_name.length);

    if (akord_name.search("IMG") > 0) {
      akord_name_img = 1;
      zalozka1 = akord_name.search("akord=");
      zalozka2 = akord_name.length - 2 - (zalozka1 + 6);
      akord_name = akord_name.substr(zalozka1 + 6, zalozka2);
      akord_name = akord_name.replace("Q", "+").replace("@", "#");
    }

    if (akord_name != "") {
      akord_id = 0;
      switch (akord_name.substr(0, 2)) {
        case "C#":
          akord_id = 1;
          break;
        case "D#":
          akord_id = 3;
          break;
        case "Es":
          {
            if (akord_name.substr(0, 3) != "Esu") akord_id = 3;
            else akod_id = 4;
          }
          break;
        case "F#":
          akord_id = 6;
          break;
        case "G#":
          akord_id = 8;
          break;
        case "As":
          {
            if (akord_name.substr(0, 3) != "Asu") akord_id = 8;
            else akod_id = 9;
          }
          break;
        case "A#":
          akord_id = 10;
          break;
        case "Bb":
          akord_id = 10;
          break;
      }

      if (akord_id == 0) {
        switch (akord_name.substr(0, 1)) {
          case "C":
            akord_id = 0;
            break;
          case "D":
            akord_id = 2;
            break;
          case "E":
            akord_id = 4;
            break;
          case "F":
            akord_id = 5;
            break;
          case "G":
            akord_id = 7;
            break;
          case "A":
            akord_id = 9;
            break;
          case "B":
            akord_id = 10;
            break;
          case "H":
            akord_id = 11;
            break;
        }
        akord_name = akord_name.substr(1, akord_name.length);
      } else akord_name = akord_name.substr(2, akord_name.length);

      akord_id = akord_id + modulacia;

      if (akord_id > 11) akord_id = akord_id - 12;
      if (akord_id < 0) akord_id = akord_id + 12;

      switch (akord_id) {
        case 0:
          akord_name = "C" + akord_name;
          break;
        case 1:
          akord_name = "C#" + akord_name;
          break;
        case 2:
          akord_name = "D" + akord_name;
          break;
        case 3:
          akord_name = "Es" + akord_name;
          break;
        case 4:
          akord_name = "E" + akord_name;
          break;
        case 5:
          akord_name = "F" + akord_name;
          break;
        case 6:
          akord_name = "F#" + akord_name;
          break;
        case 7:
          akord_name = "G" + akord_name;
          break;
        case 8:
          akord_name = "As" + akord_name;
          break;
        case 9:
          akord_name = "A" + akord_name;
          break;
        case 10:
          akord_name = "B" + akord_name;
          break;
        case 11:
          akord_name = "H" + akord_name;
          break;
      }

      {
        if (akord_name.search("/") > 0) {
          //      alert(1);
          akord_name2 = akord_name.substr(
            akord_name.search("/") + 1,
            akord_name.length
          );
          obj.innerHTML = akord_name.substr(0, akord_name.search("/") + 1);
          //alert(akord_name2);
          Moduluj2(akord_name2, modulacia);

          //alert(akord_name2);
          //      obj.innerHTML = akord_name2;
        } else {
          //        alert(akord_name_img);
          if (akord_name_img > 0) {
            akord_name = akord_name.replace(/\+/, "Q").replace(/#/, "@");
            obj.innerHTML = '<IMG src="akord2.php?akord=' + akord_name + '">';
          } else obj.innerHTML = akord_name;
        }
      }
    }

    allakordy_new = allakordy_new + ", " + akord_name;
    i = i + 1;
  }

  //   alert(allakordy_new)

  elemID = "modulacia";

  if (document.all) {
    obj = document.all(elemID);
  } else if (document.getElementById) {
    obj = document.getElementById(elemID);
  } else if (document.layers) {
    obj = document.layers[elemID];
  }

  if (obj) {
    akord_name = obj.innerHTML;
  }

  obj.innerHTML = Math.round(obj.innerHTML) + modulacia;
}
