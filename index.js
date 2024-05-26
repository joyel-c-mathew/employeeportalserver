const jsonServer = require('json-server')
const employeeportalServer = jsonServer.create()
const router = jsonServer.router("db.json")
const middleware = jsonServer.defaults()
const PORT = 3000 || process.env.PORT

employeeportalServer.use(middleware)
employeeportalServer.use(router)

employeeportalServer.listen(PORT,()=>{
    console.log(`emplooye portal running sucessfully at port number : ${PORT}`);
})
