import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PlayerSchema = new Schema({
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  phone: {
    type: Number,
    require: true
  },
  email: {
    type: String,
    // require: true
  },
  isCoach: {
    type: Boolean,
    // default: false
  },
  team: {
    type: String,
    // default: false
  },
  speed: {
    type: Number,
    enum: [1, 2, 3]
  },
  strength: {
    type: Number,
    enum: [1, 2, 3]
  },
  ability: {
    type: Number,
    enum: [1, 2, 3]
  },
  endurance: {
    type: Number,
    enum: [1, 2, 3]
  },
  techniques: {
    type: Number,
    enum: [1, 2, 3]
  },
  technical: {
    type: Number,
    enum: [1, 2, 3]
  },
  create_date: {
    type: Date,
    default: Date.now
  }
})