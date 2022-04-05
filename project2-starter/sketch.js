let endpoint = "https://api.giphy.com/v1/gifs/search?";
let apiKey = "&api_key=PZGy1JSeozK2Qbw9M9P4RM63wgAppdcj&q=";
let input, button;
let gifImg;


function setup() {
  button = select ('#submit');
  input = select('#search');

  //when the button is pressed, call function ot load gif data
  button.mousePressed(gifAsk);
}   `1`

function gifAsk(){
  let url = endpoint +apiKey + input.value();
  loadJSON(url,getGiphy);
}

function getGiphy(gif){

  //selects a random element from the data[] array
  var randy = random(gif.data);
  //saves the location of the gif
  var foundGif = randy.images.original.url;

  //if an image element already exists, remove the image
  //BEFORE adding one to the page.
  if(gifImg != null)
  {
    gifImg.remove();
  }
  //p5js short-hand for creating and displaying an image element
  gifImg = createImg(foundGif);
  
  //this embeds the image in the div with idea 'gif-area'
  gifImg.parent("gif-area");

}











