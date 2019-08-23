class Movie
{
   public name:String="abc";
   public budget:number=25;
}
class Movie1 extends Movie{
   public hero:String="mahesh";
   public heroine:String="xyz";
}
var m = new Movie();
console.log(m.name);
console.log(m.budget);
var m1 = new Movie1();
console.log(m1.hero);
console.log(m1.heroine);

