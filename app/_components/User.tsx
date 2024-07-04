import Image from "next/image";

const UserCard = ({
  name,
  role,
  imageSrc,
}: {
  name: string;
  role: string;
  imageSrc: string;
}) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative rounded-full w-10 h-10">
        <Image
          className="rounded-full"
          src={imageSrc}
          alt={`${name}'s picture`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div>
        <h4 className="text-sm font-semibold">{name}</h4>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default UserCard;
