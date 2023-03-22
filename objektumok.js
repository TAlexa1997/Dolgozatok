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

/** function init() {
  const kutyaLista = [
    "foxterrier",
    "kuvasz",
    "puli",
    "agár",
    "újfullandi",
    "keverék",
  ];
  const ART = document.querySelector("article");
  ART.innerHTML = "<button> Kutya <button>";
  const gomb = document.querySelector("button");
  gomb.addEventListener("click", function () {
    megnyom(ART, kutyaLista);
  });
}

function megnyom(ART, kutyaLista) {
  ART.innerHTML += kutyaLista[2];
} */

function init() {
  const ARTICLE = document.querySelectorAll("article");
  /** Írjuk ki divekbe és azon belül p tagbe a kutyák fajtáját */
  let txt = osszeallit();
  // itt helyezzük bele az article elembe
  ARTICLE[0].innerHTML = txt;
  const TABLE = document.querySelectorAll("table");
  let txt2 = tabla();
  TABLE[0].innerHTML = txt2,sorrend;
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
  
  let gomb = `<input type="button" id="mybutton" value="Sorrend" onclick ="sorrend(0)" />`
  for (const kulcs in kutyaLista[0]) {
    txt2 += `<th>${kulcs}<br>${gomb}</th> `;
  }
    txt2+= `</thead><tbody>`

  for (let index = 0; index < kutyaLista.length; index++) {
    txt2 += `<tr>`;
    for (const kulcs in kutyaLista[index]) {
      txt2 += `<td>${kutyaLista[index][kulcs]}</td>`;
      console.log(txt2,gomb)
    }
    txt2+=`</tr>`
  }
  txt2 += "</tbody></table>";

  tablazat = txt2,gomb
  console.table(tablazat);
  return tablazat;
  
}

function sorrend(n){
  var table = document.querySelector('table'),
      thead = document.querySelector('thead'),
      tbody = document.querySelector('tbody'),
      csokkeno = [...tbody.rows];
    tbody.innerHTML = '';

  csokkeno.sort((a,b) =>{
    let x = a.getElementsByTagName('td')[n].innerHTML.toLowerCase();
    let y = b.getElementsByTagName('td')[n].innerHTML.toLowerCase();
    return x < y ? -1 : 1 ;
  });
  csokkeno.map ((csokkeno)=>{
    tbody.appendChild(csokkeno);
  })
  
}


