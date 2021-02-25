class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :brand_id
end
