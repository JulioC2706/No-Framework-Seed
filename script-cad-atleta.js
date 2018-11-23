  /* VALIDAR layer_email_fale_conosco */
function validaForm()
{   
/*
    // VALIDA NOME
    //COLOCANDO O FORM NUMA VARIAVEL
	var frm = document.forms["frm"];
	
	//COLOCANDO O CAMPO "NOME" NUMA VARIAVEL
	var nome = frm.layer_cad_atleta_nome_resp; //.length
	
    // VALIDA NOME
    if(nome.value.length < 5 || nome.value.length > 30 ){
        alert("Por favor preencha o campo 'Nome' corretamente !!");
		
		//ADICIONA CLASSE DE CSS PRA DEIXAR COM CARA DE ERRO!
		nome.classList.add("erro");
		
        return false;
    }
	else{
		//REMOVE A CLASSE DE ERRO SE O "NOME" ESTIVER CORRETO
		nome.classList.remove("erro");
	}
     
  */  

    //VALIDA NOME
    var pnome = document.forms["frm"].layer_cad_atleta_pnome.value.length;
    if(pnome == 0 ){
        alert("Por favor digite o seu nome!!");
        layer_cad_atleta_pnome.focus();
        return false;
    }
    
    //VALIDA SEGUNDO NOME
    var snome = document.forms["frm"].layer_cad_atleta_snome.value.length;
    if(snome == 0 ){
        alert("Por favor digite o seu sobrenome!!");
        layer_cad_atleta_snome.focus();
        return false;
    }
    
    //VALIDA SOBRENOME
    var sobrenome = document.forms["frm"].layer_cad_atleta_sobrenome.value.length;
    if(sobrenome == 0 ){
        alert("Por favor digite o seu terceiro nome!!");
        layer_cad_atleta_sobrenome.focus();
        return false;
    }
   
    //VALIDA DATA DE NASC
    var dia = document.forms["frm"].layer_dia_atleta.value.length;
    var mes = document.forms["frm"].layer_mes_atleta.value.length;
    var ano = document.forms["frm"].layer_ano_atleta.value.length;
    if(dia == "" || mes == "" || ano == ""){
        alert('Por favor informe a data de nascimento !!');
        layer_dia_atleta.focus();
        return false;
    }

    //VALIDA NACAO
    var nacao = document.forms["frm"].layer_nacao_atleta.value.length;
    if(nacao == ""){
        alert('Por favor selecione uma nação !!');
        layer_nacao_atleta.focus();
        return false;
    }
    
    //VALIDA SEXO
    var sexo = document.forms["frm"].layer_sexo_atleta.value.length;
    if(sexo == ""){
        alert('Por favor selecione seu sexo!!');
        layer_sexo_atleta.focus();
        return false;
    }
   
    //VALIDA RG
     var rgr = document.forms["frm"].layer_cad_atleta_rg.value.length;
        if(rgr != 9 ){
            alert("por favor digite um RG válido!!!!");
            layer_cad_atleta_rg.focus();
            return false;
    }
        
    
	
	//VALIDA CPF
    var cpf = document.forms["frm"].layer_cad_atleta_cpf.value.length;
    if(cpf != 11 ){
        alert("Por favor digite um CPF válido!!");
        layer_cad_atleta_cpf.focus();
        return false;
    }
   
	// VALIDA CEP
	 var cep = document.forms["frm"].layer_cad_atleta_cep.value.length;
    if(cep < 7 || cep > 11 ){
        alert("Por favor digite um CEP válido!!");
        layer_cad_atleta_cep.focus();
        return false;
    }
    
    //VALIDAR RUA
    var rua = document.forms["frm"].rua_atleta.value.length;
    if(rua == 0){
        alert('Por favor digite seu ENDEREÇO!!');
        rua_atleta.focus();
        return false;
    }
   
    
   //VALIDAR BAIRRO
    var bairro = document.forms["frm"].bairro_atleta.value.length;
    if(bairro ==0){
        alert('Por favor digite um BAIRRO !!');
        bairro_atleta.focus();
        return false;
    }
    
    
    //VALIDAR CIDADE
    var cidade = document.forms["frm"].cidade_atleta.value.length;
    if(cidade == 0){
        alert('Por favor digite uma CIDADE !!');
        cidade_atleta.focus();
        return false;
    }
    

    //VALIDAR ESTADO
    var estado = document.forms["frm"].estado_atleta.value.length;
    if(estado == 0){
        alert('Por favor digite um ESTADO !!');
        estado_atleta.focus();
        return false;
    }

    // VALIDA EMAIL
    var layer_cad_atleta_email = document.getElementById('layer_cad_atleta_email').value;
    var layer_cad_atleta_emailFilter = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9-])+.([a-zA-Z0-9]{2,4})+$/;

    if (!layer_cad_atleta_emailFilter.test(layer_cad_atleta_email)) {
        alert("Por favor digite um email válido !!");
        return false;
        layer_cad_atleta_email.focus();

        }
