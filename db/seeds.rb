# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Listing.destroy_all
Reservation.destroy_all
Review.destroy_all

demoUser = User.create!(first_name: 'Demo User', last_name: 'Demo User', email: 'demo@bnb.com', password: 'password')
user1 = User.create!(first_name: 'Jesse', last_name: 'Conway', email: 'j@gmail.com', password: "password")
user2 = User.create!(first_name: 'user2', last_name: 'user2', email: 'user2@gmail.com', password: "password")
user3 = User.create!(first_name: 'user3', last_name: 'user3', email: 'user3@gmail.com', password: "password")

# listing1 = Listing.new(city: 'Boston', num_beds: 1, title: 'listing1', owner_id: user1.id, description: "nice", rate: 20, lat: 42.3601, lng: 71.0589)
# listing2 = Listing.new(city: 'Boston', num_beds: 2, title: 'listing2', owner_id: user2.id, description: "nice", rate: 20, lat: 42.3605, lng: 71.0582)
# listing3 = Listing.new(city: 'Boston', num_beds: 5, title: 'listing3', owner_id: user2.id, description: "cooooooool", rate: 20, lat: 42.3608, lng: 71.0581)
# listing4 = Listing.new(city: 'Buenos Aires', num_beds: 3, title: 'listing4', owner_id: user2.id, description: "nice", rate: 20, lat: 42.3608, lng: 71.0580)
# listing5 = Listing.new(city: 'Tokyo', num_beds: 1, title: 'listing5', owner_id: user1.id, description: "blah blah blah blah blah", rate: 20, lat: 42.3601, lng: 71.0589)
# listing6 = Listing.new(city: 'London', num_beds: 1, title: 'listing6', owner_id: user2.id, description: "listeing description", rate: 20, lat: 42.3640, lng: 71.0585)
# listing7 = Listing.new(city: 'Sydney', num_beds: 2, title: 'listing7', owner_id: user2.id, description: "nice", rate: 20, lat: 42.3605, lng: 71.0581)
# listing8 = Listing.new(city: 'New York', num_beds: 1, title: 'listing8', owner_id: user2.id, description: "nice", rate: 20, lat: 42.3654, lng: 71.0510)

listing1 = Listing.new(city: 'Montevideo', num_beds: 1, title: 'Beach front property in Uruguay', owner_id: user1.id, description: "spacious and clean with pool access", rate: 20, lat: -34.936119, lng: -56.159996)
listing2 = Listing.new(city: 'Cartagena', num_beds: 2, title: 'Beach cottage in Cartagena', owner_id: user2.id, description: "close walk to town", rate: 20, lat: 10.394625, lng: -75.551956)
listing3 = Listing.new(city: 'Cabo', num_beds: 5, title: 'Apartment with ocean views', owner_id: user2.id, description: "pool side seating and access to the beach", rate: 20, lat: 22.875107, lng: -109.906824)
listing4 = Listing.new(city: 'Phuket', num_beds: 3, title: 'Relaxed beach getaway', owner_id: user2.id, description: "on the beach with nice outdoor area", rate: 20, lat: 7.839679, lng: 98.357185)
listing5 = Listing.new(city: 'Lagos', num_beds: 1, title: 'Remote beach property', owner_id: user1.id, description: "close to both the beach and city of lagos", rate: 20, lat: 6.423737, lng: 3.459086)
listing6 = Listing.new(city: 'Sydney', num_beds: 1, title: 'Modern apartment overlooking the ocean', owner_id: user2.id, description: "kitchen and outdoor space", rate: 20, lat: -33.695518, lng: 151.311610)
listing7 = Listing.new(city: 'Rio', num_beds: 2, title: 'Apartment near Copacabana', owner_id: user2.id, description: "nice", rate: 20, lat: -22.978758, lng: -43.191549)
listing8 = Listing.new(city: 'Rio', num_beds: 1, title: 'Modern space with easy access to town', owner_id: user2.id, description: "perfect for groups and close to public transportation", rate: 20, lat: -22.988398, lng: -43.192794)

#photos 
listing1.photos.attach(io: File.open("app/assets/images/listing1pic2.jpg"), filename: "listing1pic1.jpg")
listing2.photos.attach(io: File.open("app/assets/images/listing2pic2.jpg"), filename: "listing2pic1.jpg")
listing3.photos.attach(io: File.open("app/assets/images/listing3pic2.jpg"), filename: "listing3pic1.jpg")
listing4.photos.attach(io: File.open("app/assets/images/listing4pic2.jpg"), filename: "listing4pic1.jpg")
listing5.photos.attach(io: File.open("app/assets/images/listing5pic2.jpg"), filename: "listing5pic1.jpg")
listing6.photos.attach(io: File.open("app/assets/images/listing6pic2.jpg"), filename: "listing6pic1.jpg")
listing7.photos.attach(io: File.open("app/assets/images/listing7pic2.jpg"), filename: "listing7pic1.jpg")
listing8.photos.attach(io: File.open("app/assets/images/listing8pic2.jpg"), filename: "listing8pic1.jpg")

listing1.save! 
listing2.save! 
listing3.save! 
listing4.save! 
listing5.save! 
listing6.save! 
listing7.save! 
listing8.save!

res1 = Reservation.create!(listing_id: listing1.id, renter_id: user1.id, start_date: Date.new(2019, 12, 1), end_date: Date.new(2020, 1, 2), num_guests: 1)
res4 = Reservation.create!(listing_id: listing2.id, renter_id: demoUser.id, start_date: Date.new(2019, 12, 20), end_date: Date.new(2020, 1, 15), num_guests: 2)
res2 = Reservation.create!(listing_id: listing1.id, renter_id: user1.id, start_date: Date.new(2019, 1, 6), end_date: Date.new(2019, 1, 10), num_guests: 3)
res3 = Reservation.create!(listing_id: listing2.id, renter_id: demoUser.id, start_date: Date.new(2019, 1, 1), end_date: Date.new(2019, 1, 5), num_guests: 2)

user1.photo.attach(io: File.open("app/assets/images/user1.jpg"), filename: "user1.jpg")
user2.photo.attach(io: File.open("app/assets/images/user2.jpg"), filename: "user2.jpg")
user3.photo.attach(io: File.open("app/assets/images/user3.jpg"), filename: "user3.jpg")
demoUser.photo.attach(io: File.open("app/assets/images/demouser.jpg"), filename: "demoUser.jpg")

review1 = Review.create!(author_id: demoUser.id, body: "Great place in a great location", reviewable_id: listing1.id, reviewable_type: 'Listing')
review2 = Review.create!(author_id: user2.id, body: "Hated it", reviewable_id: listing1.id, reviewable_type: 'Listing')
review3 = Review.create!(author_id: user3.id, body: "Wonderful place with a wonderful host, 10/10 would stay again", reviewable_id: listing1.id, reviewable_type: 'Listing')