let menu = document.getElementById("menu");
let register = document.getElementById("register");
let login = document.getElementById("login");
let welcome = document.getElementById("welcome");
let nick = document.getElementById("nick");
let img = document.getElementById("img");
let pics = ['isagi.jpg','Aiku.jpeg', 'Karasu.jpeg','Kyora.jpeg','Otoya.jpeg','Rin.jpeg','Yuki.jpeg'];
let i = 0;
let plus = 'plus';
let minus = 'minus';
let link = document.getElementById ("link");
let errado = document.getElementById("errado");
let perfil = document.getElementById("perfil");
let falta = document.getElementById("falta");
img.setAttribute('src',`./${pics[i]}`);


function changeIcon(symbol) {
    
    switch(symbol) {
        
        case plus:
        
        i = (i === pics.length - 1)? 0 : i + 1;
        
        break;
        
        case minus:
        
        i = (i === 0)? pics.length - 1 : i - 1;
        
        
        break;
    
        
        
        
    };
    
    img.setAttribute('src',`./${pics[i]}`);
     
    
};

// dados pro info

    

function changeDisplay(atual, novo){
    atual.style.display = 'none';
    novo.style.display = 'flex';
    
    
}

function getInfo(){
    let nome = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let icon = pics[i];

    let info = [nome, email, senha, icon];
    
    console.log(info);
    
    return info;
    
    
    
};


function checkInfo () {
    let nome = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    if ( nome === "" || email === "" || senha === ""){
         
        falta.innerHTML = "Faltam dados!";
    } else {
        
        changeDisplay(register, menu);
        falta.innerHTML = " ";
        
    };
    
    
    
    
    
    
    
};





function log () {
    
    let emailCheck = document.getElementById("email2").value;
    let senhaCheck = document.getElementById("senha2").value;
    dados = getInfo();
    perfil.setAttribute('src', `./${dados[3]}`);
    nick.innerHTML = dados[0];

    if(emailCheck = "" || senhaCheck = ""){

        errado.innerHTML = "ERRO: usuário ou senha inválidos.";
        return;

    }
    if (emailCheck === dados[1] && senhaCheck === dados[2]){
        
        changeDisplay(login, welcome);
        
    } else {
        
        errado.innerHTML = "ERRO: usuário ou senha incorretos.";
        
        
    };
    
   
    
    
    
    
    
};





