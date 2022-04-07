const authService = require('./service');
const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');
class AuthController {
    async register(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Validation Error', errors.array()))
            }
            const { email, password, firstName, lastName, address, phone } = req.body;
            const token = await authService.register(email, password, firstName, lastName, address, phone);
            res.json({ accessToken: token });
        } catch (err) {
            next(err)
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const token = await authService.login(email, password)
            res.json({ accessToken: token });
        } catch (err) {
            next(err)
        }
    }
    async loginAdmin(req, res, next) {
        try {
            const { email, password } = req.body;
            const token = await authService.loginAdmin(email, password)
            res.json({ accessToken: token });
        } catch (err) {
            next(err)
        }
    }
    async me(req, res, next) {
        try {
            const { email,type } = req.user
            const user = await authService.me(email,type)
            res.json({ user })
        } catch (err) {
            next(err);
        }
    }
    async getUsers(req, res, next) {
        try {
            const users = await authService.getUsers();
            res.json({users})
        } catch (err) {
            next(err);
        }
    }
    async deleteUser(req, res, next) {
        try {
            const { email } = req.params;
            const user = await authService.deleteUser(email)
            res.json({ user })
        } catch (err) {
            next(err);
        }
    }
    async updateUser(req, res, next) {
        try {
            const { email } = req.user
            const { firstName, lastName, address, phone } = req.body
            const user = await authService.updateUser(email, firstName, lastName, address, phone)
            res.json({ user })
        } catch (err) {
            next(err);
        }
    }
    async updatePassword(req, res, next) {
        try {
            const { email } = req.user
            const { password } = req.body
            const user = await authService.updatePassword(email, password)
            res.json({ user })
        } catch (err) {
            next(err);
        }
    }
    async recoverPassword(req, res, next) {
        try {
            const { email, password } = req.body
            await authService.updatePassword(email, password)
            res.json("Password Updated")
        } catch (err) {
            next(err);
        }
    }
    async getRecoverToken(req, res, next) {
        try {
            const { email } = req.body
            const msg = await authService.getRecoverToken(email)
            res.json(msg)
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new AuthController()