"use client";
import Card from "@/components/Card";
import Search from "@/components/Search";
import Table from "@/components/Table";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import MoreBtn from "./MoreBtn";
import Loadable from "next/dist/shared/lib/loadable.shared-runtime";
import Loading from "@/app/loading";
import parseMoney from "./functions/parseMoney";
import NoResults from "./NoResults";

export default function MainComponent({ subUrl, leagueId, orderBy }) {
  const [players, setPlayers] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [numberOfResults, setNumberOfResults] = useState(40);
  const [noResults, setNoResults] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  if (leagueId === "All%20leagues") {
    router.push(`/${subUrl}`);
  }

  const queryParams = {};

  if (leagueId == 0) {
    leagueId = "all_leagues";
  }

  if (leagueId) {
    queryParams.leagueId = leagueId;
  }
  if (orderBy) {
    queryParams.orderBy = orderBy;
  } else {
    queryParams.orderBy = "latest";
  }

  function loadContent(more) {
    setNumberOfResults(() => numberOfResults + more);
  }

  useEffect(() => {
    const url = `https://football-transfers-api.onrender.com/${subUrl}/${numberOfResults}/${queryParams.leagueId}/${queryParams.orderBy}`;
    axios
      .get(url)
      .then((data) => {
        setPlayers(data.data);
        setHasFetched(true);
        if (data.data.length === 0) {
          setNoResults(true);
        }
      })
      .then(() => setLoading(false));
  }, [numberOfResults, subUrl, queryParams.leagueId, queryParams.orderBy]);

  useEffect(() => {
    axios
      .get("https://football-transfers-api.onrender.com/leagues")
      .then((data) => {
        setLeagues(data.data);
      });
  }, []);

  return (
    <div>
      <Search leagues={leagues} loading={loading} />
      {loading ? (
        <Loading />
      ) : noResults && hasFetched ? (
        <NoResults />
      ) : (
        <div>
          <div className="lg:hidden">
            <div className="flex flex-wrap flex-1">
              {/* // money parser */}
              {parseMoney(players)}
              {players.map((player, i) => {
                return <Card player={player} key={i} />;
              })}
            </div>
          </div>
          <div className="hidden lg:block">
            {/* // money parser */}
            {parseMoney(players)}
            <Table players={players} loading={loading} />
          </div>
        </div>
      )}

      {!loading && !noResults && <MoreBtn loadContent={loadContent} />}
    </div>
  );
}
