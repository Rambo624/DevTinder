const express=require("express")
const app=express()
const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
const authRouter=require("./Routes/authRouter")
const ProfileRouter=require("./Routes/ProfileRouter")
const RequestRouter=require("./Routes/RequestRouter")
const UserRouter=require("./Routes/UserRouter")
const uri = process.env.MONGO_URL;
const cookieParser=require("cookie-parser")
const cors=require("cors")

const allowedOrigins = [
  'http://localhost:5173',
  

 
];

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g., mobile apps or curl requests)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Allow credentials (cookies, etc.)
  methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'], // Specify allowed methods
  allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Credentials'], // Allowed headers
  exposedHeaders: [ 'Set-Cookie']
};


mongoose.connect(uri)
  .then(() => {
    console.log('Connected successfully to MongoDB with Mongoose');
    app.listen(3000,(req,res)=>{
        console.log("server running on 3000")
    })
  })
  
  .catch((err) => {
    console.error('Mongoose connection error:', err);
  });



app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
app.use("/",authRouter)
app.use("/profile",ProfileRouter)
app.use("/request",RequestRouter)
app.use("/user",UserRouter)
