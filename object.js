const myDog = {
    name: 'Mio',
    animal: 'dog',
    nrOfLegs: 4,
    isAlive: true,
    tricks: ['Give Paw', 'Roll over', 'Play Dead'],
    age: 10,
    dogYears: function (age, dogYearsFactor = 7) {
        return age * dogYearsFactor;
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
  
  




    

