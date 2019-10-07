@listings.each do |listing|
json.set! listing.id do 
    json.partial! "api/listings/listing", listing: listing
    json.photoURL url_for(listing.photos[0])
end
end