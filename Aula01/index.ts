//"Exercicio 1"

// interface IPedido {
//   valorCompra: number;
//   usarCupom: boolean;
// }

// let loja = {
//   frete: 20,
//   cupom: 0.1,
// };

// function calcularPedido({ valorCompra, usarCupom }: IPedido): boolean {
//   if (!valorCompra) {
//     return false;
//   }

//   let frete = loja.frete;

//   if (valorCompra > 300) {
//     frete = 0;
//   }

//   let desconto = 0;

//   if (usarCupom) {
//     desconto = valorCompra * loja.cupom;
//   }

//   const total = valorCompra - desconto + frete;

//   console.log("Valor da compra:", valorCompra);
//   console.log("Desconto:", desconto);
//   console.log("Frete:", frete);
//   console.log("Total:", total);

//   return true;
// }

// calcularPedido({ valorCompra: -30, usarCupom: true });

// "Exercicio 2"

// interface IUsuario {
//   nome: string;
//   idade: number;
//   Senha: string;
// }

// function cadastrarUsuario(usuario: IUsuario): boolean {
//   if (!usuario.nome || !usuario.idade || !usuario.Senha) {
//     return false;
//   }
//   if (usuario.nome.length < 3) {
//     return false;
//   }

//   if (usuario.idade < 18 || usuario.idade > 120) {
//     return false;
//   }

//   if (usuario.Senha.length < 8) {
//     return false;
//   }
  
// console.log("Nathan", usuario.nome);
// console.log("Idade:", usuario.idade);
// console.log("Senha:", usuario.Senha);

//   return true;
// }

// const resultado = cadastrarUsuario({
//   nome: "Nathan",
//   idade: 20,
//   Senha: "12345678"
// });

// console.log("Cadastro válido:", resultado);

// "Exercicio 3"
// interface ISistema {

//    pix: number;
//    saldo: number;
// }

// function processarPagamento(sistema: ISistema): boolean {
//     if (sistema.pix <= 0) { 
//         return false; 
//     } else if (sistema.pix > 5000) {
//         return false;
//     }
//     if (sistema.saldo <=-1 || sistema.saldo - sistema.pix < 0) {

//         return false;
//     }
//     console.log("Valor do Pix:", sistema.pix);
//     console.log("Saldo disponível:", sistema.saldo);
//     return true;    
    
// }
// const resultado = processarPagamento({ pix: 1000, saldo: 6000 });
// console.log("Pagamento processado:", resultado);

