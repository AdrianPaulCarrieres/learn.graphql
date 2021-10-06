import { User } from "./user"

type Post = {
    id: number;
    author: User;
    comments: Post;
    content: string;
    createdAt: Date;
    updatedAt: Date;
};

export { Post };