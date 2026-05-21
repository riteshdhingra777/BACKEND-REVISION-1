import { asynchandler } from '../utils/asynchandler.js'

const registeruser = asynchandler(async (req, res) => {
    res.status(200).json({ message: "user registered successfully" })
})

export { registeruser }