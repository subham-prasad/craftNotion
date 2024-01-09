import React from "react";
import OtherUser from "./OtherUser";
const OtherUserList = () => {
  const othersDetails = [
    {
      id: 1,
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg",
      name: "Floyd Miles",
      time: "10:15AM",
      action: "Commented on ",
      actionUser: "Stark Project",
      actiondesc:
        "Hi! Next Week we will start a new project. I will tell you all the details after",
      isLiked: true,
      online: false,
      isChat: true,
      isFile: false,
      fileLogo: null,
      fileName: null,
      fileSize: null,
    },
    {
      id: 2,
      image:
        "https://reliabilityweb.com/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yOTYwNTY2OC9vcmlnaW4ucG5nIiwiZXhwaXJlc19hdCI6MTcwNTkwMDU4MX0.7WIaOfuMfKQAJKLbclvLyyJRtbcrtdKCqScAAH9pYYE/image.png?width=400&height=400",
      name: "Guy Hawkins",
      time: "10:15AM",
      action: "Added a file to ",
      actionUser: "7Heros Project",
      actiondesc:
        "Hi! Next Week we will start a new project. I will tell you all the details after",
      isLiked: false,
      online: true,
      isChat: false,
      isFile: true,
      fileLogo:
        "https://s3-alpha.figma.com/hub/file/1166690750/85f69649-5387-44c2-ba45-81ae13812e36-cover.png",
      fileName: "Homepage.fig",
      fileSize: "13.4 Mb",
    },
    {
      id: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Kristin_Kreuk_Photo_Op_GalaxyCon_Columbus_2022_%28cropped%29.jpg/640px-Kristin_Kreuk_Photo_Op_GalaxyCon_Columbus_2022_%28cropped%29.jpg",
      name: "Kristin Watson",
      time: "10:15AM",
      action: "Commented on ",
      actionUser: "7Heros Project",
      actiondesc: null,
      isLiked: false,
      online: false,
      isChat: false,
      isFile: false,
      fileLogo: null,
      fileName: null,
      fileSize: null,
    },
  ];
  return (
    <div>
      <ul>
        {othersDetails.map((othersDetail) => {
          return <OtherUser {...othersDetail} key={othersDetail?.id} />;
        })}
      </ul>
    </div>
  );
};

export default OtherUserList;
