class User < ApplicationRecord
  validates :firstname, :lastname, :birthmonth, :birthday, :nickname,presence: true
end
