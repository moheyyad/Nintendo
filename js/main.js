let hrs = document.getElementById('hours');
let min = document.getElementById('mints');
let xm = document.getElementById('xm');
let theGames = document.getElementById("theGames");
let games = document.querySelectorAll(".game")
let infos = document.getElementsByClassName("info");
let pads = document.getElementsByClassName("gamepad");
for(let i = 0; i< pads.length; i++){
    pads[i].style.display = "none";
}


setInterval(()=>{
    let curTime = new Date();

    hrs.innerHTML = (curTime.getHours()>12? curTime.getHours() -12:curTime.getHours())
    min.innerHTML = (curTime.getMinutes()<10?"0":"" ) + curTime.getMinutes();
    xm.innerHTML = (curTime.getHours()>12? ` PM`:` AM`)
},1000)


games.forEach((e) => e.addEventListener("click", function(){
    // if(e.classList.contains("last")){
    //     theGames.style.marginLeft = "-80px"
    // }else{
    //     theGames.style.marginLeft = "80px"

    // }
    switch (e.getAttribute("data-num")) {
        case "0":
            theGames.style.marginLeft = "365px";
            break;
        case "1":
            theGames.style.marginLeft = "80px";
            break;
        case "2":
            theGames.style.marginLeft = "-200px";
            break;
        case "3":
            theGames.style.marginLeft = "-485px";
            break;
        case "4":
            theGames.style.marginLeft = "-770px";
            break;
    
        default:
            break;
    }
    games.forEach(e => e.classList.remove("active"));
    for(let i = 0; i< infos.length; i++){
        infos[i].style.display = "block";
        pads[i].style.display = "none";
    }
    e.classList.add("active");
    infos[e.getAttribute("data-num")].style.display = "none";
    pads[e.getAttribute("data-num")].style.display = "flex";
    document.body.style.backgroundImage = e.getAttribute("data-src")
}) )

