var nome = prompt("Digite o seu nome");
        
		alert('olá ' + nome + ' é uma prazer te ver por aqui!')
		var saldo = 100.5; //Float
		function inicio() {

			var escolha = parseInt(prompt('Selecione uma opção 1.) Saldo 2.) Extrato 3.) Saque 4.) Deposito 5.)Trasnferencia 6.)Sair'));
			
			switch(escolha){
				case 1:
					senha()
					ver_saldo();
					break;
				case 2:
					senha()
					extrato();
					break
				case 3:
					senha()
					fazer_saque();
					break;
				case 4:
					fazer_deposito();
					break;
				case 5:
					senha()
					fazer_transferencia();
					break
				case 6:
					sair();
					break;
				default:
					erro();
					break;
			}
			
		}		

		function ver_saldo() {
			alert('Seu saldo atual é: ' + saldo);
			inicio();
		}

		function fazer_deposito() {
			var deposito = parseFloat(prompt('Qual o valor para depósito?'));
			// Not a Number
			if (isNaN(deposito) || deposito === '') {
				alert('Por favor, informe um número:');
				fazer_deposito();
			} else {
				if(deposito <=0){
					alert('Operação não autorizada')
					fazer_deposito()
				}else{
					saldo += deposito;
					ver_saldo();
				}
			}
		}
		function senha(){
			var senha = prompt('digite a senha:') ;

			if( senha != '3589'){
				alert('A senha está incorreta')
				senha()
			}else{
				alert('A senha está correta, pode fazer a operação')
			}
		}

		function fazer_saque() {
			var saque = parseFloat(prompt('Qual o valor para saque?'));
			if (isNaN(saque) || saque === '') {
				alert('Por favor, informe um número:');
				fazer_saque();
			} else {
				if (saque <=0 || saque > saldo){
					alert('operação não realizada')
					fazer_saque();
				}else {
					saldo -= saque;
					alert('Você acaba de sacar ' + saque)
					ver_saldo();
				}
				
				
			}
		}

		function extrato(){
		
		var extrato = [
			'carro - 1R$ \n' , 'cachorro - 3000R$ \n' , 'video-game - 1500R$ \n' , 'viagem pra lua - 2000R$\n'
			]
            alert(extrato)
			inicio();
		}

		function fazer_transferencia(){
			var conta = parseFloat(prompt('informe o Número da conta:')) ;
			if (isNaN(conta) || conta === '') {
				alert('Por favor, informe um número:');
				fazer_transferencia();
			}
			var transferencia = parseFloat(prompt('Qual o valor para Fazer a transferencia?'));
			if (isNaN(transferencia) || transferencia === '') {
				alert('Por favor, informe um número:');
				fazer_transferencia();
			} else {
				if (transferencia <=0 || transferencia > saldo){
					alert('operação não realizada')
					fazer_transferencia();
				}else {
					saldo -= transferencia;
					alert('Você acaba de transferir ' + transferencia + ' para conta ' + conta)
					ver_saldo();
				}
			}
		}

		function erro() {
			alert('Por favor, informe um número entre 1 e 6');
			inicio();
		}

		function sair() {
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
				alert(nome + ' foi um prazer ter você por aqui!')
				window.close();
			} else {
				inicio();
			}
		}

		
		
		inicio();