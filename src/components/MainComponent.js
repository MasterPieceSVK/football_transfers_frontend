"use client";
import Card from "@/components/Card";
import Search from "@/components/Search";
import Table from "@/components/Table";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MainComponent({ subUrl, leagueId }) {
  const [players, setPlayers] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const router = useRouter();
  console.log(subUrl);

  if (leagueId === "All%20leagues") {
    router.push(`/${subUrl}`);
  }

  const queryParams = {};

  if (leagueId) {
    queryParams.leagueId = leagueId;
  }

  console.log(queryParams.leagueId);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/${subUrl}`, {
        params: {
          leagueId: queryParams.leagueId,
        },
      })
      .then((data) => {
        setPlayers(data.data);
      });
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
      <Table players={players} />
    </div>
  );
}
