import { useEffect, useState } from "react";
import axios from "axios";
import PostItem from "./PostItem";
import "../styles/practice3.scss";

function PracticeLifeCycle() {
  const [posts, setPosts] = useState([]);

  const axiosPosts = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      //   setPosts(res.data); // 전체 데이터
      setPosts(res.data.slice(0, 10)); // 10개의 데이터만 가져옴
    } catch (error) {
      console.error(error);
    }
  };

  // mount 시 동작
  useEffect(() => {
    // async/awit을 사용하기 위해 함수를 따로 선언해준 후 사용
    axiosPosts();
  }, []);

  return (
    <div className="PostList">
      <header>📧Post List</header>
      {posts.length > 0 ? (
        posts.map((post) => {
          return <PostItem key={post.id} post={post} />;
        })
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}

export default PracticeLifeCycle;
