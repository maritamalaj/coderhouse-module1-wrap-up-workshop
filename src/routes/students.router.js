import { Router } from 'express';
//import del service para Students. (Se puede probar con el service del file system o el de mongoose)
//import StudentService from '../services/filesystem/students.service.js';
import StudentService from '../services/db/students.service.js';

const router = Router();
const studentService = new StudentService();

router.get('/',async(req,res)=>{
    try {
        let students = await studentService.getAll();
        res.send(students);
    } catch (error) {
        console.error(error);
        res.status(500).send({error:  error, message: "No se pudo obtener los estudiantes."});
    }
    
})

router.post('/',async(req,res)=>{
    // Resolver esta ruta POST
})

export default router;