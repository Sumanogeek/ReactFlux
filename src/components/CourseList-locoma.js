import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CourseList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map(course => {
          {
            console.log(`course: ${JSON.stringify(course)}`);
          }
          return (
            <tr key={course._id}>
              <td>
                <Link to={"/course/" + course._id}>{course.name}</Link>
              </td>
              <td>{course.location}</td>
              <td>{course.link}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;
