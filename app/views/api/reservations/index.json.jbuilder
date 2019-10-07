@reservations.each do |res|
    json.set! res.id do 
        json.extract! res, :id, :listing_id, :renter_id, :start_date, :end_date, :num_guests
    end
end