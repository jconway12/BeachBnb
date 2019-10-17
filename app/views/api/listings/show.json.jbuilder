json.partial! "api/listings/listing", listing: @listing
json.photoURL url_for(@listing.photos[0])
