const game = {
    team1: 'Bayern Munich', team2: 'Borrussia Dortmund', players: [

        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ], [

            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],],

    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
}; 

//1. Her kamandanin oyunculari ucun ayrica array yaradin: team1 ve team2 adinda.
// let [team1, team2 ] = game.players;
// console.log(team1 ,team2);
//2. Birinci komandanin birinci  oyuncusu qapicidir. Onu goalkeeper adli deyishene teyin edin, 
//diger futbolcular fieldPlayers adli arrayda qalsin...
// let [goalkeeper, ...fieldPlayers] = team1;

// console.log(goalkeeper, fieldPlayers);

//3. Butun oyunculari allPlayers adli arrayda saxliyin (22 nefer)

// let allPlayers = [...team1, ...team2]

//4. Oyunda birinci komandada 3 deyishiklik olub, firstFinalPlayer adli arraya ilkin heyeti ve
//Thiago, Coutinho, Perisic -i elave edin..

// let firstFinalPlayers = [...team1, "thiago", "coutinho"]

// console.log(firstFinalPlayers);

//5. odds adli obyektin deyishenlerini team1 , draw , team2 adli deyishenlere menimsedin
//( nested objects yada sal :) )

// let {odds : {team1 , x : draw , team2}} = game;

// console.log(draw);