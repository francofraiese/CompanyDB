import db from '../db.js'
const { Sectors } = db

export const getSectors = async (req, res) => {
    try {
        const sectorsFinded = await Sectors.findAll()
        res.send(sectorsFinded) 
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

export const createSector = async (req, res) => {
    try {
        const { name } = req.body
        const sectorCreated = await Sectors.create({
            name: name
        })
        res.send(sectorCreated)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

export const changeSectorName = async (req, res) => {
    const { newName } = req.body
    const { id } = req.params
    try {
        const sectorFinded = await Sectors.findAll()
        console.log("encontre:", sectorFinded)
        console.log("la tabla:", Sectors)
        console.log("y me llegó:", newName, 1)
        /* sectorFinded.update({name = newName})
        sectorFinded.save()
        res.send(sectorFinded) */
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}