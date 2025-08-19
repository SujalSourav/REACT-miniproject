import React from "react";
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import {toast} from 'react-toastify';

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    /// agar liked courses already clicked hai, yeh check kr rhe hai id see
    // uss case mai filter krke sirf wahi courses - setLikeCourses mai set krnge
    // jo current id ke equal na ho
    if (likedCourses.includes(course.id)) {
      // mtlb phele se liked hua pda hai -- toh hmko liked se remove krnqa hoga
      // jo hm id see use krke filter kr rhe hai
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Liked Removed...");
    } else {
      // phele se liked hua ni hai course -- toh
      // usko setLikedCourses mai add kr de rhe hai.

      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
        // toast.success("Liked Successfully...");
      } else {
        // phele see kuch courses already liked hai toh
        // purane wale state+ new course.id dono ko insert kiya.
        setLikedCourses((prev) => [...prev, course.id]);
        // toast.success("Liked Successfully...");
      }
      toast.success("Liked Successfully...");
    }
  }

  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} />;
        <div
          className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 
        bottom-3 grid place-items-center"
        >
          <button onClick={clickHandler}>
            {
              likedCourses.includes(course.id) ?
              (<FcLike fontSize="1.75rem" />) : 
              (<FcLikePlaceholder fontSize="1.75rem" />)
            }
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
