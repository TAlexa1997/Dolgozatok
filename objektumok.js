window.addEventListener("load", init);
const kutyaLista = [
  {
    nev: "Teo",
    fajta: "Bischon Havanese",
    láb: 4,
    marmagassága: 52,
    nem: "kan",
    kor: 5,
  },
  {
    nev: "Bizsu",
    fajta: "Bischon Havanese",
    lab: 4,
    marmagassága: 20,
    nem: "szuka",
    kor: "4 hónapos",
  },
  {
    nev: "Pamacs",
    fajta: "Shetlandi Juhászkutya",
    lab: 4,
    marmagassága: 60,
    nem: "szuka",
    kor: 13,
  },
  {
    nev: "Louis",
    fajta: "Keverék",
    lab: 4,
    marmagassága: 70,
    nem: "kan",
    kor: 11,
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
}

function osszeallit() {
  // összállítjuk azt a szöveges tartalmat, amia HTML kódo jelenti
  // console.log(kulcs,kutyaLista[index][kulcs]);
  let txt = "";
  for (let index = 0; index < kutyaLista.length; index++) {
    for (const kulcs in kutyaLista[index]) {
      txt += `<div>
                    <p>
                        ${(kulcs,kutyaLista[index][kulcs[0]])}
                    </p>
                    <p>
                        ${(kulcs, kutyaLista[index][kulcs[1]])}
                    </p>
                    <p>
                        ${(kulcs, kutyaLista[index][kulcs[2]])}
                    </p>
                    <p>
                        ${(kulcs, kutyaLista[index][kulcs[3]])}
                    </p>
                    <p>
                        ${(kulcs, kutyaLista[index][kulcs[4]])}
                    </p>
                    <p>
                        ${(kulcs, kutyaLista[index][kulcs[5]])}
                    </p>
                </div>`;
    }
  }
  for (let index = 0; index < kutyaLista.length; index++) {
    for (const kulcs in kutyaLista[index]) {
        console.log(kulcs,kutyaLista[index][kulcs]);
      }
  }
  
  console.log();
  console.log(txt);
  return txt;

  
}

