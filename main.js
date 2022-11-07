if(localStorage.getItem("theme")=="dark"){
    document.querySelector("body").classList.add("dark");
    x=true
}
else if(localStorage.getItem("theme")=="light"){
    document.querySelector("body").classList.add("light");
    x=false
}
else{
    document.querySelector("body").classList.add("dark");
    x=true
    localStorage.setItem("theme", "dark");
}
theme = () => {
    if(x==true){
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
        x=false;
        localStorage.setItem("theme", "light");
    }
    else{
        document.querySelector("body").classList.remove("light");
        document.querySelector("body").classList.add("dark");
        x=true;
        localStorage.setItem("theme", "dark");
    }
}