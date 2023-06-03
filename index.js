var count = 3;
var cash = "p";
var credit = "k";
var start = prompt("devam etmek ucun Enter duymesine basin");
console.log("Kapital Banka xos gelmisiniz");

var sign = prompt("salam hormetli musderi mumkunse qeydiyyatdan kecin:");
var password = Number(prompt("sifrenizi teyin edin"));
var salary = "maasinizi daxil edin";
while (count > 0) {
  var enter = Number(prompt("sifrenizi daxil edin"));
  if (enter === password) {
    console.log("hesabiniza daxil oldunuz");
    var step = prompt(
      "kredit cekmek isdeyirsinizse 'k',pul cixartmaq isdeyirsinizse 'p'herfini daxil edin"
    );
    if (step === cash) {
    }
  } else {
    count--;
  }
}
var error = prompt("sifrenizi 3 defe yanlis daxil etdiniz");
