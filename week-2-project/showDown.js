let fight = function fight() {
  let monster = prompt("Name the monster you're fighting:");
  let hero = prompt("Name the hero that is fighting:");

  let heroHealth = 50;
  let villainHealth = 50;

  while (heroHealth > 0 && villainHealth > 0) {
    let randomHeroDiceRoll = Math.floor(Math.random() * 20);
    let randomVillainDiceRoll = Math.floor(Math.random() * 20);

    if (randomHeroDiceRoll >= 2) {
      heroHealth -= 5;
      alert(
        `Critical failure! ${hero} accidentally stab themselves! ${hero} has ${heroHealth} hitpoints left. ${monster} has ${villainHealth} hitpoints left.`
      );
    } else if (randomHeroDiceRoll >= 3 && randomHeroDiceRoll <= 10) {
      heroHealth -= 0;
      alert(
        `${hero} missed! ${hero} has ${heroHealth} hitpoints left. ${monster} has ${villainHealth} hitpoints left.`
      );
    } else if (randomHeroDiceRoll >= 11 && randomHeroDiceRoll <= 18) {
      villainHealth -= 10;
      alert(
        `Hit! ${hero} strikes ${monster}! ${hero} has ${heroHealth} hitpoints left. ${monster} has ${villainHealth} hitpoints left.`
      );
    } else if (randomHeroDiceRoll >= 19 && randomHeroDiceRoll <= 20) {
      villainHealth -= 20;
      alert(
        `Critical hit! ${hero} does double damage to ${monster}! ${hero} has ${heroHealth} hitpoints left. ${monster} has ${villainHealth} hitpoints left.`
      );
    }

    if (randomVillainDiceRoll >= 2) {
      villainHealth -= 5;
      alert(
        `Critical failure! ${hero} accidentally stab themselves! ${hero} has ${heroHealth} hitpoints left. ${monster} has ${villainHealth} hitpoints left.`
      );
    } else if (randomVillainDiceRoll >= 3 && randomVillainDiceRoll <= 10) {
      villainHealth -= 0;
      alert(
        `${hero} missed! ${hero} has ${heroHealth} hitpoints left. ${monster} has ${villainHealth} hitpoints left.`
      );
    } else if (randomVillainDiceRoll >= 11 && randomVillainDiceRoll <= 18) {
      heroHealth -= 10;
      alert(
        `Hit! ${hero} strikes ${monster}! ${hero} has ${heroHealth} hitpoints left. ${monster} has ${villainHealth} hitpoints left.`
      );
    } else if (randomVillainDiceRoll >= 19 && randomVillainDiceRoll <= 20) {
      heroHealth -= 20;
      alert(
        `Critical hit! ${hero} does double damage to ${monster}! ${hero} has ${heroHealth} hitpoints left. ${monster} has ${villainHealth} hitpoints left.`
      );
    }

    if (heroHealth > villainHealth) {
      alert(`${hero} has won the battle!`);
    } else if (villainHealth > heroHealth) {
      alert(`${monster} has won the battle!`);
    } else {
      alert(`${hero} and ${monster} have been eliminated.`);
    }
  }
};

fight();
