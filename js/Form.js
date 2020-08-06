class Form {
constructor(){
    this.input1 = createInput("Name");
    //this.input2 = createInput("Class");
    //this.input3 = createInput("School");
    this.button = createButton("Play");
    this.title = createElement("h1");
    this.greeting = createElement("h1")
}
hide(){
    this.button.hide();
    this.input1.hide();
    //this.input2.hide();
    //this.input3.hide();
    this.title.hide();
  }
  display(){
    this.input1.position(windowWidth/2 - 90,windowHeight/2 - 100);
    this.button.position(windowWidth/2 - 40,windowHeight/2 - 30);
    this.title.html("Quiz Game")
    this.title.position(windowWidth/2-80,windowHeight/2 - 220);

    this.button.mousePressed(()=>{
        this.input1.hide();
        //this.input2.hide();
        //this.input3.hide();
        this.button.hide();
        player.name = this.input1.value();
        //playerCount = playerCount+1;
        player.index = player.index+1;
        player.update();
        //player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name);
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  }

}