import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import axios from "axios";

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  function getItems() {
    return axios
      .get("http://localhost:5000/api/items/")
      .then(res => res.data)
      .catch(err => (err.response.data, err.response.status));
  }

  useEffect(() => {
    getItems().then(_courses => setCourses(_courses));
    // getCourses().then(_courses => setCourses(_courses));
    // .then(_courses => console.log(_courses));
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <CourseList courses={courses} />
    </>
  );
}

export default CoursesPage;
