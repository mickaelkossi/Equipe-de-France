const joueurs = [
    {
        nom : "Hugo Lloris",
        poste : "Gardien de but",
        age : "26 décembre 1988 (35 ans)",
        selections : "145 sélections",
        club : "Tottenham Hotspur",
        championnat : "PL",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/18a65071725f72d79db6a64805e9d61c.png?twic=v1/focus=1162x604"
    },
    {
        nom : "Steve Mandanda",
        poste : "Gardien de but",
        age : "28 mars 1985 (37 ans)",
        selections : "35 sélections",
        club : "Stade Rennais",
        championnat : "L1",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/fb543a60200d8a2456477f27d89c5f68.png?twic=v1/focus=767x363/cover=280x400"
    },
    {
        nom : "Alphonse Aréola",
        poste : "Gardien de but",
        age : "27 février 1993 (29 ans)",
        selections : "5 sélections",
        club: "West Ham United",
        championnat : "PL",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/882b303ab386f5b75f57b6650764149a.png?twic=v1/focus=423x208/cover=280x400"
    },
    {
        nom: "Benjamin Pavard",
        poste: "Défenseur",
        age: "28 mars 1996 (26 ans)",
        selections: "47 sélections",
        club: "Bayern Munich",
        championnat : "Bundes",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/9bd0451affd0f925281b4f6a3e6299e7.png?twic=v1/focus=727x396/cover=280x400"
    },
    {
        nom: "Axel Disasi",
        poste: "Defenseur",
        age :"11 mars 1998 (24 ans)",
        selections :"3 sélections",
        club: "AS Monaco",
        championnat : "L1",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/b8093ba1c53dc75bb50d6b311e9e5350.png?twic=v1/focus=1142x604/cover=280x400"
    },
    {
        nom: "Raphael Varane",
        poste: "Défenseur",
        age: "25 avril 1993 (29 ans)",
        selections: "93 sélections",
        club: "Manchester United",
        championnat : "PL",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/a5e0980a324b898b273fb457f0a6b641.png?twic=v1/focus=746x374/cover=280x400"
    },
    {
        nom: "Jules Koundé",
        poste: "Défenseur",
        age: "12 novembre 1998 (24 ans)",
        selections: "18 sélections",
        club: "FC Barcelone",
        championnat : "Liga",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/d07a15565d9598bcd0418e0a3c0f2f3c.png?twic=v1/focus=1113x523/cover=280x400"
    },
    {
        nom: "William Saliba",
        poste: "Défenseur",
        age: "24 mars 2001 (21 ans)",
        selections: "8 sélections",
        club: "Arsenal",
        championnat : "PL",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/778e9c2ecca751433adcd7a4ea1e849d.png?twic=v1/focus=475x214/cover=280x400"
    },
    {
        nom: "Dayot Upamecano",
        poste: "Défenseur",
        age: "27 octobre 1998 (24 ans)",
        selections: "12 selections",
        club: "Bayern Munich",
        championnat : "Bundes",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/b7c1cacc31333e4584e70183a465cab3.png?twic=v1/focus=661x343/cover=280x400"
    },
    {
        nom: "Lucas Hernandez",
        poste: "Défenseur",
        age: "14 février 1996 (27 ans)",
        selections: "33 sélections",
        club: "Bayern Munich",
        championnat : "Bundes",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/5fbb4804066e0142e35f89b1142e19cf.png?twic=v1/focus=1088x544"
    },
    {
        nom: "Théo Hernandez",
        poste: "Défenseur",
        age: "6 octobre 1997 (25 ans)",
        selections: "13 selections",
        club: "AC Milan",
        championnat : "Serie A",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/4e879c3c0cec8211ee8f1f0f2d518ba1.png?twic=v1/focus=878x539/cover=280x400"
    },
    {
        nom: "Ibrahima Konaté",
        poste: "Défenseur",
        age: "25 mai 1999 (23 ans)",
        selections: "7 sélections",
        club: "Liverpool FC",
        championnat : "PL",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/24cc12c955d798a5383452d60d0dfb04.png?twic=v1/focus=396x149/cover=280x400"
    },
    {
        nom: "Mattéo Guendouzi",
        poste: "Milieu de terrain",
        age: "14 avril 1999 (23 ans)",
        selections: "7 sélections",
        club: "Olympique de Marseille",
        championnat : "L1",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/b9b00ec58e7562b653463b741cc1d2e4.png?twic=v1/focus=802x430/cover=280x400"
    },
    {
        nom: "Aurélien Tchouameni",
        poste: "Milieu de terrain",
        age: "27 janvier 2000 (23 ans)",
        selections: "21 sélections",
        club: "Réal Madrid",
        championnat : "Liga",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/e8daaa443f00347e70990f344b060af5.png?twic=v1/focus=718x353/cover=280x400"
    },
    {
        nom: "Youssouf Fofana",
        poste: "Milieu de terrain",
        age: "10 janvier 1999 (24 ans)",
        selections: "8 sélections",
        club: "AS Monaco",
        championnat : "L1",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/668cdd079ae64dca90d23c9cc29b5e56.png?twic=v1/focus=710x409/cover=280x400"
    },
    {
        nom: "Adrien Rabiot",
        poste: "Milieu de terrain",
        age: "3 avril 1995 (27 ans)",
        selections: "35 sélections",
        club: "Juventus Turin",
        championnat : "Serie A",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/adcce1062989ae896c6a1e3a9034f4e8.png?twic=v1/focus=1182x580/cover=280x400"
    },
    {
        nom: "Jordan Veretout",
        poste: "Milieu de terrain",
        age: "1 mars 1993 (29 ans)",
        selections: "6 sélections",
        club: "Olympique de Marseille",
        championnat : "L1",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/f88606ca9c62bb1909b03ae8fe5cbd45.png?twic=v1/focus=924x427/cover=280x400"
    },
    {
        nom: "Eduardo Camavinga",
        poste: "Milieu de terrain",
        age: "10 novembre 2002 (20 ans)",
        selections: "6 sélections",
        club: "Réal Madrid",
        championnat : "Liga",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/3c90ccf48a782f2241e4fa420f081edf.png?twic=v1/focus=1254x701/cover=280x400"
    },
    {
        nom: "Antoine Griezmann",
        poste: "Attaquant",
        age: "21 mars 1991 (31 ans)",
        selections: "117 sélections",
        club: "Atlético Madrid",
        championnat : "Liga",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/03c6dcee35aa77dcd4338c414104c08c.png?twic=v1/focus=392x198/cover=280x400"
    },
    {
        nom: "Olivier Giroud",
        poste: "Attaquant",
        age: "30 septembre 1986 (36 ans)",
        selections: "120 sélections",
        club: "AC Milan",
        championnat : "Serie A",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/34b05a655d8aec9aeaff910b72e3ad0d.png?twic=v1/focus=920x387/cover=280x400"
    },
    {
        nom: "Kylian Mbappé",
        poste: "Attaquant",
        age: "20 décembre 1998 (24 ans)",
        selections: "36 sélections",
        club: "Paris-Saint-Germain",
        championnat : "L1",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/0b07697065558b5fd8da08f49ab83728.png?twic=v1/focus=743x411/cover=280x400"
    },
    {
        nom: "Ousmane Dembélé",
        poste: "Attaquant",
        age: "15 mai 1997 (25 ans)",
        selections: "35 sélections",
        club: "FC Barcelone",
        championnat : "Liga",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/ca18d3ec4038d8f17cac799e8a451f23.png?twic=v1/focus=1012x570/cover=280x400"
    },
    {
        nom: "Randal Kolo Muani",
        poste: "Attaquant",
        age: "5 décembre 1998 (24 ans)",
        selections: "5 sélections",
        club: "Eintracht Francfort",
        championnat : "Bundes",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/23245955e1923da33c121e1d775704ee.png?twic=v1/focus=854x374/cover=280x400"
    },
    {
        nom: "Kingsley Coman",
        poste: "Attaquant",
        age: "13 juin 1996 (26 ans)",
        selections: "46 sélections",
        club: "Bayern Munich",
        championnat : "Bundes",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/9f364845e5631be3d73ec75404e2c04b.png?twic=v1/focus=1225x583/cover=280x400"
    },
    {
        nom: "Marcus Thuram",
        poste: "Attaquant",
        age: "6 aout 1997 (25 ans)",
        selections: "9 sélections",
        club: "Borussia Mönchengladbach",
        championnat : "Bundes",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/2acf269fe5242a33969e0ea5113f88e3.png?twic=v1/focus=660x290/cover=280x400"
    },
    {
        nom: "Karim Benzema",
        poste: "Attaquant",
        age: "10 décembre 1987 (35 ans)",
        selections: "97 sélections",
        club: "Réal Madrid",
        championnat : "Liga",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/6df6f8c9c5c3b30528a771e24bc6133d.png?twic=v1/focus=616x308"
    },
    {
        nom: "Didier Deschamps",
        role: "Staff technique",
        poste: "Sélectionneur",
        age: "15 octobre 1964 (54 ans)",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/4c51940b9d355f7de4d7cd6e2d6eeccf.png?twic=v1/focus=464x230/cover=280x400"
    },
    {
        nom: "Guy Stephan",
        role: "Staff technique",
        poste: "Entraineur adjoint",
        age: "17 octobre 1956 (66 ans)",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/4a4c6c602b94f6544534547304487808.png?twic=v1/focus=462x197/cover=280x400"
    },
    {
        nom: "Franck Raviot",
        role: "Staff technique",
        poste: "Entraineur des gardiens",
        age: "17 juillet 1973 (49 ans)",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/000f8d600ce980ea3f9d593ed2c68a03.png?twic=v1/focus=459x206/cover=280x400"
    },
    {
        nom: "Cyril Moine",
        role: "Staff technique",
        poste: "Préparateur physique",
        age: "2 janvier 1971 (50 ans)",
        img: "https://fff.twic.pics/https://media.fff.fr/uploads/images/1e8229e1926403514d400ecf56e3dc87.png?twic=v1/focus=390x211/cover=280x400"
    },
]


