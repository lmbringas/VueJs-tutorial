export const state = {weapons:[{name:"kaajavi", description:"Mata con la mirada"}, {name:"Hacha Pitri", description:"Ojo con los pies"}]}

export const mutations = {
  addWeapon (state, { name, description }) {
    state.weapons.push({
      name,
      description
    })
  },

  deleteWeapon (state, { weapon }) {
    state.weapons.splice(state.weapons.indexOf(weapon), 1)
  },
}
