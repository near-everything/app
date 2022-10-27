import Image from "next/image";

function SquareImage({ media }) {
  return (
    <>
      <figure className="relative aspect-square">
        <Image src={media} layout="fill" objectFit="cover" alt="" />
      </figure>
    </>
  );
}

export default SquareImage;
