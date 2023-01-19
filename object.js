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
  const ageParagraph = document.getElementById("infoAboutMio");
  ageParagraph.innerHTML = `My dog's name is ${myDog.name}, he is a ${myDog.animal} with ${myDog.nrOfLegs} legs and currently ${myDog.isAlive ? 'alive' : 'not alive'}. He knows how to do tricks like ${myDog.tricks.join(', ')}. He is currently ${myDog.dogYears} years old in dog years, which is equivalent to ${myDog.humanYears(myDog.dogYears)} human years.`

  
  




    

