const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const app = express();
const connectDB = require('./db/connectDB');

// Middleware
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(cors());

connectDB();

app.get('/', (req, res) => {
  res.send('Welcome To Api');
});

// Routes
const AuthRouter = require('./routers/auth');
const OrderRouter = require('./routers/order');
const OrderDetailRouter = require('./routers/orderDetails');
const ImageRouter = require('./routers/image');
const UserRouter = require('./routers/user');
const CartRouter = require('./routers/cart');
const RoleRouter = require('./routers/role');
const AddressRouter = require('./routers/address');
const CouponRouter = require('./routers/coupon');
const ProductRouter = require('./routers/product');
const CategoryRouter = require('./routers/category');
const SubCategoryRouter = require('./routers/subCategory');
const BrandRouter = require('./routers/brand');
const BannerRouter = require('./routers/banner');

app.use('/api/v1/order', OrderRouter);
app.use('/api/v1/order-details', OrderDetailRouter);
app.use('/api/v1/image', ImageRouter);
app.use('/api/v1/auth', AuthRouter);
app.use('/api/v1/user', UserRouter);
app.use('/api/v1/cart', CartRouter);
app.use('/api/v1/role', RoleRouter);
app.use('/api/v1/address', AddressRouter);
app.use('/api/v1/coupon', CouponRouter);
app.use('/api/v1/image', ImageRouter);
app.use('/api/v1/category', CategoryRouter);
app.use('/api/v1/subCategory', SubCategoryRouter);
app.use('/api/v1/product', ProductRouter);
app.use('/api/v1/brand', BrandRouter);
app.use('/api/v1/banner', BannerRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
