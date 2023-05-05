/**
 * Models of hotel
 */

export interface Hotel {
    hotelName: string;
    hotelRating: number;
    rates: {
        regular: {
            weekday: number;
            weekend: number;
        },
        rewards: {
            weekday: number;
            weekend: number;
        }
    }
}
