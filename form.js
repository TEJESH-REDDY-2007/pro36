class Form {
    constructor() {
      
    }
  
    display(){
      var title = createElement('h2')
      title.html("FEED YOUR DOG");
      title.position(550, 40);
      
      var input = createInput("Name - ");
      var button = createButton('Play');
      
      input.position(550, 160);
      button.position(660, 200);
  
      button.mousePressed(function(){
        input.hide();
        button.hide();
  
        var name = input.value();
        
        var greeting = createElement('h3');
        greeting.html("Are You Ready To Take Care Of Your Dog " + name )
        greeting.position(370, 200)
      });
  
    }
  }