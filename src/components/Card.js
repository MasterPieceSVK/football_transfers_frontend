export default function Card({ player }) {
  return (
    <div className="bg-secondary rounded-xl m-4 flex flex-col justify-center items-center p-3">
      <h1 className="text-2xl text-bold text-neutral">{player.name}</h1>
      <img src={player.playerImage} className="rounded-full" />
      <h2 className="">{player.position}</h2>
      <div>
        <h2>{player.fromClub}</h2>
        <img src={player.fromClubIcon} />
      </div>
      <div>
        <h2>{player.toClub}</h2>
        <img src={player.toClubIcon} />
      </div>
      <h2>{player.fee}</h2>
      {player.feeSubtitle ? <h2>{player.feeSubtitle}</h2> : <></>}
      <h2>{player.contract}</h2>
      <h2>{player.transferDate}</h2>
      <h2>{player.marketValue}</h2>
    </div>
  );
}
