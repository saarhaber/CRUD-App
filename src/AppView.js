import React from "react";

const AppView = (props) => {
    const { students, removeStudent, addStudent, campuses, removeCampus, addCampus} = props;

    const studentToAdd = {
        "id": 2,
        "firstName": "bob",
        "lastName": "jones",
        "email": "bobbyboy1234@yahoo.com",
        "imageUrl": "https://i.imgur.com/GuAB8OE.jpg",
        "gpa": 3.7,
        "createdAt": "2018-12-05T23:02:45.270Z",
        "updatedAt": "2019-06-14T00:15:35.429Z",
        "campusId": 1
    }


    const campusToAdd = {
        "id": 1,
        "name": "BARUCH COLLEGE",
        "imageUrl": "https://specials-images.forbesimg.com/imageserve/55ae7abce4b05c2c343212c1/300x300.jpg?fit=scale&background=000000",
        }

    return (
    <div className="App">
        <header className="App-header">
            {students.map(student => <div><img src={student.imageUrl} width="100" height="100" onClick={() => addStudent(studentToAdd)}></img></div>)}
            {campuses.map(campus => <div><img src={campus.imageUrl} width="100" height="100" onClick={() => addCampus(campusToAdd)}></img></div>)}
        </header>
    </div>
    )
}

export default AppView;