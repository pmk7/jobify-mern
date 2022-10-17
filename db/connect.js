import mongoose from 'mongoose';

const connectDB = (url) => {
  return mongoose.connect(url);
};

const connectionString =
  'mongodb+srv://pk:<password>@mernprojects.w8c4dpm.mongodb.net/?retryWrites=true&w=majority';

export default connectDB;
