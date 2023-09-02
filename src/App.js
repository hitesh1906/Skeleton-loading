import { useState, useEffect } from "react";
import LoadingSkeleton from "./component/loadingSkeleton";
import ProductDetails from "./component/productDetails";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getDetails = async () => {
      setLoading(true);
      await fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setTimeout(5000);
        });
      setLoading(false);
    };
    getDetails();
  }, []);

  return (
    <div>
      <div>{loading ? <LoadingSkeleton /> : <ProductDetails />}</div>
    </div>
  );
}

export default App;
