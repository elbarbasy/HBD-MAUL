function loadFlower() {
  document.getElementById('flowerFrame').src = 'flower.html';
  document.getElementById('flowerFrame').style.display = 'block';

  // Sembunyikan elemen sebelumnya
  document.querySelector('.greetings').style.display = 'none';
  document.querySelector('.description').style.display = 'none';
  document.querySelector('.button').style.display = 'none';
}


onload = () =>{
        document.body.classList.remove("container");
};

