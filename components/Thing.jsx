import Card from "./ui/Card";

function Thing({ characteristics }) {
  return (
    <Card className="my-4 mx-auto">
      <div className="h-64 w-full relative">
        {/* <Image
          className="rounded-t-xl object-cover min-w-full min-h-full max-w-full max-h-full"
          src={medias?.edges[0].node.mediaUrl}
          alt=""
          layout="fill"
        /> */}
      </div>
      <div className="px-4 py-4 bg-white rounded-b-xl dark:bg-gray-900">
        <div className="flex items-center space-x-4">
          {characteristics &&
            characteristics.edges.map((i, index) => (
              <div key={index}>{i.node.attributeId}</div>
            ))}
          {/* <Avatar color={avatarColor} size={10} /> */}
        </div>
      </div>
    </Card>
  );
}

export default Thing;
