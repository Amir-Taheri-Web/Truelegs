import Image from "next/image";

const Card = ({ url, alt, width }) => {
  return (
    <div>
      <Image src={url} alt={alt} width={width} height="auto" />
    </div>
  );
};

export default Card;
