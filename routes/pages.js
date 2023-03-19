const express = require("express");
const router = express.Router();
const userContoller = require("../controllers/users");
router.get(["/", "/login"], (req, res) => {
  //res.send("<h1>Hello Tutor Joes Salem</h1>");
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});



router.get("/profile", userContoller.isLoggedIn, (req, res) => {
  if (req.user) {
    res.render("profile", { user: req.user });
  } else {
    res.redirect("/login");
  }
});


router.get("/myprogress", userContoller.isLoggedIn, (req, res) => {
  if (req.user) {
    res.render("myprogress", { user: req.user });
  } else {
    res.redirect("/login");
  }
});



router.get("/contact", userContoller.isLoggedIn, (req, res) => {
  if (req.user) {
    res.render("contact", { user: req.user });
  } else {
    res.redirect("/login");
  }
});

router.get("/cart", userContoller.isLoggedIn, (req, res) => {
  if (req.user) {
    res.render("cart", { user: req.user });
  } else {
    res.redirect("/login");
  }
});


router.get("/instructor", userContoller.isLoggedIn, (req, res) => {
  if (req.user) {
    res.render("instructor", { user: req.user });
  } else {
    res.redirect("/login");
  }
});


router.get("/home", userContoller.isLoggedIn, (req, res) => {
  //console.log(req.name);
  if (req.user) {
    res.render("home", { user: req.user });
  } else {
    res.redirect("/login");
  }
});

module.exports = router;