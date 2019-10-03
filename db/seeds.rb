# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Listing.destroy_all

demoUser = User.create!(first_name: 'Demo User', last_name: 'Demo User', email: 'demo@bnb.com', password: 'password')
user1 = User.create!(first_name: 'Jesse', last_name: 'Conway', email: 'j@gmail.com', password: "password")
user2 = User.create!(first_name: 'user2', last_name: 'user2', email: 'user2@gmail.com', password: "password")
user2 = User.create!(first_name: 'user3', last_name: 'user3', email: 'user3@gmail.com', password: "password")

listing1 = Listing.create!(title: 'listing1', owner_id: user1.id, description: "nice", rate: 20, lat: 42.3601, lng: 71.0589)
listing2 = Listing.create!(title: 'listing2', owner_id: user2.id, description: "nice", rate: 20, lat: 42.3605, lng: 71.0582)
listing3 = Listing.create!(title: 'listing3', owner_id: user2.id, description: "cooooooool", rate: 20, lat: 42.3608, lng: 71.0581)
listing4 = Listing.create!(title: 'listing4', owner_id: user2.id, description: "nice", rate: 20, lat: 42.3608, lng: 71.0580)
listing5 = Listing.create!(title: 'listing5', owner_id: user1.id, description: "blah blah blah blah blah", rate: 20, lat: 42.3601, lng: 71.0589)
listing6 = Listing.create!(title: 'listing6', owner_id: user2.id, description: "listeing description", rate: 20, lat: 42.3640, lng: 71.0585)
listing7 = Listing.create!(title: 'listing7', owner_id: user2.id, description: "nice", rate: 20, lat: 42.3605, lng: 71.0581)
listing8 = Listing.create!(title: 'listing8', owner_id: user2.id, description: "nice", rate: 20, lat: 42.3654, lng: 71.0510)

