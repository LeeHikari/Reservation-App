import axios from 'axios';

export function GetReservations() {
    // javascript promise
    return axios.get(`https://localhost:44393/api/Reservations`);
}
export function GetReservationsId(id: number) {
    // javascript promise
    return axios.get(`https://localhost:44393/api/Reservations/${id}`);
}