@bnbs.each do |bnb|
json.set! bnb.id do 
    json.partial! "api/bnbs/bnb", bnb: bnb
end
end