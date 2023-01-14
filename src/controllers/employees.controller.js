import db from '../db.js'
const {Sectors, Employees} = db

export const getEmployees = async (req, res) => {
    try {
        const employeesList = await Employees.findAll({attributes: ['id', 'firstName', 'lastName', 'email'], include: ["sector"]})
        res.send(employeesList)
    } catch (e) {
        res.status(400).send(e)
    }
}

export const uploadEmployee = async (req, res) => {
    const {firstName, lastName, email, SectorId} = req.body
    try {
        const newEmployee = await Employees.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            sectorId: SectorId
        })
        /* const sectorFounded = await Sectors.findByPk(sectorId)
        console.log("encontré el sector: ", sectorFounded)
        await newEmployee.addSectors(sectorId) */
        res.send(newEmployee)
    }catch (e){
        res.status(400).send(e)
    }
}

export const getEmployeeById = async (req, res) => {
    const {id} = req.params
    try {
        const { firstName, lastName, email, sector } = await Employees.findByPk(id, {include: ["sector"]})
        const cleanEmployee = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            sector: sector
        }
        res.send(cleanEmployee)
    }catch(e){
        res.send("entre al catch y me dijo" + e)
    }
}