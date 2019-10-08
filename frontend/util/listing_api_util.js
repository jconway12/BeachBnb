//get listing, get listings, create bnb, destroy bnb, update bnb

export const fetchListing = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/listings/${id}`
  })
}

export const fetchListings = (filters) => {
  // const bounds = filters.bounds;
  // const max_beds = filters.max_beds;
  // const min_beds = filters.min_beds;
  // const city = filters.city;
  // dates?

  return $.ajax({
    method: 'GET',
    url: `api/listings`
  })
}

export const createListing = (formData) => {
  return $.ajax({
    url: "api/listings",
    method: "POST",
    data: formData,
    contentType: false,
    processData: false
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