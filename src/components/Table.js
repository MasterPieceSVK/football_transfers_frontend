import { motion } from "framer-motion";

import Loading from "@/app/loading";

export default function Table({ players, loading }) {
  return loading ? (
    <Loading />
  ) : (
    <div>
      <table className="table">
        <thead class="bg-white border-b sticky top-0">
          <tr className="text-center">
            <th>Name</th>
            <th>Fee</th>
            <th>From</th>
            <th>To</th>
            <th>Position</th>
            <th>Contract</th>
            <th>Market Value</th>
            <th>Transfer Date</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => {
            const inputDate = new Date(player.transfer_date);

            const options = { day: "numeric", month: "short", year: "numeric" };
            const convertedTransferDate = inputDate.toLocaleDateString(
              "en-GB",
              options
            );

            return (
              <tr>
                <td>
                  <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ y: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    <div className="flex items-center justify-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={player.player_image} alt="Player Image" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{player.name}</div>
                      </div>
                    </div>
                  </motion.div>
                </td>
                <td className="text-center">
                  <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ y: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    {player.fee}
                    {player.fee_subtitle ? (
                      <span className="badge badge-ghost badge-sm">
                        {" "}
                        {player.fee_subtitle}{" "}
                      </span>
                    ) : (
                      <></>
                    )}
                  </motion.div>
                </td>
                <td className="flex justify-center items-center">
                  <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ y: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    {player.from_club}
                    <span>
                      <img src={player.from_club_icon} className=" m-4 h-8" />
                    </span>
                  </motion.div>
                </td>
                <td>
                  <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ y: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    <div className="flex justify-center items-center">
                      {player.to_club}
                      <span>
                        <img src={player.to_club_icon} className=" m-4 h-8" />
                      </span>
                    </div>
                  </motion.div>
                </td>
                <td className="text-center">
                  <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ y: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    {player.position}
                  </motion.div>
                </td>
                <td className="text-center">
                  <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ y: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    {player.contract}
                  </motion.div>
                </td>
                <td className="text-center">
                  <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ y: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    {player.market_value}
                  </motion.div>
                </td>
                <td className="text-center">
                  <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ y: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    {convertedTransferDate}
                  </motion.div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
