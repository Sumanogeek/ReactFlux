import React from "react";
import TextInput from "./common/TextInput";
import SelectOption from "./common/SelectOption";
import PropTypes from "prop-types";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        label="Title"
        onChange={props.onChange}
        name="title"
        value={props.course.title}
        error={props.errors.title}
      />

      <SelectOption
        id="author"
        onChange={props.onChange}
        label="Author"
        name="authorId"
        className="form-control"
        value={props.course.authorId || ""}
        options={[
          { value: "1", text: "Auth-9" },
          { value: "3", text: "Auth-7" },
          { value: "2", text: "Auth-4" }
        ]}
        error={props.errors.authorId}
      />

      <TextInput
        id="category"
        label="Category"
        onChange={props.onChange}
        name="category"
        value={props.course.category}
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default CourseForm;
