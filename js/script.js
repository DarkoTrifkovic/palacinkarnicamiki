// HERO SLIDER
const images = [
  'img/hero0.JPG',
  'img/hero1.JPG',
  'img/hero2.jpg',
  'img/hero3.jpg',
  'img/hero4.jpg'
];

const img = document.getElementById("hero");

function displayImage(x) {
  img.style.backgroundImage = "url(" + images[x] + ")";

}

function startTimer() {
  let x = 0;
  displayImage(x);
  setInterval(function() {
    x = x + 1 >= images.length ? 0 : x + 1;
    displayImage(x);
  }, 5000);
}

// gallery
const gallery = document.querySelector('.gallery');
const gallery_img = document.createElement('img');

for (let i = 1; i < 27; i++) {
  const gallery_img = document.createElement('img');
  gallery_img.src = "img/img" + [i] + ".jpg"
  gallery.appendChild(gallery_img);
}

// MENU

// slatke palacinke

const menuArr1 = [
  { naziv : 'Beli krem', cena : '165.00'},
  { naziv : 'Eurokrem', cena : '175.00'},
  { naziv : 'Crni krem', cena : '165.00'},
  { naziv : 'Crna palačinka', cena : '140.00'},
  { naziv : 'Crna palačinka + crni krem', cena : '180.00'},
  { naziv : 'Crna palačinka + beli krem', cena : '180.00'},
  { naziv : 'Palačinka vanila', cena : '210.00'},
  { naziv : 'Beli krem - plazma', cena : '190.00'},
  { naziv : 'Krem - plazma', cena : '190.00'},
  { naziv : 'Marmelada (Mešano voće)', cena : '160.00'},
  { naziv : 'Marmelada (Kajsija)', cena : '160.00'},
  { naziv : 'Džem od šljiva', cena : '165.00'},
  { naziv : 'Nutella', cena : '190.00'},
  { naziv : 'Nutella - plazma', cena : '220.00'},
  { naziv : 'Nutella (plazma, banana)', cena : '260.00'},
  { naziv : 'Kinder', cena : '250.00'},
  { naziv : 'Snickers (krem, plazma, kikiriki, šlag)', cena : '250.00'},
  { naziv : 'Bounty (krem, kokos, slag, bounty čokoladica)', cena : '240.00'},
  { naziv : 'Svarcvald (krem, višnja, plazma, šlag)', cena : '250.00'},
  { naziv : 'Cheesecake (krem, višnje, pavlaka)', cena : '260.00'},
  { naziv : 'Rafaelo (beli krem, kokos, bademi)', cena : '240.00'},
  { naziv : 'Ferrero Rocher (nutella, lešnik, plazma)', cena : '270.00'},
  { naziv : 'Bueno (Bueno krem)', cena : '290.00'},
  { naziv : 'Čoko Bueno (Euro krem, kinder bueno čokoladica)', cena : '390.00'},
  { naziv : 'Milka bela čokolada', cena : '225.00'},
  { naziv : 'Milka noissete', cena : '225.00'},
  { naziv : 'Milka mlečna', cena : '225.00'},
  { naziv : 'Miki Maus - specijal (krem, plazma u mleku, banana, kokos, čokolada, šlag, toping čokolada)', cena : '310.00'},
  { naziv : 'Posna (posni krem)', cena : '160.00'},
  { naziv : 'Posna (posni krem, banana)', cena : '195.00'},
  { naziv : 'Čoko Bomba (Euro krem, čoko kuglice, šlag, kinder štapići, ferero štapići, toping čokolada)', cena : '380.00'},
  { naziv : 'Voćna Bomba (Beli krem, višnje, maline, kupine, banana, šlag, toping šumsko voće)', cena : '380.00'},
  { naziv : 'Vanila Bomba (Vanila krem, višnje, banana, šlag, plazma)', cena : '390.00'},
  { naziv : 'Kinder Bomba (Bueno krem, kinder bueno čokoladice, kinder čokoladice)', cena : '450.00'}
];

// Slane palacinke

const menuArr2 = [
  { naziv : 'Pizza (pizza šunka, pizza sos, sir, šampinjoni)', cena : '275.00'},
  { naziv : 'Kulen (kulen, sir, šampinjoni)', cena : '295.00'},
  { naziv : 'Šunka (šunka, sir, šampinjoni)', cena : '290.00'},
  { naziv : 'Suvi vrat (suvi vrat, sir, šampinjoni)', cena : '290.00'},
  { naziv : 'Posna (tunjevina)', cena : '240.00'},
  { naziv : 'Miki Maus - specijal (šunka, kulen, suvi vrat, sir, šampinjoni)', cena : '330.00'},
  { naziv : 'Miki Maus - slaninica (dimljena slanina, jaja, sir, šampinjoni)', cena : '380.00'},
  { naziv : 'Mini doručak (šunka, sir, 2 jaja, 2 tost hleba)', cena : '175.00'},
  { naziv : 'Miki doručak (dupla šunka, sir, 3 jaja, kulen, 2 tost hleba)', cena : '275.00'},
  { naziv : 'Gratis dodatci (kečap, pavlaka, ajvar, senf, majonez, masline, origano)', cena : ' '}
];