/*  
    //VALIDA EMAIL OP1
    var email = document.forms["frm"].layer_cad_atleta_email.value;
    if(email.length < 5 || email.length > 128 || email.indexOf('@') == -1 || email.indexOf('.') == -1){
        alert('TESTE');
        layer_cad_atleta_email.focus();
        return false;
    }
  
  var email = document.forms["frm"].layer_cad_atleta_email.value;
        var exclude=/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
        var check=/@[w-]+./;
        var checkend=/.[a-zA-Z]{2,3}$/;
    if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){return false;}
    else {return true;}
}
    */
    //VALIDA PASSORD
    var senha = document.forms["frm"].layer_cad_atleta_senha.value.length;
    var senhaconfirm = document.forms["frm"].layer_cad_atleta_confirm_senha.value.length;
    if(senha < 5 || senhaconfirm < 5){
        alert('Por favor digite uma senha !!');
        layer_cad_atleta_senha.focus();
        return false;
    }
    
    //VALIDA NOME DO PAI
    var pnomepai = document.forms["frm"].layer_cad_atleta_pnome_pai.value.length;
    if(pnomepai == 0 ){
        alert("Por favor digite o nome do seu PAI!!");
        layer_cad_atleta_pnome_pai.focus();
        return false;
    }
    
     //VALIDA NOME DO MAE
    var pnomemae = document.forms["frm"].layer_cad_atleta_pnome_mae.value.length;
    if(pnomemae == 0 ){
        alert("Por favor digite o nome da sua MÃE!!");
        layer_cad_atleta_pnome_mae.focus();
        return false;
    }
    
    if(calcIdade(document.getElementById('layer_ano_atleta').value) < 18){
        //VALIDA NOME RESP
        var pnomeresp = document.forms["frm"].layer_cad_atleta_pnome_resp.value.length;
            if(pnomeresp == 0 ){
                alert("Por favor digite o nome do seu RESPONSÁVEL!!");
                layer_cad_atleta_pnome_resp.focus();
                return false;
            }
        //VALIDA RG RESP
        var rgresp = document.forms["frm"].layer_cad_atleta_rg_resp.value.length;
            if(rgresp != 9 ){
                alert("por favor digite um RG do responsável válido!!!!");
                layer_cad_atleta_rg_resp.focus();
                return false;
        }
        //VALIDA CPF
        var cpfresp = document.forms["frm"].layer_cad_atleta_cpf_resp.value.length;
            if(cpfresp != 11 ){
                alert("Por favor digite um CPF do responsável válido!!");
                layer_cad_atleta_cpf_resp.focus();
                return false;
        }
        
        if(validarCPF(document.getElementById("CPF_ATLETA").value) != true){
        alert("Cpf inválido");
        document.getElementById("CPF_ATLETA").focus();
        }
        
        //VALIDA CEP
        var cepresp = document.forms["frm"].layer_cad_atleta_cep_resp.value.length;
            if(cepresp < 8 || cepresp > 10 ){
                alert("Por favor digite um CEP do responsavável válido!!");
                layer_cad_atleta_cep_resp.focus();
                return false;
        }   
        

        //VALIDAR RUA
        var ruaresp = document.forms["frm"].rua_resp.value.length;
        if(ruaresp < 5){
            alert('Por favor digite o ENDEREÇO do seu responsável!!');
            rua_resp.focus();
            return false;
        }
        

    //VALIDAR BAIRRO
        var bairroresp = document.forms["frm"].bairro_resp.value.length;
        if(bairroresp < 5){
            alert('Por favor digite o  BAIRRO do seu responsável!!');
            bairro_resp.focus();
            return false;
        }    

        //VALIDAR CIDADE
        var cidaderesp = document.forms["frm"].cidade_resp.value.length;
        if(cidaderesp < 2){
            alert('Por favor digite a CIDADE do seu responsável !!');
            cidade_resp.focus();
            return false;
        }
        
        //VALIDAR ESTADO
        var estadoresp = document.forms["frm"].estado_resp.value.length;
        if(estadoresp == ""){
            alert('Por favor selecione o ESTADO do seu responsável !!');
            estado_resp.focus();
            return false;
        }
    }
    //VALIDAR CLUBE ATUAL
    var clube = document.forms["frm"].layer_clube_atleta.value.length;
    if(clube == ""){
        alert('Por favor selecione o seu CLUBE atual !!');
        layer_clube_atleta.focus();
        return false;
    }
    
    //VALIDAR MODALIDADE
    var modalidade = document.forms["frm"].layer_cad_atleta_modal.value.length;
    if(modalidade == ""){
        alert('Por favor selecione sua MODALIDADE !!');
        layer_cad_atleta_modal.focus();
        return false;
   }
    
    //VALIDAR ARREMESSO
    var arremessa = document.forms["frm"].layer_cad_atleta_arremessa.value.length;
    if(arremessa == ""){
        alert('Por favor selecione sua MÃO PREFERIDA PARA ARREMESSO !!');
        layer_cad_atleta_arremessa.focus();
        return false;
   }
   
   //VALIDAR REBATE
   var arremessa = document.forms["frm"].layer_cad_atleta_rebate.value.length;
   if(arremessa == ""){
       alert('Por favor selecione sua MÃO PREFERIDA PARA REBATE !!');
       layer_cad_atleta_rebate.focus();
       return false;
  }

   //VALIDAR POSICAO
   var posicao = document.forms["frm"].layer_cad_atleta_position.value.length;
   if(posicao == ""){
       alert('Por favor selecione sua POSIÇãO !!');
       layer_cad_atleta_position.focus();
       return false;
   }


    //VALIDA CHECKBOXs
    var ckbox_array = document.getElementById('cb1');
        if (ckbox_array.checked==false){
            alert('O '+ckbox_array.type+' '+'de autorização de uso de imagem não está marcado!');
            return false;
        }
    
    var ckbox_array = document.getElementById('cb2');
        if (ckbox_array.checked==false){
            alert('O '+ckbox_array.type+' '+'de autorização para cadastro não está marcado!');
            return false;
        }
    
    var ckbox_array = document.getElementById('cb3');
        if (ckbox_array.checked==false){
            alert('O '+ckbox_array.type+' '+'de concordância com os termos não está marcado!');
            return false;
        }
  


    return true;
}

