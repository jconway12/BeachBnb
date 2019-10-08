//get listing, get listings, create bnb, destroy bnb, update bnb

export const fetchListing = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/listings/${id}`
  })
}

export const fetchListings = (filters) => {
  const bounds = filters.bounds;
  const max_beds = filters.max_beds;
  const min_beds = filters.min_beds;
  const search_city = filters.city;
  const passed = filters.passed;
  // dates?

  return $.ajax({
    method: 'GET',
    url: `api/listings`,
    data: {bounds, max_beds, min_beds, search_city, passed}
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