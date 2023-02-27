import Fastify from 'fastify'

const app = Fastify()

app.get('/', () => {
    return 'Hello World'
})

app.listen({
    port: 3333,
    host: '0.0.0.0'
  }).then(() => {
    console.log("Server is running on PORT 3333");
  });