/* --------------------------------------------------------- */
/* Máscaras TEL */
function mascara(o,f){
    v_obj=o;
    v_fun=f;
    setTimeout("execmascara()",1);
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value);
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}

//MASCARA CPF
function mascaraCPF(o,f){
    v_obj=o;
    v_fun=f;
    setTimeout("execmascaracpf()",1);
}
function execmascaracpf(){
    v_obj.value=v_fun(v_obj.value);
}
function mcpf(v){
    v=v.replace(/\D/g,""); 
    return v;
}


//VALIDA PASSWORD
function valida_Password()
{
    var password = document.getElementById('layer_cad_atleta_senha').value;
    var passwordVerif = document.getElementById('layer_cad_atleta_confirm_senha').value;

    if (!(password == passwordVerif))
        {
        alert('Senhas digitadas não conferem!! Favor digitar a mesma senha em ambos os campos. ');
        return false;
        }

    return true;
}

//VALIDA CEP
function limpa_formulario_cep() 
{
    //Limpa valores do formulário de cep.
    document.getElementById('rua_atleta').value=("");
    document.getElementById('bairro_atleta').value=("");
    document.getElementById('cidade_atleta').value=("");
	document.getElementById('estado_atleta').value=("");
}

function meu_callback(conteudo) 
{
    if(!("erro" in conteudo)) 
        {
        //Atualiza os campos com os valores.
        document.getElementById('rua_atleta').value=(conteudo.logradouro);
        document.getElementById('bairro_atleta').value=(conteudo.bairro);
        document.getElementById('cidade_atleta').value=(conteudo.localidade);
		document.getElementById('estado_atleta').value=(conteudo.uf);
            
        document.getElementById('rua_resp').value=(conteudo.logradouro);
        document.getElementById('bairro_resp').value=(conteudo.bairro);
        document.getElementById('cidade_resp').value=(conteudo.localidade);
		document.getElementById('estado_resp').value=(conteudo.uf);
        } 

    else 
        {
        //CEP não Encontrado.
        limpa_formulario_cep();
        alert("CEP não encontrado.");
        }
}

