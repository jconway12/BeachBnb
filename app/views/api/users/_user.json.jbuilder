json.extract! user, :id, :first_name, :last_name, :email, :bio, :hometown
json.photoURL url_for(user.photo)