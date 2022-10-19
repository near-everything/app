import { IonItem, IonRouterLink } from "@ionic/react";
import Image from "next/image";
import Avatar from "./Avatar";
import Card from "./ui/Card";

function Post({ id, avatarColor, image }) {
  return (
    <IonRouterLink href={`/tabs/feed/${id}`} routerDirection="forward">
      <Card className="my-4 mx-auto">
        <div className="h-64 w-full relative">
          <Image
            className="rounded-t-xl object-cover min-w-full min-h-full max-w-full max-h-full"
            src={image}
            alt=""
            layout="fill"
          />
        </div>
        <div className="px-4 py-4 bg-white rounded-b-xl dark:bg-gray-900">
          <div className="flex items-center space-x-4">
            <Avatar color={avatarColor} />
          </div>
        </div>
      </Card>
    </IonRouterLink>
  );
}

export default Post;
