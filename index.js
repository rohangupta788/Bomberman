const bombs=[];
let gamepoints=0;
let canplay=true;
function updateGamePoints(){
    const gamepointElement = document.getElementById("gamepoint");
    gamepointElement.innerHTML= "Game Points " + gamepoints;
}

function addGrid(){
    const appElement=document.getElementById('app');
    for(let i=0;i<9;i++){
        const row = document.createElement('div');
        for(let j=0;j<9;j++){
            const index = i*9 +j;
            const column=document.createElement('div');
            column.style.display='inline-block';
            column.style.width='60px';
            column.style.height='60px';
            column.style.border='1px solid black';
            column.style.textAlign="center";
            column.style.verticalAlign="middle";
            column.setAttribute("index",index);

            column.addEventListener("click",function(){
                if(canplay){
                if(bombs.includes(index)){
                    column.innerHTML="💣";
                    column.style.backgroundColor="red";
                    canplay = false;
                }
                else{
                    column.style.background="green";
                    gamepoints++;
                    updateGamePoints();
                }
            }
            })

            row.appendChild(column);
        }
        appElement.appendChild(row);
    }
}

function generateBombs(){
    while(bombs.length <11)
    {
        const randomNum=Math.floor(Math.random()*100);
        if(randomNum<81 && !bombs.includes(randomNum)){
          bombs.push(randomNum);
        }
    }
}

addGrid();
generateBombs();