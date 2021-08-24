let GameManager = {
    setGameStart: function (name_hero) {
        this.resetGame(name_hero);
        this.setPreFight();
    },
    resetGame: function (name_hero) {
        switch (name_hero) {
            case "Dragon Knight":
                player1 = new Player(name_hero, 500, 200, 6, 22, 16, 14);
                break;
            case "Slark":
                player1 = new Player(name_hero, 480, 200, 2, 18, 18, 14);
                break;
            case "Zeus":
                player1 = new Player(name_hero, 400, 280, 1, 14, 12, 18);
            default:
                break;
        }

        let getInterface = document.querySelector(".game");
        getInterface.innerHTML = "";
        let getPlayer1 = document.querySelector(".player1");
        getPlayer1.innerHTML = '<div class="fight-page"><div class="player1"><img src="images/' + name_hero +
        '.jpeg" alt=' + name_hero + '><div class="hero-content"><h3>' + name_hero + '</h3><p>Health: ' + player1.health + '</p>' +
        '<p>Mana: ' + player1.mana + '</p>' + '<p>Str: ' + player1.str + '</p>' + 
        '<p>Agil: ' + player1.agil + '</p>' + '<p>Int: ' + player1.intel + '</p>' + '<p>Armor: ' + player1.armor + '</p>' +'</div></div></div>';
    },
    setPreFight: function() {
        let getFindMatch = document.querySelector(".find-match");
        getFindMatch.innerHTML = '<a href="#" onclick="GameManager.setFight()"><button>Find Game!</button></a>';
    },
    setFight: function() {
        // getFindMatch.innerHTML = "";
        player2 = new Player("Zeus", 400, 280, 1, 14, 12, 18);
        let getPlayertwo = document.querySelector(".player2");
        getPlayertwo.innerHTML = '<img src="images/' + player2.name +
        '.jpeg" alt=' + player2.name + '><div class="hero-content"><h3>' + player2.name + '</h3><p>Health: ' + player2.health + '</p>' +
        '<p>Mana: ' + player2.mana + '</p>' + '<p>Str: ' + player2.str + '</p>' + 
        '<p>Agil: ' + player2.agil + '</p>' + '<p>Int: ' + player2.intel + '</p>' + '<p>Armor: ' + player2.armor + '</p></div>';
        let getVS = document.querySelector(".vs");
        getVS.innerHTML = '<h1>VS</h1>'
        let getAttack = document.querySelector(".battle");
        getAttack.innerHTML = '<div><a href="#" onclick="GameManager.attackTime()"><button>Battle!</button></a></div>'

    },
    attackTime: function() {
        alert("It's Time To Battle :)");
    }

}