const express = require('express')
const router = express.Router();
const User = require('../models/user')
const zod = require('zod');
const bcrypt = require('bcryptjs')
const authMiddleware = require('../middleware');
const userSchema = zod.object({
    username: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(6)
})

router.post('/signup', async (req, res) => {

    try {
        const result = userSchema.safeParse(req.body);
        console.log(result)
        if (!result.success) {
            return res.status(401).send({
                msg: "data is invalid"
            })
        }

        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const existingUser = User.findOne({ email });
        if (existingUser) {
            return res.status(200).json({
                msg: "User already exists!"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await User.create({ username, email, password: hashedPassword });

        res.status(200).json({
            msg: "user added sucessfully",
            newUser
        })
    }
    catch (err) {
        console.log(err);
    }
})

router.post('/signin', async (req, res) => {

    try {
        const { username, email, password } = req.body;
        const result = userSchema.safeParse(req.body);
        // console.log(result);
        if (!result.success) {
            return res.status(401).send({
                msg: "data is invalid"
            })
        }
        const check = await User.findOne({ email });
        if (!check) {
            return res.status(401).json({ msg: "invalid email!" })
        }
        const matchResult = await bcrypt.compare(password, check.password);
        if (!matchResult) {
            return res.status(401).json({ msg: "Invalid Credentials" });
        }

        res.status(200).json({ msg: "Success! You are logged in." });
    }
    catch (err) {
        console.log(err);
    }

})

module.exports = router;