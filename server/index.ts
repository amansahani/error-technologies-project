import express from 'express';
import bodyParser from 'body-parser';
import authRouter from './src/routes/authRoutes';
import protectedRouter from './src/routes/protectedRoutes';
import dbAlive from './src/utils/keepAlive'

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());


// Use your routers
app.use('/auth', authRouter);
app.use('/protected', protectedRouter);
dbAlive();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
