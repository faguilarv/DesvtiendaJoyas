// const express = require('express')
// const app = express()
// app.listen(3000, () => console.log('Your app listening on port 3000'))

// const  { HATEOAS, HATEOASV2, orderValues, joya, fieldsSelect, filtroCategory } = require('./functions')

// app.get('/api/v1/joyas', (req, res) => {
//   res.send({
//     joyas: HATEOAS(),
//   })
// })

// app.get('/api/v2/joyas', (req, res) => {
//   if (req.query.values == 'asc') return res.send(orderValues('asc'))
//   if (req.query.values == 'desc') return res.send(orderValues('desc'))
//   if (req.query.page) {
//     const page = parseInt(req.query.page)
//     const start = page * 2 - 2
//     const end = start + 2
//     return res.send({ joyas: HATEOASV2().slice(start, end) })
//   }
//   res.send({
//     joyas: HATEOASV2(),
//   })
// })

// app.get('/joya/:id', (req, res) => {
//   const id = parseInt(req.params.id)
//   res.send({
//     joya: joya(id)[0],
//   })
// })

// app.get('/api/v2/joya/:id', (req, res) => {
//   const id = parseInt(req.params.id)

//   if (req.query.fields) return res.send(fieldsSelect(joya(id)[0], req.query.fields))
//   joya(id)[0]
//     ? res.send({
//       joya: joya(id)[0],
//     })
//     : res.send({
//       error: '404 Not Found',
//       message: 'No existe una joya con ese ID',
//     })
// })

// app.get('/api/v2/Category/:category', (req, res) => {
//   const category = req.params.category
//   res.send({
//     cant: filtroCategory(category).length,
//     joyas: filtroCategory(category),
//   })
// })