function pesquisaCep(valor)
{

    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") 
        {
        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) 
            {
            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua_atleta').value="...";
            document.getElementById('bairro_atleta').value="...";
            document.getElementById('cidade_atleta').value="...";
            document.getElementById('estado_atleta').value="...";
			
            document.getElementById('rua_resp').value="...";
            document.getElementById('bairro_resp').value="...";
            document.getElementById('cidade_resp').value="...";
			document.getElementById('estado_resp').value="...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);
            } 

        else 
            {
            //cep é inválido.
            limpa_formulario_cep();
                
            }
        } //end if.

    else 
        {
        //cep sem valor, limpa formulário.
        limpa_formulario_cep();
        }

};

function calcIdade(ano_aniversario){
    var d = new Date,
    ano_atual = d.getFullYear(),

    ano_aniversario = +ano_aniversario,

    quantos_anos = ano_atual - ano_aniversario;

    line = document.getElementById('line-separator2');
    div = document.getElementById('form-cad-mid');
    return quantos_anos;
}

function identificaIdade(ano_aniversario) {
    anos = calcIdade(ano_aniversario);

    if(anos < 18)
    {
        
        line.style.display = '';
        div.style.display = '';
    }
    else if(anos >= 18)
    {
        line.style.display = 'none';
        div.style.display = 'none';
    }
    
}

function geraShortname(){
    var nome = document.getElementById('layer_cad_atleta_pnome');
    var sobrenome = document.getElementById('layer_cad_atleta_sobrenome');
    var cshortname = document.getElementById('layer_cad_atleta_shortname');

    var str = sobrenome.value.toUpperCase()+nome.value.toUpperCase()

    shortname = str.replace(" ", "");

    cshortname.value = shortname;
}

function preencheNomeFed(){
    // XMLHttpRequest = permite realizar 
    // comunicação com o servidor de forma Dinâmica. Por "Debaixo dos panos".
    var xmlHttp = new XMLHttpRequest();
    // onreadystatechange = Toda vez que a propriedade readystate for alterada
    // esse evento é chamado
    xmlHttp.onreadystatechange = function() {
    // readyStateSão os passos que o servidor segue para receber e retornar as informações
      // Quando o servidor estiver pronto e se status for igual a 200
      if(this.readyState === 4 && this.status === 200)
      {
        // Campo Federação Associada recebe o retorno do servidor
        document.getElementById("layer_cad_atleta_fed").value = this.responseText;
      }  
    };
    // Abre a requisição
    xmlHttp.open("GET", "cons_fed.php?cnome="+document.getElementById("layer_clube_atleta").value, true);
    
    // Envia requisição
    xmlHttp.send(); 
}

function validarCPF(cpf) {	--> devo retirar esse function? pergunta 1
	cpf = cpf.replace(/[^\d]+/g,'');	 --> tenho q trocar o segundo cpf por (cpf_atleta)? pergunta2
	if(cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;		
	// Valida 1o digito	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		
      if (rev == 10 || rev == 11)		
			rev = 0;	
      if (rev != parseInt(cpf.charAt(9)))		
			return false;		
        
      // Valida 2o digito	
        add = 0;	
        for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	rev = 0;	
    
    if (rev != parseInt(cpf.charAt(10)))return false;		
	   
      
      return true;   
}