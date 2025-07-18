const express = require("express");
const bcrypt = require("bcrypt");
const { PrismaClient } = require("./generated/prisma");
const session = require("express-session");

const prisma = new PrismaClient();
const app = express();


// Middleware to check if user is logged in
const isAuthenticated = (req, res, next) => {
  if (!req.session.userId) {
    return res
      .status(401)
      .json({ error: "You need to log in before you can perform this action" });
  }
  next();
};

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});

app.use(
  session({
    secret: "your-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      sameSite: "lax"

       },

  })
);

app.use(express.json());

// Signup Route
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ error: "Password must be at least 8 characters long" });
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

// Getting user's medical history
app.get("/med_history", async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: "Not logged in" });
  }
  try {
    const userId = req.session.userId;
    const entries = await prisma.medicalHistory.findMany({
      where: { user_id: userId },
      orderBy: { createdAt: "desc" },
    });
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: "Error getting your medical history" });
  }
});



// Adding more data to medical history
app.post("/med_history", async (req, res) => {
  const userId = parseInt(req.params.id);
  const { condition, notes, Diagnosisdate, medication } = req.body;

  if (!condition || !notes || !Diagnosisdate) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try{
    const userExists = await prisma.user.findUnique({
      where: { id: userId }
  });
  if (!userExists) {
    return res.status(404).json({ error: "User not found" });
  }
  const newHistory = await prisma.medicalHistory.create({
    data: {  condition, notes, Diagnosisdate, medication },
  });
  res.status(200).json(newHistory);
  } catch (error) {
    res.status(500).json({ error: "Error adding to your medical history" });
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
