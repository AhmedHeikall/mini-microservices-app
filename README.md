# Mini Microservices App

<h4 align='center'>a taste of microservices architecture</h4>

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
