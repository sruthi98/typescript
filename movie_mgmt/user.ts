import {Theater} from './theatre';
export class Customer{
    viewMovies(){
        Theater.listMovies();
    }

    makeBooking(movieName){
        Theater.confirmBooking('one');
    }
}