function genererJoueurs(joueurs) {
    
    for (let joueur of joueurs) {

        const sectionDiv = document.querySelector(".joueurs");

        const joueurDiv = document.createElement("div");

        const joueurImg = document.createElement("img");
        joueurImg.src = joueur.img;

        const joueurNom = document.createElement("h2");
        joueurNom.innerText = joueur.nom;

        const joueurPoste = document.createElement("p");
        joueurPoste.innerText = joueur.poste ?? ("");

        const joueurAge = document.createElement("p");
        joueurAge.innerText = joueur.age;

        const joueurSelections = document.createElement("p");
        joueurSelections.innerText = joueur.selections ?? ("");

        const joueurClub = document.createElement("p");
        joueurClub.innerText = joueur.club ?? ("");

        sectionDiv.style.display = "grid";
        sectionDiv.style.gridTemplateColumns = "1fr 1fr 1fr";
        sectionDiv.style.columnGap = "100px";
        sectionDiv.style.rowGap = "20px";


        sectionDiv.appendChild(joueurDiv);
        joueurDiv.appendChild(joueurNom); 
        joueurDiv.appendChild(joueurImg);
        joueurDiv.appendChild(joueurPoste);
        joueurDiv.appendChild(joueurAge);
        joueurDiv.appendChild(joueurSelections);
        joueurDiv.appendChild(joueurClub);
    }

}

