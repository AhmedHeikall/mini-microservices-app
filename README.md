# Mini Microservices App

<h3 align='center'>a taste of microservices architecture</h3>

## Microservices Architecture

- This project is built using a **Microservices Architecture** approach with **Asynchronous communication** between services.

### Communication Strategy

We use **async communication** (message-based) to minimize direct requests between services — applying a **request minimization strategy** for better scalability and fault tolerance.

Our **Event Bus** is custom-built using **Express.js**.  
It receives events from services and **publishes them to all subscribed listeners**, ensuring that each service stays in sync without direct dependencies.

### Benefits

1. **Query Service Independence**  
   The Query service has **zero dependencies** on other services.
2. **High Performance**
   The Query service is **extremely fast** because it works with pre-synced data.

### Trade-offs

- **Data Duplication**
  This approach introduces **data duplication** across services to achieve faster query performance and better service isolation.

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

```
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
```
