import MainComponent from "@/components/MainComponent";

export default function OrderBy({ params }) {
  return (
    <MainComponent
      leagueId={params.leagueId}
      subUrl="top"
      orderBy={params.orderBy}
    />
  );
}
