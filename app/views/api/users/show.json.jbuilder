json.partial! "api/users/user", user: @user
# debugger
reservations = @user.reservations 
resIds = []
reservations.each do |res|
  resIds << res.id
end
json.reservations resIds
