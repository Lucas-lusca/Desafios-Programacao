let range = document.getElementById('amountCharacters'); // Define a quantidade de caracteres
let value = document.getElementById('amonunt');

let upperCase = document.getElementById('upperCase');
let lowerCase = document.getElementById('lowerCase');

let includeNumbers = document.getElementById('includeNumbers');
let includeSymbols = document.getElementById('includeSymbols');

let generatedPassword = document.getElementById('generatedPassword');

let passwordStrength = document.getElementById('passwordStrength');

let password = [] // Armazena os valores a ser passados para o front

range.addEventListener('input', function() {
  value.textContent = this.value;
});

// Guarda as caracteres
let characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
                  "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Guarda os números
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Guarda os caracteres especiais
let specialCharacters = ["?", "!", "@", "#", "$"];

// Guarda os emojis
let emojis = ["🙂", "😄", "😎", "🤓", "🥰", "😛", "🤔", "😐", "😴", "👋"];

function generator() {
    while (password.length) { // Limpa o array
        password.pop();
    }

    // Adiciona o valor ao password de acordo com o tamanho do range
    for (let index = 0; password.length < range.value; index++) {

        password.push(0); // Adiciona o valor 0 ao password para marcar o tamanho do array
        
        // Verifica se a opção Letra maiuscula esta ativada e adiciona letras maiusculas
        if(upperCase.checked){

            // Seleciona uma casa aleatoria do array e coloca um item desejado
            for (let index = 0; index < parseInt(Math.random() * password.length); index++) {
                password[parseInt(Math.random() * password.length)] = characters[parseInt(Math.random() * characters.length)].toUpperCase();
            }

            // Verifique se há algum campo vazio no array e preenche este campo vazio.
            // É verificado se os números estão incluídos, já que o array é inicialmente preenchido com 0 para demarcar o seu espaço.
            if(password[index] == "" && !includeNumbers.checked){
                password[index] = characters[parseInt(Math.random() * characters.length)].toUpperCase();
            }
        }
        
        // Verifica se a opção letras minusculas esta ativada e adiciona letras minusculas
        if(lowerCase.checked){
            for (let index = 0; index < parseInt(Math.random() * password.length); index++) {
                password[parseInt(Math.random() * password.length)] = characters[parseInt(Math.random() * characters.length)];
            }
            if(password[index] == "" && !includeNumbers.checked){
                password[index] = characters[parseInt(Math.random() * characters.length)];
            }
        }
        
        // Verifica se a opção números esta ativada e adiciona números
        if(includeNumbers.checked){
            for (let index = 0; index < parseInt(Math.random() * password.length); index++) {
                password[parseInt(Math.random() * password.length)] = numbers[parseInt(Math.random() * numbers.length)];
            }
            if(password[index] == ""){
                password[index] = numbers[parseInt(Math.random() * numbers.length)];
            }
        }
        
        // Verifica se a opção caracteres especiais esta ativada e adiciona caracteres especiais
        if(includeSymbols.checked){
            for (let index = 0; index < parseInt(Math.random() * password.length); index++) {
                password[parseInt(Math.random() * password.length)] = specialCharacters[parseInt(Math.random() * specialCharacters.length)];
            }
            if(password[index] == "" && !includeNumbers.checked){
                password[index] = specialCharacters[parseInt(Math.random() * specialCharacters.length)];
            }
        }

        // Verifica se a opção emoji esta ativada e adiciona caracteres emoji
        if(includeEmojis.checked){
            for (let index = 0; index < parseInt(Math.random() * password.length / 2); index++) {
                password[parseInt(Math.random() * password.length)] = emojis[parseInt(Math.random() * emojis.length)];
            }
            if(password[index] == "" && !includeNumbers.checked){
                password[index] = emojis[parseInt(Math.random() * emojis.length)];
            }
        }
    }
    
    generatedPassword.value = password.join('');

    // console.log(password);
    
    // Por conta dos emojis valerem por 2 caracteres, esta verificação deve existir.
    if (parseInt(generatedPassword.value.length) > range.value) {
        // console.log("Limite: " + range.value);
        
        // Remove a quantidade de extra de carácter
        while (parseInt(generatedPassword.value.length) > range.value) {
            password.pop();
            generatedPassword.value = password.join('');
        }

        // O código às vezes faltava 1 carácter, para corrigir isso apenas rodei o script novamente.
        if(parseInt(generatedPassword.value.length) < range.value) {
            // console.log("Faltou");
            generator();
        }

        // console.log(password);
        isStrong(generatedPassword.value.length);
        return generatedPassword.value = password.join('');
    }
    
    
    isStrong(generatedPassword.value.length);
    return generatedPassword.value = password.join('');
}

// deve esperar receber o valor do params
async function isStrong(params) {
    await params;

    if(params < 12){
        passwordStrength.textContent = "Fraca";
    }

    if(params > 12 && params < 24){
        passwordStrength.textContent = "Ok";
    }
    
    if(params > 24 && params < 50){
        passwordStrength.textContent = "Forte!";
    }
    
    if(params > 50){
        passwordStrength.textContent = "Perfeita!";
    }
}

// Copia a senha para a área de tranferência
function copyText() {
    let copiedText = document.getElementById("generatedPassword");
    copiedText.select();
    copiedText.setSelectionRange(0, 999)
    document.execCommand("copy");
    alert("Texto: " + copiedText.value + " copiado");
}

// Bug:
//      Não é possivel ter apenas letras minusculas ou apenas maiusculas. CORRIGIDO!!!