let userAge = prompt(parseInt("Digite sua idade: "))
if (userAge < 18) {
  alert("Você é menor de idade")
} else if (userAge == 18) {
  alert("Voce acabou te atingir a maior idade")
} else {
  alert("Você é maior de idade")
}