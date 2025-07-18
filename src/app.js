window.onload = function() {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];

  let action = ['ate', 'peed', 'crushed', 'broke'];

  let what = ['my homework', 'my phone', 'the car'];

  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  
    let nWho = Math.floor(Math.random() * who.length);
    let nAction = Math.floor(Math.random() * action.length);
    let nWhat = Math.floor(Math.random() * what.length);
    let nWhen = Math.floor(Math.random() * when.length);

    finalWho = who[nWho];
    finalAction = action[nAction];
    finalWhat = what[nWhat];
    finalWhen = when[nWhen];

    let finalExcuse = finalWho + " " + finalAction + " " + finalWhat + " " +finalWhen;

    console.log(finalExcuse)

  document.getElementById("excuse").innerHTML = finalExcuse;
  console.log("Hello Rigo from the console!");
};
