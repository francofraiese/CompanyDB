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
        const sectorFinded = await Sectors.findByPk(id)
        sectorFinded.update({name: newName})
        sectorFinded.save()
        res.send(sectorFinded)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

export const deleteSector = async (req, res) => {
    const { id } = req.params
    try {
        const sectorDeleted = await Sectors.destroy({
            where: {
                id: id
            }
        })
        /* sectorFinded.update({name = newName})
        sectorFinded.save()
        res.send(sectorFinded) */
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}