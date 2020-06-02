json.set! :user do
  json.extract! @user, :firstname, :lastname, :birthmonth, :birthday, :nickname, :created_at, :updated_at
end