# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

brands = Brand.create([
    {
        name: "Tesla",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png"
    },
    {
        name: "Lordstown Motors",
        image_url: "https://upload.wikimedia.org/wikipedia/en/8/87/Lordstown_Motors_logo.png"
    }
])

reviews = Review.create([
    {
      title: 'Great car',
      description: 'Great to drive',
      score: 5,
      brand: brands.first
    },
    {
        title: 'Great truck',
        description: 'Best electric truck',
        score: 4.5,
        brand: brands.first
    }
])