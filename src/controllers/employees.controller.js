import db from '../db.js'
const {Sectors, Employees} = db

export const getEmployees = (req, res) => {
    res.send('La lista de empleados esta vacía')
}

export const uploadEmployee = async (req, res) => {
    const {firstName, lastName, email, sectorId} = req.body
    try {
        const newEmployee = await Employees.create({
            firstName,
            lastName,
            email
        })
        console.log(newEmployee)
        await newEmployee.addSector(sectorId)
        res.send(newEmployee)
    }catch (e){
        res.status(400).send(e)
    }
}

export const getEmployeeById = async (req, res) => {
    const {id} = req.params
    try {
        const foundEmployee = await Employees.findByPk(id, {include: Sectors})
        res.send(foundEmployee)
    }catch(e){
        res.send("entre al catch y me dijo", e)
    }
}