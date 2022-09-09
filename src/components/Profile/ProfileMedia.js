import React, { useState } from "react";
import PostGrid from "./Media/PostGrid";
import RequestGrid from "./Media/RequestGrid";
import ThingGrid from "./Media/ThingGrid";

function ProfileMedia() {
  const [selectedMediaType, setSelectedMediaType] = useState("");

  const renderMedia = () => {
    switch (selectedMediaType) {
    case "requests":
      return <RequestGrid />;
    case "posts":
      return <PostGrid />;
    default:
      return <ThingGrid />;
    }
  };

  return (
    <>
      <div className="tabs pb-1">
        <a
          className="tab tab-bordered flex-1"
          onClick={() => setSelectedMediaType("posts")}
        >
          posts
        </a>
        <a
          className="tab tab-bordered flex-1"
          onClick={() => setSelectedMediaType("things")}
        >
          things
        </a>
        <a
          className="tab tab-bordered flex-1"
          onClick={() => setSelectedMediaType("requests")}
        >
          requests
        </a>
      </div>
      {renderMedia()}
    </>
  );
}

export default ProfileMedia;
