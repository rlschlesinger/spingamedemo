//Constructor function; sets up required properties of our Reel
var Reel = function(stopTime, images){
//Allows each instance of Reel its own timeout
  this.stopTime = stopTime;
  this.value = null;
  this.images= images;
  this.speed = 500;
}

Reel.prototype.spin = function (){
  var self = this;
  //Create timeout for duration of stopTime
  var index = 0;
  // Iterate through image array for duration of stopTime
  var spinning = setInterval(function(){
    index++;
    index = index % self.images.length;
  }, this.speed);

  setTimeout(function(){
    clearInterval(spinning);
    self.stop(index);
  }, this.stopTime);

}

Reel.prototype.stop = function (i){
  //Stop spinning Reel
  this.value = this.images[i];
  //Set value of Reel
}

var images = ["a", "b", "c", "d"];
var reelCount = 5;
var reels = [];
while (reelCount){
  reels.push(new Reel(5000, images));
  reelCount--;
}

reels.forEach(function(reel){
  reel.spin();
})
