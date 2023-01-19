const myDog = {
    name: 'Mio',
    animal: 'dog',
    nrOfLegs: 4,
    isAlive: true,
    tricks: ['Give Paw', 'Roll over', 'Play Dead'],
    dogYears: 10,
    humanYears: function (dogYears, humanYearsFactor = 7) {
        return dogYears * humanYearsFactor;
    }
    

}
function changeImage() {
    let image = document.getElementById("dogImage");
    if (image.src.match("mio1.jpg")) {
      image.src = "mio2.jpg";
    } else {
      image.src = "mio1.jpg";
    }
  }
  
  




    

