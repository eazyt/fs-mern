import {
  addNewPlayer,
  getPlayers,
  getPlayersById,
  updatePlayersById,
  deletePlayersById
} from '../controllers/playerController'

const routes = (app) => { 
  app.route('/players').get(getPlayers).post(addNewPlayer)
  app.route('/player/:PlayerId').get(getPlayersById).put(updatePlayersById).delete(deletePlayersById);
}

export default routes;