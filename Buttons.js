class Buttons
{
    constructor()
    {
        this.cButton = createButton("Continue");
    }
    hide()
    {
        this.cButton.hide();
    }
    display()
    {
        this.cButton.position(500,height/2);
        this.cButton.style('width','300px');
        this.cButton.style('height','45px');
        this.cButton.style('background','#49DBB4');
        this.cButton.style('font-size','20px');
        this.cButton.mousePressed(()=>{
            this.cButton.hide();
            gameState = 2;
        })
    }
}