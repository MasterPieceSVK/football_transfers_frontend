"use client";
import Card from "@/components/Card";
import Search from "@/components/Search";
import Table from "@/components/Table";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function MainComponent({ subUrl, leagueId, orderBy }) {
  const [players, setPlayers] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const searchParams = useSearchParams();
  if (leagueId === "All%20leagues") {
    router.push(`/${subUrl}`);
  }

  const queryParams = {};

  if (leagueId == 0) {
    leagueId = null;
  }

  if (leagueId) {
    queryParams.leagueId = leagueId;
  }
  if (orderBy) {
    queryParams.orderBy = orderBy;
  }

  // if (orderParams != orderBy) {
  //   router.reload();
  // }

  useEffect(() => {
    axios
      .get(`http://localhost:5000/${subUrl}`, {
        params: {
          leagueId: queryParams.leagueId,
          orderBy: queryParams.orderBy,
        },
      })

      .then((data) => {
        setPlayers(data.data);
      })
      .then(() => setLoading(false));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/leagues").then((data) => {
      setLeagues(data.data);
    });
  }, []);

  return (
    // <div className="flex flex-wrap flex-1">
    //   {players.map((player) => {
    //     return <Card player={player} />;
    //   })}
    // </div>

    <div>
      <Search leagues={leagues} />
      <Table players={players} loading={loading} />
    </div>
  );
}
