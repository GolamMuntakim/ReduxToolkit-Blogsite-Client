

const PopularBlogs = () => {
    return (
        <div>
             <section className="text-gray-600 mt-12">
      <h2 className="text-3xl font-bold">Popular Blogs</h2>
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap -m-4">
          {/* {
            relatedBlogs.length > 0 ? relatedBlogs.slice(0, 3).map((blog, index) => <RelatedBlogCard blog={blog} key={index}/>) : <div>No related blog found</div>
          } */}
          {/* Repeat the structure for other blog entries */}
        </div>
      </div>
    </section>
        </div>
    );
};

export default PopularBlogs;