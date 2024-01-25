interface BlogModel {
    id: number; // Unique identifier for each blog post
    title: string; // Title of the blog post
    content: string; // Content of the blog post
    authorId?: number | null; // Optional field to store the user ID who created this blog (if not specified, it will be set as current logged-in user's ID)
    userId?: number | null; // Optional field for storing the user ID that is assigned to a specific blog post by an admin or moderator
    published: boolean; // Flag indicating whether the blog post has been published or not (default false if unpublished)
    createdAt: Date; // Timestamp of when the blog was created
    updatedAt?: Date | null; // Optional field for storing the last update timestamp, can be set to null initially and will only get populated on updates
}