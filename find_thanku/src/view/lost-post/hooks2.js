//각 게시글 별 comment 정보 가져오기
//url= localhost:4000/lost_post/게시글 id정보/comment
import { useEffect, useState } from "react";

export const useCommentLost = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getInitialComments = async () => {
      const url = window.location.pathname; // lost/post/게시글 id정보/

      // GET https://find-thanku.herokuapp.com/lost/post/:_id/comment
      const request = await fetch(
        "https://find-thanku.herokuapp.com" + url + "/comment",
        {
          method: "GET",
        }
      );

      if (!request.ok) {
        alert("Server not responding");
        return;
      }

      const data = await request.json();

      setComments(data);
    };

    getInitialComments();
  }, []);

  return {
    comments,
  };
};
