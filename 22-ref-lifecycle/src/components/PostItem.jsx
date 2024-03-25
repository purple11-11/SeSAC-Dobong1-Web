export default function PostItem({ post }) {
  return (
    <div>
      <>
        <div>
          <p>
            No. {post.id} - {post.title}
          </p>
          <p>{post.body}</p>
        </div>
      </>
    </div>
  );
}
