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
            return (
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={player.playerImage} alt="Player Image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{player.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {player.fee}
                  <br />
                  {player.feeSubtitle ? (
                    <span className="badge badge-ghost badge-sm">
                      {" "}
                      {player.feeSubtitle}{" "}
                    </span>
                  ) : (
                    <></>
                  )}
                </td>
                <td className="flex justify-center items-center">
                  {player.fromClub}
                  <span>
                    <img src={player.fromClubIcon} className=" m-4 h-8" />
                  </span>
                </td>
                <td>
                  <div className="flex justify-center items-center">
                    {player.toClub}
                    <span>
                      <img src={player.toClubIcon} className=" m-4 h-8" />
                    </span>
                  </div>
                </td>
                <td>{player.position}</td>
                <td>{player.contract}</td>
                <td>{player.marketValue}</td>
                <td>{player.transferDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
