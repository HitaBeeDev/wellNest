import arrow from "../assets/arrow.png";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";

export default function YogaUserCard() {
  return (
    <div className="hidden bg-white gap-4 rounded-3xl lg:flex flex-col items-start justify-end p-5">
      <div className="flex flex-row items-center w-full">
        <h3 className="text-2xl font-semibold flex-grow text-color2"> 42 +</h3>
        <img
          src={arrow}
          alt="arrow icon"
          className="w-6 h-6 mt-2 p-1 rounded-full border-color2 border-2 hover:bg-color3 hover:border-color3 cursor-pointer transition-all"
        />
      </div>

      <p className="text-color2 text-sm">
        This year, we've hosted over 42 calming yoga sessions in our studio.
      </p>

      <AvatarGroup max={4}>
        <Avatar alt="Remy Sharp" src={user1} />
        <Avatar alt="Travis Howard" src={user2} />
        <Avatar alt="Cindy Baker" src={user3} />
        <Avatar alt="Agnes Walker" src={user1} />
        <Avatar alt="Trevor Henderson" src={user1} />
      </AvatarGroup>
    </div>
  );
}
