window.addEventListener("load", init);
const KUTYAK =[
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
    }
]


function init() {
    // objektum
    //kulcs-értékpárok
  /**console.log(Teo);
  console.log(Bizsu);
  console.log(Teo.nev);
  console.log(Bizsu.nev);
  Bizsu.nev="Müdür";
  console.log(Bizsu.nev);
  Bizsu.oltas="van";
  console.log(Bizsu);
  delete Bizsu.lab;
  console.log(Bizsu);
  Az összes kulcs(objektumok) bejárása forin ciklussal 
  for (const kulcs in Teo) {
   console.log(kulcs,Teo[kulcs]);
  }*/
  for (let index = 0; index < kutyaLista.length; index++) {
    for (const kulcs in kutyaLista[index]) {
        console.log(kulcs,kutyaLista[index][kulcs]);
      }
  }
  
  console.log();

}
