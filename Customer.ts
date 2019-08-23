import {Theater} from './Theater';
export class Customer{
    viewMovies(){
        Theater.listMovies();
        
    }

    makeBooking(movieName){
        Theater.confirmBooking('one');
    }
}