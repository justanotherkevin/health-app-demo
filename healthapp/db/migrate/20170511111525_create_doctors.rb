class CreateDoctors < ActiveRecord::Migration[5.0]
  def change
    create_table :doctors do |t|
      t.string :email
    #   t.references :subscription, foreign_key: true

      t.timestamps
    end
  end
end
