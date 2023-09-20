//Menu
class MobileNavBar {
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
    

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards 0.2s`)
        });
    }
    
    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavBar.init();
//FimMenu


function showPackage1(){
    pacoteextend1 = document.getElementsByClassName("pacoteextend")[0]
    pacoteextend2 = document.getElementsByClassName("pacoteextend")[1]
    pacoteextend3 = document.getElementsByClassName("pacoteextend")[2]

    servico1 = document.getElementsByClassName("pacote")[0]
    servico2 = document.getElementsByClassName("pacote")[1]
    servico3 = document.getElementsByClassName("pacote")[2]
    

    if(pacoteextend1.style.display == "flex")
    {
        pacoteextend1.style.display = "none";
        servico1.style.backgroundColor = "rgba(0, 0, 0, 0.37)";
        servico1.style.boxShadow = "2px 2px 2px rgba(49, 49, 49, 0.712)";
    }
    else
    {
        servico1.style.backgroundColor = "rgba(77, 77, 77, 0.37)";
        servico1.style.boxShadow = "5px 5px 5px #FFF";    
        pacoteextend1.style.display = "flex";
        
        pacoteextend2.style.display = "none";
        servico2.style.backgroundColor = "rgba(0, 0, 0, 0.37)";
        servico2.style.boxShadow = "2px 2px 2px rgba(49, 49, 49, 0.712)";
        
        pacoteextend3.style.display = "none";
        servico3.style.backgroundColor = "rgba(0, 0, 0, 0.37)";
        servico3.style.boxShadow = "2px 2px 2px rgba(49, 49, 49, 0.712)";

    }  
}

function showPackage2(){
    pacoteextend1 = document.getElementsByClassName("pacoteextend")[0]
    pacoteextend2 = document.getElementsByClassName("pacoteextend")[1]
    pacoteextend3 = document.getElementsByClassName("pacoteextend")[2]

    servico1 = document.getElementsByClassName("pacote")[0]
    servico2 = document.getElementsByClassName("pacote")[1]
    servico3 = document.getElementsByClassName("pacote")[2]

    if(pacoteextend2.style.display == "flex")
    {
        pacoteextend2.style.display = "none";
        servico2.style.backgroundColor = "rgba(0, 0, 0, 0.37)";
        servico2.style.boxShadow = "2px 2px 2px rgba(49, 49, 49, 0.712)";
    }
    else
    {
        pacoteextend1.style.display = "none";
        servico1.style.backgroundColor = "rgba(0, 0, 0, 0.37)";
        servico1.style.boxShadow = "2px 2px 2px rgba(49, 49, 49, 0.712)";

        pacoteextend2.style.display = "flex";
        servico2.style.backgroundColor = "rgba(77, 77, 77, 0.37)";
        servico2.style.boxShadow = "5px 5px 5px #FFF"; 
        
        pacoteextend3.style.display = "none";
        servico3.style.backgroundColor = "rgba(0, 0, 0, 0.37)";
        servico3.style.boxShadow = "2px 2px 2px rgba(49, 49, 49, 0.712)";
    }  
}

function showPackage3(){
    pacoteextend1 = document.getElementsByClassName("pacoteextend")[0]
    pacoteextend2 = document.getElementsByClassName("pacoteextend")[1]
    pacoteextend3 = document.getElementsByClassName("pacoteextend")[2]

    servico1 = document.getElementsByClassName("pacote")[0]
    servico2 = document.getElementsByClassName("pacote")[1]
    servico3 = document.getElementsByClassName("pacote")[2]

    if(pacoteextend3.style.display == "flex")
    {
        pacoteextend3.style.display = "none";
        servico3.style.backgroundColor = "rgba(0, 0, 0, 0.37)";
        servico3.style.boxShadow = "2px 2px 2px rgba(49, 49, 49, 0.712)";
    }
    else
    {
        pacoteextend1.style.display = "none";
        servico1.style.backgroundColor = "rgba(0, 0, 0, 0.37)";
        servico1.style.boxShadow = "2px 2px 2px rgba(49, 49, 49, 0.712)";
        
        pacoteextend2.style.display = "none";
        servico2.style.backgroundColor = "rgba(0, 0, 0, 0.37)";
        servico2.style.boxShadow = "2px 2px 2px rgba(49, 49, 49, 0.712)";

        pacoteextend3.style.display = "flex";
        servico3.style.backgroundColor = "rgba(77, 77, 77, 0.37)";
        servico3.style.boxShadow = "5px 5px 5px #FFF"; 
    }  
}

//Button Pacotes