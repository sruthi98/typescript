export class Theater{

    movies=[{
        'name':'one',
        'booked':0,
        }  ,{
           'name':'two',
           'booked':0,
        }];

     listMovies(){
        return this.movies;
    }

    confirmBooking(name){
        let movie=this.movies.filter(function(res){
            if(name==res.name){
                res.booked+=1;
            }
        })
    }

    addMovie(name){
        this.movies.push({'name':name,'booked':0});
    }

    removieMovie(name){
        this.movies.filter(function(res){
            return res.name!=name
        })
    }
    
}