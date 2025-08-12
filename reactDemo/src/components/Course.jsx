function Course() {
  const courses = ["JavaScript", "React", "NextJS"];

  const listCourse = () => {
    return (
      <ul>
        {courses.map((course, index) => {
          return <li key={index}>{course}</li>;
        })}
      </ul>
    );
  };
  return listCourse();
}

export default Course;
