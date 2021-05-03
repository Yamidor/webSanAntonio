class StudentService {
    constructor(){
    }

    async getStudents(){
        fetch("http://localhost:8080/students",{
            params:{
                currentPage: 0,
                sizePage: 100
            }
        }) 
    }
}

export default StudentService;