genererJoueurs(joueurs);


const boutonAll = document.querySelector(".btn-all");

boutonAll.addEventListener("click", function() {
    location.reload();
});


const boutonGardiens = document.querySelector(".btn-goal");

boutonGardiens.addEventListener("click", function() {
    const gardiens = joueurs.filter(function(joueur){
        return joueur.poste == ("Gardien de but");
    });
    document.querySelector(".joueurs").innerHTML = "";
    document.querySelector(".titre").innerHTML = "";

    const section = document.querySelector(".titre");
    const div = document.createElement("div");
    const titre = document.createElement("h2");
    titre.innerText = "Gardiens"
    const saut = document.createElement("br")

    div.style.width = "100%";
    div.style.height = "70px";
    div.style.backgroundColor = "black";
    titre.style.color = "white"
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";

    section.appendChild(div);
    div.appendChild(titre);
    div.appendChild(saut);

    genererJoueurs(gardiens);
    
});


const boutonDefenseurs = document.querySelector(".btn-def");

boutonDefenseurs.addEventListener("click", function() {
    const def = joueurs.filter(function(joueur){
        return joueur.poste == ("Défenseur");
    });

    document.querySelector(".joueurs").innerHTML = "";
    document.querySelector(".titre").innerHTML = "";

    const section = document.querySelector(".titre");
    const div = document.createElement("div");
    const titre = document.createElement("h2");
    titre.innerText = "Défenseurs"
    const saut = document.createElement("br")

    div.style.width = "100%";
    div.style.height = "70px";
    div.style.backgroundColor = "black";
    titre.style.color = "white"
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";

    section.appendChild(div);
    div.appendChild(titre);
    div.appendChild(saut);

    genererJoueurs(def);
});


