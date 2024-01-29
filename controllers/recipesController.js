import { pool } from '../db/pool.js';

export const getRecipes = async (req, res) => {
    try {
        const {rows} = await pool.query('SELECT * FROM recipes');
        res.json(rows);
    } catch(err){
        console.error(err);
        res.sendStatus(500); //internal server error
    }
};

// export const getRecipe = async (req, res) => {
//     const {id} = req.params;    
//     try {
//         const {rows} = await pool.query(`SELECT * FROM recipes WHERE id=$1`, [id]);
//         if (rows.length === 0) {
//             res.status(404).json({message: `Recipe with id ${id} not found`});
//         } else {
//             //this sets default status to 200 (success)
//             res.json(rows[0]);
//         }
//     } catch(err){
//         console.error(err);
//         res.sendStatus(500);
//     }   
// };