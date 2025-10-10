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

| path    | method | Body                        | Goal                          |
| ------- | ------ | --------------------------- | ----------------------------- |
| /posts  | POST   | {title: string}             | Create a new post             |
| /posts  | GET    | -                           | Retrieve all Posts            |
| /events | POST   | {type: 'PostCreated', data} | Send Event to Event-Bus       |
| /events | POST   | -                           | Received Event from Event-Bus |

## Comments Service

| path                | method | Body                           | Goal                                                    |
| ------------------- | ------ | ------------------------------ | ------------------------------------------------------- |
| /posts/:id/comments | POST   | {content: string}              | Create a comment associated with the given post ID      |
| /posts/:id/comments | GET    | -                              | Retrieve all comments associated with the given post ID |
| /events             | POST   | {type: 'CommentCreated', data} | Send Event to Event-Bus                                 |
| /events             | POST   | -                              | Received Event from Event-Bus                           |

## Query Service

- The Query Service is responsible for serving combined data of posts and their related comments in a single response. (The query service is about presentation logic)
- It listens for events from the Event Bus (such as post or comment creation) and updates its local data store accordingly.
- This approach ensures fast and efficient read operations with zero dependencies on other services.

| path    | method | Body | Goal                                                                           |
| ------- | ------ | ---- | ------------------------------------------------------------------------------ |
| /posts  | Get    | -    | Provide full listing of Posts + Comments in one single request                 |
| /events | POST   | -    | parsing incoming events and saved posts + comments in effecient data structure |

## Moderation Service (important)

- The Moderation Service receives comment-related events from the Event Bus and automatically reviews the content of each comment.
- If a comment contains specific flagged words (e.g., “orange”), it updates the comment’s status to rejected; otherwise, it marks it as approved.
- The default status for all new comments is pending.
- After moderation, the service emits an updated event back to the Event Bus, which notifies all other services (including the Query Service) to keep data consistent and up to date.
- This process provides a smoother and safer user experience by ensuring inappropriate comments are filtered before being displayed.

- in real world commentType maybe (upvoted, downvoted, promoted, anonymized, advertised ..)

## client

This is a small, component-based React project that demonstrates a basic blog-style structure — with posts and nested comments.  
It uses a simple and scalable folder organization.

- Create a new post
- View list of posts
- Add comments to any post (with flag do 3 different states 'approved' | 'rejected' | 'pending')
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
