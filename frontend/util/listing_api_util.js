//get listing, get listings, create bnb, destroy bnb, update bnb

export const fetchListing = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/listings/${id}`
  })
}

export const fetchListings = (filters = {}) => {
  const bounds = filters.bounds;
  const max_beds = filters.max_beds;
  const min_beds = filters.min_beds;
  const search_city = filters.city;
  const min_price = filters.min_price;
  const max_price = filters.max_price;
  const date_range = {start_date: filters.start_date, end_date: filters.end_date};

  return $.ajax({
    method: 'GET',
    url: `api/listings`,
    data: {bounds, max_beds, min_beds, search_city, min_price, max_price, date_range}
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