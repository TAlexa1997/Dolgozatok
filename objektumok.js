window.addEventListener("load", init);
const kutyaLista = [
  {
    Név: "Teo",
    Fajta: "Bischon Havanese",
    Láb: 4,
    Marmagassága: 52,
    Neme: "kan",
    Kor: 5,
  },
  {
    Név: "Bizsu",
    Fajta: "Bischon Havanese",
    Láb: 4,
    Marmagassága: 20,
    Neme: "szuka",
    Kor: "4 hónapos",
  },
  {
    Név: "Pamacs",
    Fajta: "Shetlandi Juhászkutya",
    Láb: 4,
    Marmagassága: 60,
    Neme: "szuka",
    Kor: 13,
  },
  {
    Név: "Louis",
    Fajta: "Keverék",
    Láb: 4,
    Marmagassága: 70,
    Neme: "kan",
    Kor: 11,
  },
  {
    Név: "Bogi",
    Fajta: "Keverék",
    Láb: 4,
    Marmagassága: 50,
    Neme: "szuka",
    Kor: 15,
  },
  {
    Név: "Pufi",
    Fajta: "Keverék",
    Láb: 4,
    Marmagassága: 50,
    Neme: "kan",
    Kor: 17,
  },
];


function init() {
  const ARTICLE = document.querySelectorAll("article");
  /** Írjuk ki divekbe és azon belül p tagbe a kutyák fajtáját */
  let txt = osszeallit();
  // itt helyezzük bele az article elembe
  ARTICLE[0].innerHTML = txt;
  const TABLE = document.querySelectorAll("table");
  let txt2 = tabla();
  TABLE[0].innerHTML = txt2;
  const FORM = document.querySelectorAll("form");
  let txt3 = urlap();
  FORM[0].innerHTML = txt3;
}

function osszeallit() {
  // összállítjuk azt a szöveges tartalmat, ami a HTML kódot jelenti
  let txt = "";
  for (let index = 0; index < kutyaLista.length; index++) {
    txt += `<div>`;
    for (const kulcs in kutyaLista[index]) {
      txt += ` <p>
                ${kulcs}: ${kutyaLista[index][kulcs]}
              </p>`;
    }
    txt += `</div>`;
  }
  console.log(txt);
  return txt;
}

function tabla() {
  let txt2 = "<table><thead><tr>";
  for (const kulcs in kutyaLista[0]) {
    txt2 += `<th>${kulcs} <br> <button onclick="toggleSortDirection('${kulcs}')">Sorrend</button></th>`;
  }
  txt2 += `</tr></thead><tbody>`;
  for (let index = 0; index < kutyaLista.length; index++) {
    txt2 += `<tr>`;
    for (const kulcs in kutyaLista[index]) {
      txt2 += `<td>${kutyaLista[index][kulcs]}</td>`;
    }
    txt2 += `</tr>`;
  }
  txt2 += "</tbody></table>";
  return txt2;
}

let sortDirections = {};

function toggleSortDirection(kulcs) {
  if (sortDirections[kulcs] === "asc") {
    sortDirections[kulcs] = "desc";
  } else {
    sortDirections[kulcs] = "asc";
  }
  sortTable(kulcs, sortDirections[kulcs] === "asc");
}

function sortTable(kulcs, novekvo) {
  let sorrend = Object.keys(kutyaLista[0]).indexOf(kulcs);
  let table, rows, eldontes, i, x, y, shouldSwitch;
  table = document.querySelector("table");
  eldontes = true;
  while (eldontes) {
    eldontes = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[sorrend];
      y = rows[i + 1].getElementsByTagName("td")[sorrend];
      if (
        novekvo
          ? x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()
          : x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()
      ) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      eldontes = true;
    }
  }
}
/** 
function urlap() {
  let txt3 = "<form>";
  txt3 = "<label for='nev'>Kutya neve</label><br>";
  txt3 = "<input type='text' id='nev' name='nev'></input>";
  txt3 = "<label for='fajta'>Kutya fajtája</label><br>";
  txt3 = "<input type='text' id='fajta' name='fajta'></input>";
  txt3 = "<label for='labakszama'>Kutya lábának száma</label><br>";
  txt3 = "<input type='number' id='labakszama' name='labakszama'></input>";
  txt3 = "<label for='magassag'>Kutya marmagassága</label><br>";
  txt3 = "<input type='number' id='magassag' name='magassag'></input>";
  txt3 = "<label for='neme'>Kutya neme</label><br>";
  txt3 = "<input type='text' id='neme' name='neme'></input>";
  txt3 = "<label for='kor'>Kutya kora</label><br>";
  txt3 = "<input type='number' id='kor' name='kor'></input>";
  txt3 = "</form>";
  return txt3;
}
*/

function urlap() {
  let txt3 = "<form>";
  for (const kulcs in kutyaLista[0]) {
    txt3 += `<th>${kulcs}</th>`;
    if (typeof kutyaLista[0][kulcs] === "number") {
      txt3 += "<input type='number' id='"+kulcs+"' name='"+kulcs+"'></input><br>";
    } else {
      txt3 += "<input type='text' id='"+kulcs+"' name='"+kulcs+"'></input><br>";
    }
  }
  txt3 += "<input type='submit' value='Submit' onclick='tabla()'></input>";
  txt3 += "</form>";
  console.log(txt3);
  return txt3;
}




/** 
let txt = "";
  for (let index = 0; index < kutyaLista.length; index++) {
    txt += `<div>`;
    for (const kulcs in kutyaLista[index]) {
      txt += ` <p>
                ${kulcs}: ${kutyaLista[index][kulcs]}
              </p>`;
    }
    txt += `</div>`;
  }
  console.log(txt);
  return txt;
  */