// waffle

const menuArr3 = [
  { naziv : 'Marmelada', cena : '200.00'},
  { naziv : 'Eurokrem', cena : '210.00'},
  { naziv : 'Beli krem', cena : '210.00'},
  { naziv : 'Krem', cena : '210.00'},
  { naziv : 'Krem - plazma', cena : '225.00'},
  { naziv : 'Nutella', cena : '215.00'},
  { naziv : 'Nutella - plazma', cena : '235.00'},
  { naziv : 'Kinder', cena : '250.00'},
  { naziv : 'Snickers (krem, plazma, kikiriki, šlag)', cena : '250.00'},
  { naziv : 'Svarcvald (krem, višnja, plazma, šlag)', cena : '250.00'},
  { naziv : 'Cheesecake (krem, višnja, pavlaka)', cena : '250.00'},
  { naziv : 'Bounty (krem, kokos, slag, bounty čokoladica)', cena : '230.00'},
  { naziv : 'Rafaelo (beli krem, kokos, bademi)', cena : '230.00'},
  { naziv : 'Ferrero Rocher (nutella, lešnik, plazma)', cena : '260.00'},
  { naziv : 'Miki Maus - specijal (krem, plazma u mleku, banana, kokos, čokolada, šlag, toping čokolada)', cena : '260.00'}
];


// Izbor po tvom ukusu

const menuArr4 = [
  { naziv : 'Prazna palačinka', cena : '130.00'},
  { naziv : 'Krem', cena : '45.00'},
  { naziv : 'Beli krem', cena : '45.00'},
  { naziv : 'Eurokrem', cena : '50.00'},
  { naziv : 'Nutella', cena : '65.00'},
  { naziv : 'Linolada', cena : '65.00'},
  { naziv : 'Linolada bela', cena : '65.00'},
  { naziv : 'Marmelada mešano voće', cena : '45.00'},
  { naziv : 'Marmelada kajsija', cena : '45.00'},
  { naziv : 'Džem od šljiva', cena : '40.00'},
  { naziv : 'Voće (višnje / ananas / banana / malina / kupina)', cena : '45.00 / 50.00 / 50.00 / 60.00 / 60.00'},
  { naziv : 'Čokoladice (kinder / kinder bueno / mars / snickers / Bounty)', cena : '60.00 / 100.00 / 45.00/45.00 / 45.00'},
  { naziv : 'Keks (plazma / plazma u mleku / oreo / jaffa)', cena : '35.00 / 65.00 / 60.00 / 60.00'},
  { naziv : 'Nadevi (višnja / jabuka / malina / šumsko voće)', cena : '45.00 / 35.00 / 45.00 / 45.00'},
  { naziv : 'Orašasti plodovi (lešnik / kikiriki / bademi / orasi)', cena : '55.00 / 45.00 / 45.00 / 55.00'},
  { naziv : 'Ostalo (šlag / čoko mrvice / čoko bombonice / kakao / kokos / med)', cena : '40.00 / 20.00 / 25.00 / 20.00 / 25.00 / 50.00'},
  { naziv : 'Džem od šljiva', cena : '40.00'},
  { naziv : 'Piće( Coca-Cola, Knjaz Miloš, Rosa)', cena : ' '}
];

// Populate tables with content

function createTable(table, arr) {
  var e = document.getElementById(table);
  console.log(e);
  
  for (let i = 0; i < arr.length; i++) {
    e.innerHTML += `<tr>
                      <td>${arr[i].naziv}</td>
                      <td>${arr[i].cena}</td>
                    </tr>` 
  }
}

createTable('table-1', menuArr1);
createTable('table-2', menuArr2);
createTable('table-3', menuArr3);
createTable('table-4', menuArr4);

// Navbar

// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

// smooth scroll
$('#navbar a, .hero_button').on('click', function(e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;
    console.log(hash);

    console.log();
    var position = $(hash).offset().top - 100;
    
    
    $('html, body')
      .animate({
        scrollTop: position
      }, 800);
  }
});


var menudisplay = false;

function showMenu() {
  console.log(document.getElementById("ham").src);
  
  var menucol = document.getElementsByClassName("menu-item");
  if (menudisplay) {
    for (let i = 0; i < menucol.length; i++) {
      menucol[i].style.display = "none";
      document.getElementById("ham").src = "img/ham.png";
    }
    menudisplay = false;
  } else {
    for (let i = 0; i < menucol.length; i++) {
      menucol[i].style.display = "block";
      document.getElementById("ham").src = "img/x.png";
    }
    menudisplay = true;
  }
  
  
}
