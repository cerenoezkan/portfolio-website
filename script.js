/*hamburger menu butonuna tıklandıgında menüyü açıp 
kapatmaya yarar*/

//menu-icon sınıfına sahip öğeyi (hamburger menü ikonunu) seçer
let menuIcon = document.querySelector('.menu-icon');
//navbar sınıfına sahip öğeyi seçer (menüyü temsil eder).
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => { //menuIcon’a tıklanırsa
    menuIcon.classList.toggle('bx-x') //Hamburger menüyü "X" ikonuna çevirir.
    //menuIcon’un sınıfları arasına ‘bx-x’ ekler veya kaldırır.
    navbar.classList.toggle('active');
    //navbar’a ‘active’ sınıfını ekler veya kaldırır.
    //Menünün açılıp kapanmasını sağlar.
}

