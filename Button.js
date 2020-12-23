class Button
{
    constructor()
    {
        this.gButton = createButton("Clara");
        this.bButton = createButton("Tom");
    }
    hide()
    {
        this.bButton.hide();
        this.gButton.hide();
    }
    display()
    {
        this.gButton.position(700,230);
        this.gButton.style('width','200px');
        this.gButton.style('height','25px');
        this.gButton.style('background','#4BE2B7');
        this.gButton.style('font-size','17px');
        this.bButton.position(300,230);
        this.bButton.style('width','200px');
        this.bButton.style('height','25px');
        this.bButton.style('background','#4BE2B7');
        this.bButton.style('font-size','17px');
        this.gButton.mousePressed(()=>{
            this.gButton.hide();
            this.bButton.hide();
            gameState = 1;
            apprentice.visible = false;
            aprentice.x = 100;
        })
        this.bButton.mousePressed(()=>{
            this.bButton.hide();
            this.gButton.hide();
            gameState = 1;
            aprentice.visible = false;
            apprentice.x = 100;
        })   
    }
}