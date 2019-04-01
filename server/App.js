
const 
    passport = require('passport'),
    express = require('express'),
    bodyParser = require('body-parser'),

InstDashBRoutes = require('./routes/pages/instructor/dashboard'),
{ users, instructors, students, courses, lectures, 
    questions, answers } = require('./routes/api');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3001;
//==========================================================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//==========================================================================
app.use(passport.initialize());
require('./config/passport')(passport);
//==========================================================================
// app.use("/instructor/dashboard", InstDashBRoutes);
//==========================================================================
app.use("/api/users", users);
app.use("/api/instructors", instructors);
app.use("/api/students", students);
app.use("/api/courses", courses);
app.use("/api/lectures", lectures);
app.use("/api/questions", questions);
app.use("/api/answers", answers);
//==========================================================================
app.listen(port, () => console.log(`Server Online on port ${port}...`));