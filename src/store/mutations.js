let defaultCity = '北京';
try{
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  changeCity(state, city) {
    state.city = city;
    localStorage.city = city;
  }
}