const boutonMilieux = document.querySelector(".btn-mil");

boutonMilieux.addEventListener("click", function() {
    const mil = joueurs.filter(function(joueur){
        return joueur.poste == ("Milieu de terrain");
    });
    document.querySelector(".joueurs").innerHTML = "";
    document.querySelector(".titre").innerHTML = "";

    const section = document.querySelector(".titre");
    const div = document.createElement("div");
    const titre = document.createElement("h2");
    titre.innerText = "Milieux de terrain"
    const saut = document.createElement("br")

    div.style.width = "100%";
    div.style.height = "70px";
    div.style.backgroundColor = "black";
    titre.style.color = "white"
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";

    section.appendChild(div);
    div.appendChild(titre);
    div.appendChild(saut);

    genererJoueurs(mil);
});


const boutonAttaquants = document.querySelector(".btn-att");

boutonAttaquants.addEventListener("click", function() {
    const att = joueurs.filter(function(joueur){
        return joueur.poste == ("Attaquant");
    });
    document.querySelector(".joueurs").innerHTML = "";
    document.querySelector(".titre").innerHTML = "";

    const section = document.querySelector(".titre");
    const div = document.createElement("div");
    const titre = document.createElement("h2");
    titre.innerText = "Attaquants"
    const saut = document.createElement("br")

    div.style.width = "100%";
    div.style.height = "70px";
    div.style.backgroundColor = "black";
    titre.style.color = "white"
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";

    section.appendChild(div);
    div.appendChild(titre);
    div.appendChild(saut);

    genererJoueurs(att);
});


const boutonStaff = document.querySelector(".btn-staff");

boutonStaff.addEventListener("click", function() {
    const staff = joueurs.filter(function(joueur){
        return joueur.role == ("Staff technique");
    });
    document.querySelector(".joueurs").innerHTML = "";
    document.querySelector(".titre").innerHTML = "";

    const section = document.querySelector(".titre");
    const div = document.createElement("div");
    const titre = document.createElement("h2");
    titre.innerText = "Staff Technique"
    const saut = document.createElement("br")

    div.style.width = "100%";
    div.style.height = "70px";
    div.style.backgroundColor = "black";
    titre.style.color = "white"
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";

    section.appendChild(div);
    div.appendChild(titre);
    div.appendChild(saut);

    genererJoueurs(staff);
});


