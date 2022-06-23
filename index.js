/* CREAMOS SERVIDOR NODEJS SIN USAR EXPRESS
const http = require("http");

http
.createServer((req, res) => {
     res.end("hello world");
   })
   .listen(3000);
   TERMINAMOS CON EL SERVIDOR SIN EXPRESS
*/

const express = require("express");
const app = express();
var morgan = require("morgan");
//Requerimietno de rutas
const routes = require("./routes");
const routesApi = require("./routes-api");

//SETINGS
app.set("appName", "mi server");
//Al final llamamos a este este setting con: console.log("nombre de la App: ", app.get("appName"));

//instalamos el motor de plantilla ejs, los siguientes comandos hay que copiarlos:
app.set("views", __dirname + "/views");
//__dirname me muestra la ubicacion de esta pagina, si quiero entenderlo mejor coloco console.log("__dirname")
app.set("view engine", "ejs");

//MIDDLEWARES se usa use.
app.use((req, res, next) => {
  //.use es para middlewares
  //este servidor recibe una peticion a la ruta inicial
  console.log("request url:" + req.url);
  next();
  //el next es necesario porque si no no continua hacia abajo para leer las rutas.
  //en este caso entra la req sale la res y continua con next para leer las rutas
});

app.use((req, res, next) => {
  console.log("paso por estas funcion");
  next();
});

//usamos un freamework de nom morgan
app.use(morgan("dev"));
app.use(morgan("short"));
app.use(morgan("combined"));

/*Las llevamos a routs.js
//RUTAS
// / imagenes
app.get("/", (req, res) => {
  //la / es la ruta inicial
  // res.end("hello world");
  res.render("index.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("*", (req, res) => {
  res.end("archivo no encontrado");
}); 
//el servidor hace una peticion HTTP al navegador y cuando recibe una peticion get le tenemos que dar algo
*/

app.use(routes);
app.use("/api", routesApi);

app.get("*", (req, res) => {
  res.end("archivo no encontrado");
});

app.listen(3000, () => {
  console.log("servidor funcionando");
  console.log("nombre de la App: ", app.get("appName"));
});
