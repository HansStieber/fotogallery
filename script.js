//Array der Fotoalben
let galleryIndia = ['img/india-1.jpg', 'img/india-2.jpg', 'img/india-3.jpg', 'img/india-4.jpg', 'img/india-5.jpg', 'img/india-6.jpg', 'img/india-7.jpg', 'img/india-8.jpg', 'img/india-9.jpg', 'img/india-10.jpg', 'img/india-11.jpg', 'img/india-12.jpg', 'img/india-13.jpg', 'img/india-14.jpg', 'img/india-15.jpg',];

let galleryUSA = ['img/usa-1.jpg', 'img/usa-2.jpg', 'img/usa-3.jpg', 'img/usa-4.jpg', 'img/usa-5.jpg', 'img/usa-6.jpg', 'img/usa-7.jpg', 'img/usa-8.jpg', 'img/usa-9.jpg', 'img/usa-10.jpg', 'img/usa-11.jpg', 'img/usa-12.jpg', 'img/usa-13.jpg', 'img/usa-14.jpg', 'img/usa-15.jpg',];

let gallery = galleryIndia.concat(galleryUSA);


////////////////////////Funktionen zum laden der WebAPP/////////////////////


function load() {
    renderContentHtml();
    loadAll();
}

//Laden aller Seiten
function loadAll() {
    loadGallery();
    loadGalleries();
    loadGalleryIndia();
    loadGalleryUSA();
}

//Laden der Gallerie (Fotos)
function loadGallery() {
    for (let i = 0; i < gallery.length; i++) {
        renderGalleryHtml(i);
    }
}

//Laden der Gallerie Indien
function loadGalleryIndia() {
    for (let i = 0; i < galleryIndia.length; i++) {
        renderGalleryIndiaHtml(i);
    }
}

//Laden der Gallerie USA
function loadGalleryUSA() {
    for (let i = 0; i < galleryIndia.length; i++) {
        renderGalleryUSAHtml(i);
    }
}

//Vollbildmodus öffnen in der Gallerie (Fotos)
function zoomPhotoGallery(i) {
    hideAll();
    renderZoomPhotoGalleryHtml(i);
}

//Vollbildmodus öffnen in der Gallerie Indien
function zoomPhotoIndia(i) {
    hideAll();
    renderZoomPhotoIndiaHtml(i);
}

//Vollbildmodus öffnen in der Gallerie (Fotos)
function zoomPhotoUSA(i) {
    hideAll();
    renderZoomPhotoUSAHtml(i);
}


//Vollbildmodus beenden in der Gallerie (Fotos)
function closeFullScreenGallery() {
    load();
    openGallery();
}

//Vollbildmodus beenden in der Gallerie Indien
function closeFullScreenIndia() {
    load();
    openGalleries();
    openGalleryIndia();
}

//Vollbildmodus beenden in der Gallerie USA
function closeFullScreenUSA() {
    load();
    openGalleries();
    openGalleryUSA();
}

//Nächstes Foto aus Gallerie öffnen
function nextImgGallery(i) {
    if (i < gallery.length - 1) {
        i++;
    } else {
        i = 0;
    }
    zoomPhotoGallery(i);
}

//Nächstes Foto aus Gallerie Indien öffnen
function nextImgIndia(i) {
    if (i < galleryIndia.length - 1) {
        i++;
    } else {
        i = 0;
    }
    zoomPhotoIndia(i);
}

//Nächstes Foto aus Gallerie USA öffnen
function nextImgUSA(i) {
    if (i < galleryUSA.length - 1) {
        i++;
    } else {
        i = 0;
    }
    zoomPhotoUSA(i);
}

//Vorheriges Foto aus Gallerie öffnen
function lastImgGallery(i) {
    if (i > 0) {
    i--; } else {
        i = 29;
    }
    zoomPhotoGallery(i);
}

//Vorheriges Foto aus Gallerie Indien
function lastImgIndia(i) {
    if (i > 0) {
    i--; } else {
        i = 14;
    }
    zoomPhotoIndia(i);
}

//Vorheriges Foto aus Gallerie USA
function lastImgUSA(i) {
    if (i > 0) {
    i--; } else {
        i = 14;
    }
    zoomPhotoUSA(i);
}

