window.addEventListener("load", init);
const kutyaLista = [
    "foxterrier",
    "kuvasz",
    "puli",
    "agár",
    "újfullandi",
    "keverék",
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
  let txt="";
  for (let index =0; index < kutyaLista.length; index++){
    txt += `<div>
                <p>
                    ${kutyaLista[index]}
                </p>
            </div>`
  }
  console.log(txt);
  return txt
}
