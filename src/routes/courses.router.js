import { Router } from 'express';
//import del service para Courses.
//import CourseService from '../services/filesystem/courses.service.js';
import CourseService from '../services/db/courses.service.js';

const router = Router();
const coursesService = new CourseService();

router.get('/',async(req,res)=>{
   
})

router.post('/',async(req,res)=>{
   
})

export default router;