//Menü ein und ausblenden bei weiten und schmalen Viewports
function openMenu() {
    document.getElementById('menu').classList.add('menu-translateX');
    document.getElementById('close-menu').classList.remove('hide');
}

function closeMenu() {
    document.getElementById('menu').classList.remove('menu-translateX');
    document.getElementById('close-menu').classList.add('hide');
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////------ClassList.add/remove('hide')------//////////////////////////////////////////////////////////////////////////////////
//Funktionen zum anzeigen/ausblenden der verschiedenen Seiten sowie highlighten der Navigation

//Seite Gallerie
function openGallery() {

    document.getElementById('gallery').classList.remove('hide');
    document.getElementById('galleries').classList.add('hide');
    document.getElementById('gallery-india').classList.add('hide');
    document.getElementById('gallery-usa').classList.add('hide');

    document.getElementById('nav-gallery').classList.remove('hide');
    document.getElementById('nav-galleries').classList.add('hide');
    document.getElementById('nav-gallery-india').classList.add('hide');
    document.getElementById('nav-gallery-usa').classList.add('hide');

    closeMenu();
}

//Seite Alben
function openGalleries() {
    document.getElementById('gallery').classList.add('hide');
    document.getElementById('galleries').classList.remove('hide');
    document.getElementById('gallery-india').classList.add('hide');
    document.getElementById('gallery-usa').classList.add('hide');

    document.getElementById('nav-gallery').classList.add('hide');
    document.getElementById('nav-galleries').classList.remove('hide');
    document.getElementById('nav-gallery-india').classList.add('hide');
    document.getElementById('nav-gallery-usa').classList.add('hide');

    closeMenu();
}

//Seite Gallerie Indien
function openGalleryIndia() {
    document.getElementById('galleries').classList.add('hide');
    document.getElementById('gallery-india').classList.remove('hide');
    document.getElementById('gallery-usa').classList.add('hide');

    document.getElementById('nav-galleries').classList.add('hide');
    document.getElementById('nav-gallery-india').classList.remove('hide');
    document.getElementById('nav-gallery-usa').classList.add('hide');

    closeMenu();
}

//Seite Gallerie USA
function openGalleryUSA() {
    document.getElementById('galleries').classList.add('hide');
    document.getElementById('gallery-usa').classList.remove('hide');
    document.getElementById('gallery-india').classList.add('hide');

    document.getElementById('nav-galleries').classList.add('hide');
    document.getElementById('nav-gallery-usa').classList.remove('hide');
    document.getElementById('nav-gallery-india').classList.add('hide');

    closeMenu();
}

function hideAll() {
    document.getElementById('gallery').classList.add('hide');
    document.getElementById('galleries').classList.add('hide');
    document.getElementById('gallery-india').classList.add('hide');
    document.getElementById('gallery-usa').classList.add('hide');

    document.getElementById('nav-gallery').classList.add('hide');
    document.getElementById('nav-galleries').classList.add('hide');
    document.getElementById('nav-gallery-india').classList.add('hide');
    document.getElementById('nav-gallery-usa').classList.add('hide');
    document.getElementById('menu').classList.add('hide');

    document.getElementById('full-screen').classList.remove('hide');
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////------TEMPLATES------//////////////////////////////////////////////////////////////////////////////////

//Rendern des Content; in diesen werden die Seiten hinein gerendert
function renderContentHtml() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML += `
    <img id="menu-button" class="menu-button" onclick="openMenu()" src="img/icons/menu.png">
    <div id="full-screen" class="full-screen hide">
    </div>
    <div id="menu" class="menu">
        <h1>Fotogallerie</h1>
        <nav id="nav-gallery" class="">
            <a class="current-page" href="#" onclick="openGallery()"><img src="img/icons/gallery-red.png">Fotos</a>
            <a href="#" onclick="openGalleries()"><img src="img/icons/gallery-book.png">Alben</a>
        </nav>
        <nav id="nav-galleries" class="hide">
            <a href="#" onclick="openGallery()"><img src="img/icons/gallery.png">Fotos</a>
            <a class="current-page" href="#" onclick="openGalleries()"><img src="img/icons/gallery-book.png">Alben</a>
            <a id="sub-nav" class="sub-nav" href="#" onclick="openGalleryIndia()">Indien</a>
            <a id="sub-nav" class="sub-nav" href="#" onclick="openGalleryUSA()">USA</a>
        </nav>
        <nav id="nav-gallery-india" class="hide">
            <a href="#" onclick="openGallery()"><img src="img/icons/gallery.png">Fotos</a>
            <a href="#" onclick="openGalleries()"><img src="img/icons/gallery-book.png">Alben</a>
            <a id="sub-nav" class="sub-nav current-page">Indien</a>
            <a id="sub-nav" class="sub-nav" href="#" onclick="openGalleryUSA()">USA</a>
        </nav>
        <nav id="nav-gallery-usa" class="hide">
            <a href="#" onclick="openGallery()"><img src="img/icons/gallery.png">Fotos</a>
            <a href="#" onclick="openGalleries()"><img src="img/icons/gallery-book.png">Alben</a>
            <a id="sub-nav" class="sub-nav" href="#" onclick="openGalleryIndia()">Indien</a>
            <a id="sub-nav" class="sub-nav current-page">USA</a>
        </nav>
        <img id="close-menu" class="close-menu hide" onclick="closeMenu()" src="img/icons/x.png">
    </div>
    <div id="gallery" class="gallery"></div>
    <div id="galleries" class="galleries gallery hide"></div>
    <div id="gallery-india" class="gallery hide"></div>
    <div id="gallery-usa" class="gallery hide"></div>
    `;
}

//Rendern der Seite Gallerie
function renderGalleryHtml(i) {
    document.getElementById('gallery').innerHTML += `
    <div class="img-box" onclick="zoomPhotoGallery(${i})"><img src="${gallery[i]}"></div>
    `;
}

//Rendern der Seite Alben
function loadGalleries() {
    document.getElementById('galleries').innerHTML += `
    <div class="gallery-preview" onclick="openGalleryIndia()"><img src="${galleryIndia[0]}">Fotogallerie Indien</div>
    <div class="gallery-preview" onclick="openGalleryUSA()"><img src="${galleryUSA[3]}">Fotogalerie USA</div>
    `;
}

//Rendern der Seite Gallerie Indien
function renderGalleryIndiaHtml(i) {
    document.getElementById('gallery-india').innerHTML += `
    <div class="img-box" onclick="zoomPhotoIndia(${i})"><img src="${galleryIndia[i]}"></div>
    `;
}

//Rendern der Seite Gallerie USA
function renderGalleryUSAHtml(i) {
    document.getElementById('gallery-usa').innerHTML += `
    <div class="img-box" onclick="zoomPhotoUSA(${i})"><img src="${galleryUSA[i]}"></div>
    `;
}

//Rendern der Fotos auf Seitengröße/Vollbildmodus
function renderZoomPhotoGalleryHtml(i) {
    document.getElementById('full-screen').innerHTML = `<img class="img-full-screen" src="${gallery[i]}">
    <img id="arrow-left" class="arrow-left" onclick="lastImgGallery(${i})" src="img/icons/arrow-left.png">
    <img id="arrow-right" class="arrow-right" onclick="nextImgGallery(${i})" src="img/icons/arrow-right.png">
    <img id="x" class="x" onclick="closeFullScreenGallery()" src="img/icons/x.png">
    `;
}

function renderZoomPhotoIndiaHtml(i) {
    document.getElementById('full-screen').innerHTML = `<img id="img-full-screen" class="img-full-screen" src="${galleryIndia[i]}">
    <img id="arrow-left" class="arrow-left" onclick="lastImgIndia(${i})" src="img/icons/arrow-left.png">
    <img id="arrow-right" class="arrow-right" onclick="nextImgIndia(${i})" src="img/icons/arrow-right.png">
    <img id="x" class="x" onclick="closeFullScreenIndia()" src="img/icons/x.png">
    `;
}

function renderZoomPhotoUSAHtml(i) {
    document.getElementById('full-screen').innerHTML = `<img class="img-full-screen" src="${galleryUSA[i]}">
    <img id="arrow-left" class="arrow-left" onclick="lastImgUSA(${i})" src="img/icons/arrow-left.png">
    <img id="arrow-right" class="arrow-right" onclick="nextImgUSA(${i})" src="img/icons/arrow-right.png">
    <img id="x" class="x" onclick="closeFullScreenUSA()" src="img/icons/x.png">
    `;
}



