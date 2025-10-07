# Mini Microservices App

<h3 align='center'>a taste of microservices architecture</h3>

## Posts Service

| path   | method | Body            | Goal               |
| ------ | ------ | --------------- | ------------------ |
| /posts | POST   | {title: string} | Create a new post  |
| /posts | GET    | -               | Retrieve all Posts |

## Comments Service

| path                | method | Body              | Goal                                                    |
| ------------------- | ------ | ----------------- | ------------------------------------------------------- |
| /posts/:id/comments | POST   | {content: string} | Create a comment associated with the given post ID      |
| /posts/:id/comments | GET    | -                 | Retrieve all comments associated with the given post ID |

## client

This is a small, component-based React project that demonstrates a basic blog-style structure — with posts and nested comments.  
It uses a simple and scalable folder organization.

- Create a new post
- View list of posts
- Add comments to any post
- View comments under each post
- Responsive and clean UI

src/
├── components/
│ ├── posts/
│ │ ├── PostList.js # Show all posts
│ │ ├── PostCreate.js # Create new post
│ │ └── PostItem.js # Single post with comments
│ │
│ ├── comments/
│ │ ├── CommentList.js # Show comments for one post
│ │ └── CommentCreate.js # Add a comment
│ │
│ └──
│
│
├── App.js # Root component
├── App.css # Global styles
└── index.js # React entry point
