import Employee from "../components/Employee.js";
import users from "./Utils/GetRandomUser.js"

function getFName(user){
    return user.name.first
}
function getlName(user){
    return user.name.first
}
function getAge(user){
    return user.dob.age;
}
function getEmail(user){
    return user.email;
}
function getPhone(user){
    return user.phone
}


function createEmpoyeeC(user){
    var e = new EmployeeC(getFName(user),getlName(user),getAge(user),getEmail(user),getPhone(user));
    return e
}

export default createEmpoyeeC;