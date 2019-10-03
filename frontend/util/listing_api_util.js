//get listing, get listings, create bnb, destroy bnb, update bnb

export const fetchListing = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/listings/${id}`
  })
}

export const fetchListings = () => {
  return $.ajax({
    method: 'GET',
    url: `api/listings`
  })
}

export const createListing = (listing) => {
  return $.ajax({
    method: 'POST',
    url: `api/listings`,
    data: {listing}
  })
}

export const deleteListing = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/listings/${id}`
  })
}

export const updateListing = (listing) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/listings/${listing.id}`,
    data: {listing}
  })
}