import {
  addNewPlayer,
  getPlayers,
  getPlayersById
} from '../controllers/playerController'

const routes = (app) => { 
  app.route('/players').get(getPlayers).post(addNewPlayer)
  app.route('/player/:PlayerId').get(getPlayersById)
}

export default routes;