json.extract! user, :id, :first_name, :last_name, :email
json.photoURL url_for(user.photo)