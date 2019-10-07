export const fetchReservations = userId => {
    return $.ajax({
        method: 'GET',
        url: `api/users/${userId}/reservations`
    })
}

export const fetchRes = id => {
    return $.ajax({
        method: 'GET',
        url: `api/reservations/${id}`
    })
}

export const createRes = res => {
    return $.ajax({
        method: 'POST',
        url: `api/reservations/`,
        data: {reservation: res}
    })
}

export const updateRes = reservation => {
    return $.ajax({
        method: 'PATCH',
        url: `api/reservations/${reservation.id}`,
        data: {reservation}
    })
}

export const deleteRes = id => {
    return $.ajax({
        method: 'DELETE',
        url: `api/reservations/${id}`
    })
}