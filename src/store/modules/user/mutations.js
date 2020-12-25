export function isAuthenticated (state, data) {
  state.isAuthenticated = data
}

export function setUser (state, data) {
  state.user = data
}
