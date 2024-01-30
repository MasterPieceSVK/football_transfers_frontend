import { usePathname, useRouter } from "next/navigation";

export default function Search({ leagues }) {
  const router = useRouter();
  const pathName = usePathname();

  function handleAllTopChange(e) {
    const newPath = pathName.split("/");
    newPath[1] = e.target.value;
    router.push(newPath.join("/"));
  }

  function handleLeagueChange(e) {
    const newPath = pathName.split("/");
    newPath[2] = e.target.value;
    router.push(newPath.join("/"));
  }

  function handleOrderChange(e) {
    const newPath = pathName.split("/");
    console.log(newPath);
    newPath[3] = e.target.value;
    router.push(newPath.join("/"));
    // router.push(pathName + `?orderBy=${e.target.value}`);
  }

  return (
    <div className="flex  flex-col  md:flex-row items-center  lg:justify-center  bg-primary pb-5 px-5">
      <select
        className="select select-bordered w-full max-w-xs text-center lg:mr-3"
        value={
          pathName.includes("latest")
            ? "latest"
            : pathName.includes("fee")
            ? "fee"
            : "market_value"
        }
        onChange={handleOrderChange}
      >
        <option value="latest">Latest</option>
        <option value="fee">Fee</option>
        <option value="market_value">Market Value</option>
      </select>
      <select
        className="select select-bordered w-full max-w-xs text-center lg:mr-3 lg:ml-3 my-3"
        value={pathName.startsWith("/all") ? "all" : "top"}
        onChange={handleAllTopChange}
      >
        <option value="all">All</option>
        <option value="top">Top</option>
      </select>
      <select
        className="select select-bordered w-full max-w-xs text-center lg:ml-3 "
        value={
          pathName.split("/").length == 2 ||
          pathName.split("/")[2] == "All%20leagues"
            ? "0"
            : pathName.split("/")[2]
        }
        onChange={handleLeagueChange}
      >
        <option value="0">All leagues</option>
        {leagues.map((league) => (
          <option value={league.id}>{league.name}</option>
        ))}
      </select>
    </div>
  );
}
