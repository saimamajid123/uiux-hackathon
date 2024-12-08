//@typescript-eslint/no-explicit-any

const ProductCard = ({ image, name, price }:any) => (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-lg">
      <img src={image} alt={name} className="w-full h-40 object-cover mb-4" />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600">${price}</p>
    </div>
  );
  
  export default ProductCard;
  