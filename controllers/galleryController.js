import { pool } from '../db/pool.js';


export const getAllGalleryItems = async (req, res) => {
    try{
        const { rows } = await pool.query(`SELECT * FROM gallery`);
        res.json(rows);
    } catch (error) {
        console.error(`Sorry, no gallery here`, error);
        res.sendStatus(500);
    }
}

export const getGalleryItem = async (req, res) => {
    const { id } = req.params;
    try{
        const { rows } = await pool.query(`SELECT * FROM gallery WHERE id=$1`, [id]); // Fixed SQL query
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
