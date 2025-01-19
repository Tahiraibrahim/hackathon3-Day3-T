import { sanityFetch } from "@/sanity/lib/fetch";
import { allproducts } from "@/sanity/lib/queries";


type Car = {
  _id: string;
  name: string;
  description: string;
  price: number | null; 
  imageUrl: string | null; 
};


const Home = async () => {
  
  const cars: Car[] = await sanityFetch({ querry: allproducts });

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Cars</h1>
      <div className="grid grid-cols-3 gap-4">
        {cars.map((car) => (
          <div
            className="border p-4 rounded-lg shadow-sm flex flex-col items-center"
            key={car._id}
          >
            <img
              src={car.imageUrl || "/placeholder-image.jpg"} 
              alt={car.name || "Unnamed Car"}
              className="w-full h-48 object-cover"
            />
            <h2 className="text-xl font-bold text-center">{car.name || "Unnamed Car"}</h2>
            <p className="text-center text-gray-600">
              {car.description || "rental cars available."}
            </p>
            <p className="text-center text-lg font-semibold text-green-600">
              {car.price != null ? `$${car.price.toFixed(2)}` : "Price 988$"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
