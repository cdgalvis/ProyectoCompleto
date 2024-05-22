import {Router} from 'express'
import pool from '../database.js'

const router = Router();

router.get('/list', async(req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM personas');
        res.render('personas/list', {personas: result})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

export default router;