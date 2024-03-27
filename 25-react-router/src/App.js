import { Routes, Route } from "react-router-dom";
import { Test } from "../src/pages/Test";
import { MainPage } from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import "./styles/Common.scss";
import ProductPage from "./pages/ProductPage";
import { useEffect, useState } from "react";
import axios from "axios";
import PhotoPage from "./pages/PhotoPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  const [products, setProducts] = useState([]);
  const [photos, setPhotos] = useState([]);

  // const tempProductsData = [
  //   {
  //     id: 1,
  //     name: "다이슨 슈퍼소닉",
  //     email: "Eliseo@gardner.biz",
  //     body: "다이슨 슈퍼소닉 헤어드라이어를 위한 자석 부착형 스타일링 노즐, 스탠드 및 스타일링 액세서리.",
  //   },
  //   {
  //     id: 2,
  //     name: "SSD 1TB",
  //     email: "Jayne_Kuhic@sydney.com",
  //     body: "삼성전자 삼성 외장SSD T7 1TB 외장하드 1테라 USB3.2 Gen.2 Type-C MU-PC1T0 공식인증 (정품)",
  //   },
  // ];

  const getProducts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
    setProducts(res.data.slice(0, 10));
    // console.log(res.data[0]);
    /* {postId: 1,
     id: 1,
     name: 'id labore ex et quam laborum', 
     email: 'Eliseo@gardner.biz', 
     body: 'laudantium enim quasi est quidem magnam voluptate …utem quasi\nreiciendis et nam sapiente accusantium'} */
  };

  const getPhotos = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
    setPhotos(res.data.slice(0, 10));
    // console.log(res.data[0]);
    /* {albumId: 1, 
      id: 1, 
      title: 'accusamus beatae ad facilis cum similique qui sunt', 
      url: 'https://via.placeholder.com/600/92c952', 
      thumbnailUrl: 'https://via.placeholder.com/150/92c952'} */
  };

  useEffect(() => {
    getProducts();
    getPhotos();
  }, []);

  return (
    <div className="App">
      {/* Routes 태그 외부에 header, footer 등을 위치시키면 공통적으로 웹에서 보여줄 수 있음 */}
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/products" element={<ProductPage products={products} />} />
        <Route path="/photos" element={<PhotoPage photos={photos} />} />
        <Route path="/products/:productId" element={<ProductDetailPage products={products} />} />
        {/* 404 page는 마지막에 위치시키는 것 권장 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
