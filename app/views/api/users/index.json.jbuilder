json.set! :users do
  json.array! @users do |user|
    json.extract! user, :firstname, :lastname, :birthmonth, :birthday, :nickname, :created_at, :updated_at
  end
end