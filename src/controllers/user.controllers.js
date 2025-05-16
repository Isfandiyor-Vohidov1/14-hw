import db from "../db/index.js";

export class UserController{
    async createUser(req, res) {
        try {
            const {name, email} = req.body;
            const result = await db.query('INSERT INTO users (name, email) VALUES($1, $2) RETURNING *', 
                [name, email]);
            return res.status(201).json({
                statusCode: 201,
                message: 'success',
                data: result?.rows[0]
            });
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }

    async signin(req, res) {
        try { 
            const {device_type, os, client, raw_user_agent} = req.deviceInfo;
            await db.query('UPDATE users SET ')
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }
}