const routes =[
    {
      method: "GET",
      path: "/",
      handler: (request, h) => {
        return "Homepage";
      },
    },
    {
      method: "*",
      path: "/",
      handler: (request, h) => {
        return `Halaman ini tidak dapat diakses dengan method ${request.method}`;
      },
    },
    {
        method: "GET",
        path: "/about",
        handler: (request, h) => {
            return "About Page";
        },
    },
    {
        method: "*",
        path: "/about",
        handler: (request, h) => {
            return `Halaman ini tidak dapat diakses dengan method ${request.method}`;
        },
    },
    {
        method: "*",
        path: "/{any*}",
        handler: (request, h) => {
            return "Halaman tidak ditemukan";
        },
    },
    {
        // path parameter
        method: "GET",
        // ? => optional, jika tidak diisi maka akan mengembalikan default value
        path: "/hello/{name?}",
        handler: (request, h) => {
            // memanfaatkan path sebagai parameter
            const {name = "Stranger"} = request.params;
            const {lang} = request.query;
            if (lang === "id") {
                return `Hai, ${name}`;
            } else if (lang === "es") {
                return `Hola, ${name}`;
            } else if (lang === "ar") {
                return `مرحبا, ${name}`;
            }
            return `Hello, ${name}`;
        },
    },
    {
        method: "POST",
        path: "/login",
        handler: (request, h) => {
            const {username, password} = request.payload;
            return `Welcome ${username}`
        },
    },
    {
        method: "GET",
        path: "/internal",
        handler: (request, h) => {
            const  userAgent = request.headers["user-agent"];
            const  referrer = request.headers.referer;
            const ip = request.info.remoteAddress;
            const sessionId = request.state.sessionId;
            const fullUrl = request.url.href;
            return `User Agent: ${userAgent} \n Referrer: ${referrer} \n IP: ${ip} \n Session ID: ${sessionId} \n Full URL: ${fullUrl}`
        },
    },
    {
        method: "POST",
        path: "/user",
        handler: (request, h) => {
            const response = h.response("User Created");
            response.code(201);
            response.type("text/html");
            response.header('X-Developer-Name', 'NUMENIDE');
            return response;

        }
    }

]

  module.exports = routes