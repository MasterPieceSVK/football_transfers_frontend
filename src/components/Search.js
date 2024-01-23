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

  // function handleSortChange(e) {
  //   console.log("handleSortChange triggered", e.target.value);
  //   const { query, pathname } = router;
  //   const newQuery = { ...query, orderBy: e.target.value };
  //   router.replace(
  //     {
  //       pathname,
  //       query: newQuery,
  //     },
  //     undefined,
  //     { shallow: true }
  //   );
  // }

  return (
    <div className="flex lg:justify-center md:justify-around ">
      <select
        className="select select-bordered w-full max-w-xs text-center lg:mr-3"
        // onChange={handleSortChange}
      >
        <option value="latest">Latest</option>
        <option value="fee">Fee</option>
        <option value="value">Market Value</option>
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
          <option selected>All leagues</option>
        ) : (
          <option>All leagues</option>
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
