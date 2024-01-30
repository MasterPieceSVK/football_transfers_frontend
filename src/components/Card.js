import Loading from "@/app/loading";
import { motion } from "framer-motion";

export default function Card({ player, loading }) {
  const inputDate = new Date(player.transfer_date);

  const options = { day: "numeric", month: "short", year: "numeric" };
  const convertedTransferDate = inputDate.toLocaleDateString("en-GB", options);
  return loading ? (
    <Loading />
  ) : (
    <motion.div
      className="bg-primary rounded-xl m-4 flex flex-col justify-center items-center p-3 w-full gap-2"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring" }}
    >
      <h1 className="text-2xl font-bold text-neutral">{player.name}</h1>
      <img
        src={player.player_image}
        className="rounded-full w-[7rem]"
        alt="player_image"
      />
      <h2 className="font-bold mt-2">{player.position}</h2>
      <div className="flex flex-col justify-center items-center mt-3">
        <h2>From: {player.from_club}</h2>
        <img
          src={player.from_club_icon}
          className="aspect-square w-16"
          alt="from club icon"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2>To: {player.to_club}</h2>
        <img
          src={player.to_club_icon}
          className="aspect-square w-16"
          alt="to club icon"
        />
      </div>
      {player.fee && <h2>Fee: {player.fee}</h2>}
      {player.fee_subtitle ? <h2>{player.fee_subtitle}</h2> : <></>}
      <h2>Market Value: {player.market_value}</h2>

      <h2>Contract: {player.contract}</h2>
      <h2>Transfer Date: {convertedTransferDate}</h2>
    </motion.div>
  );
}
