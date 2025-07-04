const express = require("express");
const bcrypt = require("bcrypt");
const { PrismaClient } = require("./src/generated/prisma");
const prisma = new PrismaClient();
const app = express();

// Signup Route
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }

    if (password.length < 10) {
      return res
        .status(400)
        .json({ error: "Password must be at least 10 characters long" });
    }

    const oldUser = await prisma.user.findUnique({
      where: { username },
    });

    if (oldUser) {
      return res.status(400).json({ error: "Username is already taken😪" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: "Signup was successful!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong during the signup" });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return res.status(401).json({ error: "User does not exist" });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ error: "Password is incorrect" });
    }

    // Storing user ID and username
    req.session.userId = user.id;
    req.session.username = user.username;

    res.json({ id: user.id, username: user.username });

  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Something went wrong when you tried to log in" });
  }
});

// Checking to see if user is logged in
app.get("/me", async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Not logged in" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: req.session.userId },
      select: { username: true },
    });


    res.json({ id: req.session.userId, username: req.session.username });



  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching user session data" });
  }
});

// Logging out
app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to log out" });
    }
    res.clearCookie("connect.sid"); // clearing cookie session
    res.json({ message: "Logout successful" });
  });
});

module.exports = app;
