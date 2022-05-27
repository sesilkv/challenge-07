import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import axios from "axios";

export default function Student() {

    const [students, setStudents] = useState(null)
    const router = useRouter()
    const {id} = router.query

    useEffect(() => {
        axios
            .get(`https://fejs-c7-api.herokuapp.com/api/students/${id}?populate=*`)
            .then((res) => {
                setStudents(res.data.data)
                console.log(res)
            })
    }, [])

  return (
    <div>
        {students && (
            <div>
                <div>
                    <Zoom>
                        {students.attributes.photo.data === null && (
                            <img src="/image/duck.jpg" alt="student" width="100" />
                        )}
                        {students.attributes.photo.data !== null && (
                            <img
                            src={students.attributes.photo.data.attributes.url}
                            alt="student"
                            width="100"
                            />
                        )}
                    </Zoom>
                    <div>
                        <div>First Name :</div>
                        <div> {students.attributes.firstname}</div>
                    </div>
                    <div>
                        <div>Last Name :</div>
                        <div> {students.attributes.lastname}</div>
                    </div>
                    <div>
                        <div>Location :</div>
                        <div> {students.attributes.location}</div>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}
