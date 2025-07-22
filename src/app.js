  function calTotalDominios(pronoun, adj, noun, tld){
    pronoun.length * adj.length * noun.length * tld.length;
  }
  
  let pronoun = ['the', 'our'];

  let adj = ['great', 'big'];

  let noun = ['jogger', 'racoon'];

  let tld = ['com', 'es']

  for (let p of pronoun) {
    for (let a of adj) {
        for (let n of noun) {
            for (let t of tld) {
                console.log(`${p}${a}${n}.${t}`);
            }
        }
    }
}
