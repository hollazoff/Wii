export class User extends Object{

        Balance = ''
        Nickname = ''
        Level = ''
        Games = ''
        Achivment = ''+'/12';



    constructor(Balance, Nickname, Level, Games, Achivment){

        super();
        this.Balance = Balance;
        this.Nickname = Nickname;
        this.Level = Level;
        this.Games = Games;
        this.Achivment = Achivment;
    }




}
export let user = new User("1000$","Райн Гослинг","9","87","6");
