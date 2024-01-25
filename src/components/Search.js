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
    <div className="flex lg:justify-center md:justify-around bg-primary pb-5">
      <select
        className="select select-bordered w-full max-w-xs text-center lg:mr-3"
        onChange={handleOrderChange}
      >
        {pathName.includes("latest") ? (
          <option value="latest" selected>
            Latest
          </option>
        ) : (
          <option value="latest">Latest</option>
        )}

        {pathName.includes("fee") ? (
          <option value="fee" selected>
            Fee
          </option>
        ) : (
          <option value="fee">Fee</option>
        )}

        {pathName.includes("value") ? (
          <option value="value" selected>
            Market Value
          </option>
        ) : (
          <option value="value">Market Value</option>
        )}
      </select>
      <select
        className="select select-bordered w-full max-w-xs text-center lg:mr-3 lg:ml-3"
        onChange={handleAllTopChange}
      >
        {pathName.startsWith("/all") ? (
          <option value="all" selected>
            All
          </option>
        ) : (
          <option value="all">All</option>
        )}
        {pathName.startsWith("/top") ? (
          <option value="top" selected>
            Top
          </option>
        ) : (
          <option value="top">Top</option>
        )}
      </select>
      <select
        className="select select-bordered w-full max-w-xs text-center lg:ml-3"
        onChange={handleLeagueChange}
      >
        {pathName.split("/").length == 2 ||
        pathName.split("/")[2] == "All%20leagues" ? (
          <option value="0" selected>
            All leagues
          </option>
        ) : (
          <option value="0">All leagues</option>
        )}

        {leagues.map((league) => {
          if (pathName.includes(league.id)) {
            return (
              <option value={league.id} selected>
                {league.name}
              </option>
            );
          } else {
            return <option value={league.id}>{league.name}</option>;
          }
        })}
      </select>
    </div>
  );
}
