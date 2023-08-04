function converter() {
    let toChange = document.getElementById('toChange').value;

    let response = []; // Recebe o array das strings em valores decimais
    let total = 0; // Recebe a soma dos valores do array

    // Converte todos os valores para maiusculo
    changeValue = toChange.toUpperCase();

    // Verifica e converte os valores da string
    for (let index = 0; index < changeValue.length; index++) {
        const element = changeValue[index];
        // console.log(element);
        
        switch (element) {
            case "I":
                response.push(1);
                break;
    
            case "V":
                response.push(5);
                break;
                
            case "X":
                response.push(10);
                break;
                
            case "G":
                response.push(50);
                break;
                
            case "C":
                response.push(100);
                break;
                
            case "D":
                response.push(500);
                break;
        
            case "M":
                response.push(1000);
                break;
            
            case "":
                alert('Insira um valor no campo "Número para converter"');
                break;
        
            default:
                response = [];
                alert('Valor "' + toChange + '" desconhecido');
                break;
        }
    }

    // Veririfica se o penultimo numero é menor que o ultimo, serve para numeros como XIV
    if(response[response.length - 1] > response[response.length - 2]){
        let lastNumber = response[response.length - 1] - response[response.length - 2];
        response.pop(); // Remove o ultimo valor
        response.pop(); // Novamente remove o ultimo valor
        response.push(lastNumber); // Adiciona o valor da subtração anteriormente.

        // console.log(lastNumber);
        // console.log(toChange, response);
        // console.log(total);
    }
    
    // Soma os valores dentro do array
    for(var i = 0; i < response.length; i++){
        total += response[i];
    }
    
    return document.getElementById('response').value = total;
}

// Estou tendo problemas para trabalhar com numero como XIV
// Tive dificuldade em fazer a soma dos valores do array

// Bug:
//     1. O código não verifica se o valor que esta atrás (ou a frente) é menor ou maior, isso impede valores 
//        como XIV (14) ser escrito desta forma, apenas desta: XIIII CORRIGIDO!!!

// Esta faltando:
//     Bônus 
//     1. O usuário pode ver a conversão a ser feita automaƟcamente enquanto digita; FEITO
//     2. O usuário pode fazer a conversão de decimal para romano (vice-versa);

// TENTATIVA DE CONVERTER DECIMAL PARA ROMANO
// function inverseConverter() {
//     let toChange = document.getElementById('toChange').value;

//     let response = [];
//     let total = 0;

//     if(toChange < 10 && toChange > 5){
//         console.log("V");
//     }

//     if(toChange < 5){
//         console.log("I");
//     }

// }