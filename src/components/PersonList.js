import React from 'react'
import Person from './Person'

const PersonList = () => {
    // const names = ['Nabendu', 'Robin', 'Sr. Robin'];
    const persons = [
        {
            id: 1,
            name: 'Nabendu',
            age: 28
        },
        {
            id: 2,
            name: 'Robin',
            age: 29
        },
        {   
            id: 3,
            name: 'Sr. Robin',
            age: 30
        }
    ]

    return persons.map(person => <Person key={person.id} person={person} />)
}

export default PersonList