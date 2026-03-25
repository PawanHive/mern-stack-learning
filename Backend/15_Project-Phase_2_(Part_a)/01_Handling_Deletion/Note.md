# Mongoose Middleware - Handling Deletions

## 1. Problem

When using referencing in MongoDB:

- One document depends on another
- Example:
  - User → Posts
  - Post → Comments

👉 If you delete a parent document:
- Child documents remain ❌ (orphan data)

---

## 2. What is Middleware in Mongoose?

Middleware (also called hooks) are functions that run:

> Before or after certain actions (like save, delete, update)

---

## 3. Goal (Handling Deletion)

When a parent is deleted:
👉 Automatically delete related child documents

This is called **Cascade Delete**

---

## 4. Example: Post & Comments

- One Post → Many Comments
- If Post is deleted → Delete all its comments

---

## 5. Schema Setup

### Comment Schema

~~~js
const commentSchema = new mongoose.Schema({
  text: String
});

const Comment = mongoose.model("Comment", commentSchema);
~~~

---

### Post Schema

~~~js
const postSchema = new mongoose.Schema({
  title: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});
~~~

---

## 6. Using Middleware (post hook)

~~~js
postSchema.post("findOneAndDelete", async (post) => {
  if (post) {
    await Comment.deleteMany({
      _id: { $in: post.comments }
    });
  }
});
~~~

---

## 7. Explanation

- `findOneAndDelete` runs when:
  - `findByIdAndDelete()`
  - `findOneAndDelete()`

- `post` = deleted document

- `$in` operator:
  - Deletes all comments whose IDs exist in `post.comments`

---

## 8. Why Use "post" Middleware?

- We need access to the deleted document
- Only available **after deletion**

---

## 9. Important Warning ⚠️

This middleware **WILL NOT RUN** if you use:

~~~js
Post.deleteMany({});
Post.deleteOne({});
~~~

👉 These bypass document middleware

---

## 10. Best Practice

Always delete like this:

~~~js
await Post.findByIdAndDelete(id);
~~~

So middleware runs properly ✅

---

## 11. Alternative (pre middleware)

~~~js
postSchema.pre("findOneAndDelete", async function () {
  const post = await this.model.findOne(this.getQuery());
  await Comment.deleteMany({ _id: { $in: post.comments } });
});
~~~

- Runs **before deletion**
- Slightly more complex

---

## 12. Real-World Use Cases

- Delete post → delete comments
- Delete user → delete posts
- Delete product → delete reviews

---

## 13. Visual Flow

~~~text
Delete Post
   ↓
Middleware Triggered
   ↓
Delete Related Comments
   ↓
Clean Database ✅
~~~

---

## Summary

- Middleware helps automate logic
- Use `post("findOneAndDelete")` for cascade delete
- Prevents orphan data
- Always use correct delete methods 🚀