const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const path = require('path');

// Thiết lập thư mục static để phục vụ các file CSS, JS, hình ảnh từ thư mục `public`
app.use(express.static(path.join(__dirname, 'public')));

// Thiết lập Handlebars engine với đuôi `.hbs`
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: 'main', layoutsDir: './src/view/layouts' }));
app.set('view engine', 'hbs');
app.set('views', './src/view');

// Định nghĩa một route
app.get('/', function (req, res) {
  res.render('index', { title: 'Trang Chủ' }); // Render view 'index'
});

// Khởi động server
app.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
