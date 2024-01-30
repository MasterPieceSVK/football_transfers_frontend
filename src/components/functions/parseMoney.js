function parseMoney(player) {
  player.map((player) => {
    let market_value = player.market_value;
    market_value = Number(market_value);
    if (market_value / 1000000 >= 1) {
      market_value = market_value / 1000000;
      market_value = `€${market_value}M`;
      player.market_value = market_value;
      return player;
    } else if (market_value / 1000 >= 1) {
      market_value = market_value / 1000;
      market_value = `€${market_value}K`;
      player.market_value = market_value;
      return player;
    }
    let fee = player.fee;
    fee = Number(fee);
    if (fee / 1000000 >= 1) {
      fee = fee / 1000000;
      fee = `€${fee}M`;
      player.fee = fee;
      return player;
    } else if (fee / 1000 >= 1) {
      fee = fee / 1000;
      fee = `€${fee}K`;
      player.fee = fee;
      return player;
    }
  });
}

module.exports = parseMoney;
