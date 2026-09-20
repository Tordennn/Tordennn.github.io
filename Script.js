var MENU = [
    { file: "index.html",   label: "Home" },
    { file: "about.html",   label: "About" },
    { file: "contact.html", label: "Contact" }
];

var HALAMAN = {
    index: {
        judul: "Home",
        footer: "(c) 2026 Fitra Fahrian Anarki"
    },
    about: {
        judul: "About",
        footer: "(c) 2026 Fitra - Portofolio Pribadi"
    },
    contact: {
        judul: "Contact",
        footer: "(c) 2026 Fitra - Portofolio Pribadi"
    }
};

function halamanAktif() {
    var nama = document.body.getAttribute("data-page");
    return HALAMAN[nama] ? nama : "index";
}

function buatJudul(teks) {
    var h1 = document.createElement("h1");
    h1.textContent = teks;
    return h1;
}

function buatMenu(namaHalaman) {
    var ul = document.createElement("ul");
    ul.id = "menu";

    for (var i = 0; i < MENU.length; i++) {
        var li = document.createElement("li");
        var a = document.createElement("a");

        a.href = MENU[i].file;
        a.textContent = MENU[i].label;

        if (MENU[i].file === namaHalaman + ".html") {
            a.className = "active";
        }

        li.appendChild(a);
        ul.appendChild(li);
    }

    return ul;
}

function buatFooter(teks) {
    var div = document.createElement("div");
    div.id = "footer";
    div.textContent = teks;
    return div;
}

function skripHome() {
    alert("Website ini bersifat subject to change.");
    document.body.appendChild(document.createTextNode("Subject to change"));
}

function bangunHalaman() {
    var nama = halamanAktif();
    var data = HALAMAN[nama];
    var isi = document.querySelector(".container");

    document.title = data.judul;

    document.body.insertBefore(buatJudul(data.judul), isi);
    document.body.insertBefore(buatMenu(nama), isi);

    document.body.appendChild(buatFooter(data.footer));

    if (nama === "index") {
        skripHome();
    }
}

bangunHalaman();