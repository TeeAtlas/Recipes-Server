import { pool } from '../db/pool.js';

export const getGalleryItem = async (req, res) => {
    const { id } = req.params;
    try{
        const { rows } = await pool.query(`SELECT * FROM gallery where id=$1`, [id]);
        if(rows.length === 0) {
            res.status(404).json({message: `Gallery object with ${id} not found`});
        } else {
            res.json(rows[0]);
        }
    } catch (error) {
        console.error('Sorry, gallery not found', error);
        res.sendStatus(500);
    }
}