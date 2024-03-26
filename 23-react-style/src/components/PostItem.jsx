export default function PostItem({ post }) {
  return (
    <div>
      <>
        <div className="PostItem">
          <span className="id">No. {post.id}</span> <span className="title">- {post.title}</span>
          <p className="body">{post.body}</p>
        </div>
      </>
    </div>
  );
}
