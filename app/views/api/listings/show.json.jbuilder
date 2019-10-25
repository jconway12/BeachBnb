json.partial! "api/listings/listing", listing: @listing
json.photoURL url_for(@listing.photos[0])

resArr = []
@listing.reservations.each do |res|
    resArr << res.id
end

json.reservations resArr