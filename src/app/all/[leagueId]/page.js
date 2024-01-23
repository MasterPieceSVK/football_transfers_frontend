import MainComponent from "@/components/MainComponent";

export default function LeagueId({ params }) {
  return <MainComponent leagueId={params.leagueId} subUrl="all" />;
}
