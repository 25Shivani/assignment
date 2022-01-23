function ishoot(player) {
    player.classList.add("dead");
    if(!livingPlayer().length){
        alert("YOU WIN!");
        window.location.reload();
    }
}
function playerAttacksMe(player){
    if(healthPoints > 0) {
    player.classList.add("showing");
    setTimeout( ()=>{
        playerShootsMe(player);
    }, 1000);
    setTimeout(()=> {
player.classList.remove("showing");
    } , 3000);
}
}
function playerShootsMe(player) {
    if(!player.classList.contains("dead")) {
    player.classList.add("shooting");
    updateHealthPoints(healthPoints - 20);
    setTimeout( ()=> {
     player.classList.remove("shooting");   
    }, 200);
}
}

function livingPlayer(){
    return document.querySelectorAll(".player:not(.dead)");
}
function randomPlayerAttacks(){
    var randomPlayerNo = Math.random() * livingPlayer().length;
    randomPlayerNo =Math.floor(randomPlayerNo);
    var player = livingPlayer()[randomPlayerNo];
    var randomDelay = Math.random()* 2000 + 1000;
    setTimeout( ()=> {
        playerAttacksMe(player);
        randomPlayerAttacks();
    }, randomDelay);
}
var healthPoints =100;
function updateHealthPoints(points) {
    healthPoints = points;
    var healthBar = document.querySelector("#healthBar");
    healthBar.style.width = points + "%";
    if(healthPoints < 1 ) {
        alert("Game over!");
        window.location.reload();
    }
}
function draw() {
    Text('score:' +Math.floor(score), '30px Exo' ,10,30,'white');
}    
function update() {
    score+=1/fps;

    }

