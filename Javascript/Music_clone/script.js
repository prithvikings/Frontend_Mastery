let arr=[
    {name:"Pehle bhi main", img:"./image/animal.jpg", url:"./songs/Pehle Bhi Main.mp3",duration:"2:55"},
    {name:"Arjan vailly", img:"./image/animal.jpg", url:"./songs/Arjan Vailly Ne.mp3",duration:"3:45"},
    {name:"Jale 2", img:"./image/jale.jpg", url:"./songs/Jale 2.mp3",duration:"2:47"},
    {name:"Ram Siya Ram", img:"./image/ram.jpg", url:"./songs/Ram Siya Ram.mp3",duration:"4:35"},
]
let allSongs=document.querySelector(".all-songs");
let audio= new Audio();
let selectedSong=0;
let poster=document.querySelector(".left");

let playBtn=document.querySelector(".play");
let nextBtn=document.querySelector(".next");
let prevBtn=document.querySelector(".prev");

const datafetch=()=>{
    let clutter="";

arr.forEach((song,index)=>{
    clutter+=`<div class="song-card" id="${index}">
            <div class="part1">
              <img
                src="${song.img}"
                alt=""
              />
              <h2>${song.name}</h2>
            </div>
            <h6>${song.duration}</h6>
          </div>
`;
})
allSongs.innerHTML=clutter;
audio.src=arr[selectedSong].url;
poster.style.backgroundImage=`url(${arr[selectedSong].img})`;
}
datafetch();

allSongs.addEventListener("click",(e)=>{
    selectedSong=e.target.id;
    datafetch();
    audio.play();
})

let flag=false;
playBtn.addEventListener("click",()=>{
    if(flag==false){
    playBtn.innerHTML=`<i class="ri-pause-fill"></i>`;
        datafetch();
        audio.play();
        flag=true;
    }else{
    playBtn.innerHTML=`<i class="ri-play-fill"></i>`;
        datafetch();

        audio.pause();
        flag=false;
    }
});

nextBtn.addEventListener("click",()=>{
    selectedSong++;
    if(selectedSong>=arr.length){
        selectedSong=0;
    }
    audio.src=arr[selectedSong].url;
    poster.style.backgroundImage=`url(${arr[selectedSong].img})`;
    audio.play();
    playBtn.innerHTML=`<i class="ri-pause-fill"></i>`;
    flag=true;
})

prevBtn.addEventListener("click",()=>{
    selectedSong--;
    if(selectedSong<0){
        selectedSong=arr.length-1;
    }
    audio.src=arr[selectedSong],url;
    poster.style.backgroundImage=`url(${arr[selectedSong].img})`;
    audio.play();
    playBtn.innerHTML=`<i class="ri-pause-fill"></i>`;
    flag=true; 
})