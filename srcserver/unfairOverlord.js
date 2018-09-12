//evil computer opponent
function moveAtronic(opponentMove){
  if(opponentMove==1)
    return 2;
  if(opponentMove==2)
    return 3;
  return 1;
}

//random opponent
function randomBot(opponentMove){
  return Math.floor(Math.random() * 3)+1;
}

function calculateResult(opponentMove,myMove){
    //tie
    if(opponentMove===myMove)
      return 0;
    //I have a rock
    if(myMove==1){
      if(opponentMove==2)
        return 1;
      if(opponentMove==3)
        return -1;
    }
    //I have a paper
    if(myMove==2){
      if(opponentMove==3)
        return 1;
      if(opponentMove==1)
        return -1;
    }
    //I have a shotgun(sakset..)
    if(opponentMove==1)
        return 1;
    if(opponentMove==2)
        return -1;
}

function server(req,res){
  const opponentMove = req.body.move;
  const myMove = randomBot(opponentMove);
  const result = calculateResult(opponentMove,myMove)
  res.json({ opponentMove:myMove, playerMove:opponentMove, result:result});
}
module.exports= server;
