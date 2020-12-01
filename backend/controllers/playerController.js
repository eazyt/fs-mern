import mongoose from 'mongoose';
import { PlayerSchema } from '../models/playerModel'

const Player = mongoose.model('Player', PlayerSchema);

export const addNewPlayer = (req, res) => { 
  let newPlayer = new Player(req.body);
  newPlayer.save((err, Player) => { 
    if (err) {
      res.send(err)
    } else { 
      res.json(Player)
    }
  })
}

export const getPlayers = (req, res) => { 
  Player.find((err, Player) => { 
    if (err) { 
      res.send(err);
    }
    res.json(Player)
  })
}

export const getPlayersById = (req, res) => { 
  Player.findById(req.params.PlayerId, (err, Player) => { 
    if (err) { 
      res.send(err);
    }
    res.json(Player)
  })
}
export const updatePlayersById = (req, res) => { 
  Player.findOneAndUpdate({ _id: req.params.PlayerId }, req.body, {new: true}, (err, Player) => { 
    if (err) { 
      res.send(err);
    }
    res.json(Player)
  })
}