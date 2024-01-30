import Loading from "@/app/loading";
import { motion } from "framer-motion";

export default function Card({ player, loading }) {
  return loading ? (
    <Loading />
  ) : (
    <motion.div
      className="bg-primary rounded-xl m-4 flex flex-col justify-center items-center p-3 w-full"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring" }}
    >
      <h1 className="text-2xl font-bold text-neutral">{player.name}</h1>
      <img src={player.player_image} className="rounded-full w-[7rem]" />
      <h2 className="font-bold">{player.position}</h2>
      <div className="flex flex-col justify-center">
        <h2>{player.from_club}</h2>
        <img src={player.from_club_icon} className="object-scale-down" />
      </div>
      <div className="flex flex-col justify-center">
        <h2>{player.to_club}</h2>
        <img src={player.to_club_icon} className="object-scale-down" />
      </div>
      <h2>{player.fee}</h2>
      {player.fee_subtitle ? <h2>{player.fee_subtitle}</h2> : <></>}
      <h2>{player.contract}</h2>
      <h2>{player.transfer_date}</h2>
      <h2>{player.market_value}</h2>
    </motion.div>
  );
}
