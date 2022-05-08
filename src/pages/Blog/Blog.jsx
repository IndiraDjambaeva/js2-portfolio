import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "../../components/Posts/Posts";
import { Pagination } from "../../components";

function Blog() {
  const [posts, setPoststs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPoststs(response.data);
    };

    getPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFiststPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFiststPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="blog">
      <h1 style={{ textAlign: "center" }}>My Blog</h1>
      <div className="container">
        <Posts posts={currentPosts} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </section>
  );
}

export default Blog;
