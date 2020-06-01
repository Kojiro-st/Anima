class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :firstname,        null: false
      t.string :lastname,         null: false
      t.date :birthmonth,         null: false
      t.date :birthday,           null: false
      t.string :nickname,         null: false

      t.timestamps
    end
  end
end