const boutonL1 = document.querySelector(".btn-ligue1");

boutonL1.addEventListener("click", function() {
    const L1 = joueurs.filter(function(joueur){
        return joueur.championnat == ("L1");
    });
    document.querySelector(".joueurs").innerHTML = "";
    document.querySelector(".titre").innerHTML = "";

    const section = document.querySelector(".titre");
    const div = document.createElement("div");
    const titre = document.createElement("h2");
    titre.innerText = "Ligue 1"
    const saut = document.createElement("br")

    div.style.width = "100%";
    div.style.height = "70px";
    div.style.backgroundColor = "black";
    titre.style.color = "white"
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";

    section.appendChild(div);
    div.appendChild(titre);
    div.appendChild(saut);

    genererJoueurs(L1);
});


const boutonPL = document.querySelector(".btn-pl");

boutonPL.addEventListener("click", function() {
    const PL = joueurs.filter(function(joueur){
        return joueur.championnat == ("PL");
    });
    document.querySelector(".joueurs").innerHTML = "";
    document.querySelector(".titre").innerHTML = "";

    const section = document.querySelector(".titre");
    const div = document.createElement("div");
    const titre = document.createElement("h2");
    titre.innerText = "Premier League"
    const saut = document.createElement("br")

    div.style.width = "100%";
    div.style.height = "70px";
    div.style.backgroundColor = "black";
    titre.style.color = "white"
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";

    section.appendChild(div);
    div.appendChild(titre);
    div.appendChild(saut);

    genererJoueurs(PL);
});

const boutonBundes = document.querySelector(".btn-bundes");

boutonBundes.addEventListener("click", function() {
    const bundes = joueurs.filter(function(joueur){
        return joueur.championnat == ("Bundes");
    });
    document.querySelector(".joueurs").innerHTML = "";
    document.querySelector(".titre").innerHTML = "";

    const section = document.querySelector(".titre");
    const div = document.createElement("div");
    const titre = document.createElement("h2");
    titre.innerText = "Bundesliga"
    const saut = document.createElement("br")

    div.style.width = "100%";
    div.style.height = "70px";
    div.style.backgroundColor = "black";
    titre.style.color = "white"
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";

    section.appendChild(div);
    div.appendChild(titre);
    div.appendChild(saut);

    genererJoueurs(bundes);
});


const boutonLiga = document.querySelector(".btn-liga");

boutonLiga.addEventListener("click", function() {
    const liga = joueurs.filter(function(joueur){
        return joueur.championnat == ("Liga");
    });
    document.querySelector(".joueurs").innerHTML = "";
    document.querySelector(".titre").innerHTML = "";

    const section = document.querySelector(".titre");
    const div = document.createElement("div");
    const titre = document.createElement("h2");
    titre.innerText = "Liga"
    const saut = document.createElement("br")

    div.style.width = "100%";
    div.style.height = "70px";
    div.style.backgroundColor = "black";
    titre.style.color = "white"
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";

    section.appendChild(div);
    div.appendChild(titre);
    div.appendChild(saut);

    genererJoueurs(liga);
});


const boutonSeriea = document.querySelector(".btn-seriea");

boutonSeriea.addEventListener("click", function() {
    const seriea = joueurs.filter(function(joueur){
        return joueur.championnat == ("Serie A");
    });
    document.querySelector(".joueurs").innerHTML = "";
    document.querySelector(".titre").innerHTML = "";

    const section = document.querySelector(".titre");
    const div = document.createElement("div");
    const titre = document.createElement("h2");
    titre.innerText = "Serie A"
    const saut = document.createElement("br")

    div.style.width = "100%";
    div.style.height = "70px";
    div.style.backgroundColor = "black";
    titre.style.color = "white"
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";

    section.appendChild(div);
    div.appendChild(titre);
    div.appendChild(saut);

    genererJoueurs(seriea);
});

    