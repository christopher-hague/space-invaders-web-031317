class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = 'disengaged'
    // this.docked will count the num of crew members to determine if its docked
    if (crew.length === 0)  {
      this.docked = true
    } else {
      this.docked = false
    }
    this.phasersCharge = 'uncharged'
    this.crewShip()
  }

  crewShip(){
    this.crew.forEach(crewMember => {
      crewMember.currentShip = this;
    });
  }
}
