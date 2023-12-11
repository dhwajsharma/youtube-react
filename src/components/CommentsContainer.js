import React from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Dhwaj Sharma",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing",
      replies: [
        {
          name: "Astitva Sharma",
          text: "lorem ipsum dolor sit amet, consectetur adipiscing",
          replies: [
            {
              name: "Astitva Sharma",
              text: "lorem ipsum dolor sit amet, consectetur adipiscing",
              replies: [],
            },
            {
              name: "Astitva Sharma",
              text: "lorem ipsum dolor sit amet, consectetur adipiscing",
              replies: [],
            },
          ],
        },
        {
          name: "Astitva Sharma",
          text: "lorem ipsum dolor sit amet, consectetur adipiscing",
          replies: [],
        },
      ],
    },
    {
      name: "Dhwaj Sharma",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing",
      replies: [
        {
          name: "Astitva Sharma",
          text: "lorem ipsum dolor sit amet, consectetur adipiscing",
          replies: [],
        },
        {
          name: "Astitva Sharma",
          text: "lorem ipsum dolor sit amet, consectetur adipiscing",
          replies: [],
        },
      ],
    },
  ];

  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold my-4">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
