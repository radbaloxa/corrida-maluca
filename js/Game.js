class Game 
{
  constructor() {}

  getState() 
  {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state) 
  {
    database.ref("/").update({
      gameState: state
    });
  }

  start() 
  {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("carro1", car1_img);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("carro2", car2_img);
    car2.scale = 0.07;

    cars = [car1, car2];

    // grupo fuels e grupo powerCoins
    
    

    // Adicione o sprite de combustível ao jogo
   

    // Adicione o sprite de moeda ao jogo
    
  }

  // função para criar as moedas e os tanques de combustível
  addSprites(spriteGroup, numberOfSprites, spriteImage, scale) 
  {
   
  }

  handleElements() 
  {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play() 
  {
    this.handleElements();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) 
    {
      image(track, 0, -height * 5, width, height * 6);

      //índice da matriz
      var index = 0;
      for (var plr in allPlayers) 
      {
        //adicione 1 ao índice para cada loop
        index = index + 1;

        //use os dados do banco de dados para exibir os carros nas direções x e y
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;

        cars[index - 1].position.x = x;
        cars[index - 1].position.y = y;

        // código para identificar o jogador atual
        

      }

      // manipulação dos eventos do teclado
      if (keyIsDown(UP_ARROW)) 
      {
        player.positionY += 10;
        player.update();
      }

      drawSprites();
    }
  }

  handleFuel(index) 
  {
    
  }

  handlePowerCoins(index) 
  {
    
  }
}
