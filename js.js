function cvPrint() {
    window.print();
}


function addwe(){
    
    let node = document.createElement("textarea")
    let change = document.getElementById("wex")
    let chil = document.getElementById("chil")
    node.classList.add("obj")
    node.classList.add("wex")
    node.classList.add("form-control")
    node.setAttribute('placeholder', 'Enter Here')
    chil.append(node)
}

function changLang (){
    let node = document.createElement("input")
    let chil = document.getElementById("chillang")
    node.classList.add("form-control")
    node.classList.add("mt-2")
    node.classList.add("language")
    node.setAttribute("placeholder", "Enter Here")
    chil.append(node)
}


function adqu() {
    let node = document.createElement("textarea")
    let chil = document.getElementById("adqui")
    node.classList.add("quc")


    node.classList.add("form-control")
    node.classList.add("obj")
    node.setAttribute("placeholder", "Enter Here")
    chil.append(node)



}

function generateCV (){
    let cvt = document.getElementById("nord")
    let inp = document.getElementById("inp1")
    cvt.classList.remove("cv-t")
    inp.classList.add("com")
 
    let nam = document.getElementById("fname").value
    let adress = document.getElementById("Adress").value
    let phone = document.getElementById("phone").value
    let email = document.getElementById("email").value
    let desi = document.getElementById("desiFeild").value
    let object = document.getElementById("object").value
    let tnam = document.getElementById("name")
    let tnam2 = document.getElementById("nam");
    let desit = document.getElementById("designa")
    let desit2 = document.getElementById("d")
    let contact = document.getElementById("contact")
    let em = document.getElementById("em")
    let ad = document.getElementById("ad")
    let objt = document.getElementById("objt")
    let adquis = document.getElementsByClassName("quc")
    let langs = document.getElementsByClassName("language")
    let wexs = document.getElementsByClassName("wex")
    tnam.innerText = nam;
    tnam2.innerText = nam;
    desit.innerText = desi;
    desit2.innerText = desi;
    contact.innerText = phone;
    em.innerText = email;
    ad.innerText = adress;
    objt.innerText = object;

    let img = document.getElementById("image-f").files[0]
    console.log(img);
    let reader = new FileReader()
    reader.readAsDataURL(img)
    reader.onloadend = function(){
        document.getElementById("imgtt").src = reader.result;
    }


    let stng = ""
    for( let lan of langs){
        stng +=  `<li> ${lan.value} </li>`;
    }
    document.getElementById("one").innerHTML = stng   
    let stn = ""
    for(let adqui of adquis){
        stn += `<li> ${adqui.value} </li>`;
    }
    document.getElementById("quali").innerHTML = stn;
    let st = ""
    for(let wex of wexs){
        stn+= `<li> ${wex.value} </li>`
    }
    document.getElementById("wee").innerHTML = stn
}


function cvPrint() {
    
}