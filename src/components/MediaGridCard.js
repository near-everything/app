import Image from "next/image";

function MediaGridCard({ media }) {
  return (
    <>
      <figure className="relative aspect-square">
        <Image src={media} layout="fill" objectFit="cover" alt="" />
      </figure>
    </>
  );
}

export default MediaGridCard;
