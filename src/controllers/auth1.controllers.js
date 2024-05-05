import { User } from "../models/auth1.models.js"

const auth1_register = async (req, res) => {

    try {
        const user = await User.create({ email: req.body.email, name: req.body.name, password: req.body.password })
        res.status(200).json({ message: "User created successfully", user })
    } catch (error) {
        res.status(400).json({ error: error.message })
        console.log(`ERROR while registering, ${error}`)
    }
}

const auth1_login = async (req, res) => {
    const data = await User.findOne({ email: req.body.email })

    if (!data) {
        return res.status(404).json({ message: "Email not found" })
    }
    if (data.password !== req.body.password) {
        return res.status(400).json({ message: "Invalid email or password" })
    }
    res.status(200).json({ message: "Login", data })
}

export { auth1_login, auth1_register }