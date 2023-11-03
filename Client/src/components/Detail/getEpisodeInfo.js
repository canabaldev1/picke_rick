function getEpisodeInfo(epi) {
  const seasons = [
    { s: 1, e: 11 },
    { s: 2, e: 10 },
    { s: 3, e: 10 },
    { s: 4, e: 10 },
    { s: 5, e: 10 },
    { s: 6, e: 11 },
  ];
  let target = 0;
  let targetSeason = 0;
  let targetEpisode = 0;
  for (const item of seasons) {
    if (epi > target && epi <= target + item.e) {
      targetSeason = item.s;
      targetEpisode = epi - target;
    }
    target += item.e;
  }

  return {
    link: `https://www.rottentomatoes.com/tv/rick_and_morty/s${targetSeason
      .toString()
      .padStart(2, "0")}/e${targetEpisode.toString().padStart(2, "0")}`,
    season: targetSeason,
    episode: targetEpisode,
  };
}

export default getEpisodeInfo;
