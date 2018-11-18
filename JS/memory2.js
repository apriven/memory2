function newGame() {
    $("#start").css({ "width": "100px", 
    "font-size": "30px", 
    "left":"10px" });
    document.getElementById("intro").style.display = "none";
    document.getElementById("container").style.display = "flex";

    players = [{
        'name': 'Tite',
        'img': 'pics/tite.jpg',
    },
    {
        'name': 'Ronaldo',
        'img': 'pics/ronaldo.jpg',
    },
    {
        'name': 'Cassio',
        'img': 'pics/cassio.jpg',
    },
    {
        'name': 'Paulinho',
        'img': 'pics/paulinho.jpg',
    },
    {
        'name': 'Tevez',
        'img': 'pics/tevez.jpg',
    },
    {
        'name': 'Marcelinho',
        'img': 'pics/marcelinho.jpg',
    },
    ];
    var firstCard = 0;
    var secondCard = 0;
    var counter = 0;
    var previousTarget = null;
    var points = 0;
    var wrong = 0;

    score = $("<section/>");
    score.attr('id', 'score');
    score2 = $("<section/>");
    score2.attr('id', 'score2');

    $('#sidebar').append(score);
    $('#sidebar').append(score2);




    table = $("<section/>");
    table.attr('class', 'table');

    $("#game").append(table);
    setTable = players.concat(players);
    setTable.sort(() => 0.5 - Math.random());


    setTable.forEach(function (player) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.name = player.name;

        const front = document.createElement('div');
        front.classList.add('front');

        const back = document.createElement('div');
        back.classList.add('back');
        card.style.backgroundImage = `url(${player.img})`;

        table.append(card);
        card.append(front);
        card.append(back);
    });
    table.on('click', function (e) {
        clicked = e.target;
        if (clicked.nodeName === 'SECTION' || clicked === previousTarget) { return; }
        if (counter < 2) {
            counter++;
            previousTarget = clicked;
            if (counter === 1) {
                firstCard = clicked.parentNode.dataset.name;
                clicked.classList.add('pick');
            } else {
                secondCard = clicked.parentNode.dataset.name;
                clicked.classList.add('pick');
            }
        }
        if (firstCard !== 0 && secondCard !== 0) {
            if (firstCard === secondCard) {
                setTimeout(match, 1500);
                points++;
                setTimeout(resetCardes, 1500);
            } else {
                wrong++;
                setTimeout(resetCardes, 1000);
            }
            $("#score").text(points);
            $("#score2").text(wrong);
            if (points == 6) {
                win = $("<div/>");
                win.attr('class', 'win');
                $("body").append(win);
                message = $("<div/>");
                message.attr('class', 'message');
                win.append(message);
            }
        }
        previousTarget = clicked;
    });
    function match() {
        const pick = document.querySelectorAll('.pick');
        pick.forEach(function (card) {
            card.classList.add('match');
        });
    }

    // function disableCards() {
    //     firstCard.removeEventListener('click', clicked);
    //     secondCard.removeEventListener('click', clicked);
    //   }

    function resetCardes() {
        firstCard = 0;
        secondCard = 0;
        counter = 0;

        var selected = document.querySelectorAll('.pick');
        selected.forEach(function (card) {
            card.classList.remove('pick');
        });
    };
}   