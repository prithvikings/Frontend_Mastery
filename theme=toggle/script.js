const themeswitcher=document.querySelector("#themeSwitcher");
const defaulttheme=localStorage.getItem('theme')||'theme-light'; //agar local storage mein kuch store hoga to woh aa jayega otherwise theme-light
settheme(defaulttheme);
themeswitcher.addEventListener('change',(e)=>{
    console.log(e.target.value);
    settheme(e.target.value);
})
function settheme(theme) {
    theme=theme||"theme-light";
    document.documentElement.className=theme;
    themeswitcher.value=theme;
    localStorage.setItem("theme",theme);
}
//theme storing in local storage





