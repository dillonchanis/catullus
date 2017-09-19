import * as types from './mutation-types';

export default {
  [types.GET_NOTE] (state, note) {
    state.note = note;
  },
  [types.GET_ALL_NOTES] (state, notes) {
    state.notes = notes;
  },
  [types.SET_UPDATED_AT] (state, date) {
    state.note.updated_at = date;
  },
  [types.SET_SAVE_DEBOUNCE] (state, { fn }) {
    state.saveDebounce = setTimeout(fn, 1000);
  },
  [types.STOP_SAVE_DEBOUNCE] (state) {
    clearInterval(state.saveDebounce);
    state.saveDebounce = null;
  },
  [types.CLEAR_NOTE] (state) {
    state.note = null;
  },
  [types.ADD_NOTE_TO_LIST] (state, note) {
    state.notes.unshift(note);
  },
  [types.REMOVE_NOTE_FROM_LIST] (state, id) {
    state.notes = state.notes.filter(note => note.id !== id);
  },
  [types.SET_CURRENT_NOTE] (state, payload) {
    let index = _.findIndex(state.notes, note => note.id === payload.note.id);
    
    if(payload.getPreviousNote) {
      index -= 1;
    }

    if(index <= 0) index = 0;
    state.note = state.notes[index];
  },
  [types.UPDATE_NOTES] (state, id) {
    let index = _.findIndex(state.notes, note => note.id === id);

    state.notes.splice(index, 1, state.note);
  }
};