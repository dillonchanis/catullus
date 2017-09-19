import router from '../../../router';
import * as mutations from './mutation-types';

export const getAllNotes = ({ commit }) => {
  axios.get('/api/notes').then(response => {
    commit(mutations.GET_ALL_NOTES, response.data.data);
  });
};

export const getNote = ({ commit }, id) => {
  axios.get(`/api/notes/${id}`).then(response => {
    commit(mutations.GET_NOTE, response.data.data);
    router.replace(`/note/${id}`);
  });
};

export const createNote = ({ commit, dispatch }) => {
  const data = { title: 'Untitled Note', body: 'Start Writing...' };

  commit(mutations.CLEAR_NOTE);
  axios.post('api/notes/create', data).then(response => {
    const note = {
      id: response.data.data.id,
      title: response.data.data.title,
      body: response.data.data.body,
      updated_at: response.data.data.updated_at
    };

    router.push(`${note.id}`);
    dispatch('addNoteToList', note);
    commit(mutations.GET_NOTE, note);
  });
};

export const saveNote = ({ commit, state }) => {
  const data = {
    id: state.note.id,
    title: state.note.title,
    body: state.note.body
  };

  axios.post(`/api/notes/edit`, data).then(response => {
    commit(mutations.SET_UPDATED_AT, response.data.data.updated_at);
    commit(mutations.UPDATE_NOTES, response.data.data.id);
  });
};

export const saveDebounce = ({ commit, dispatch, state }) => {
  if(state.saveDebounce !== null) return;
  commit(mutations.SET_SAVE_DEBOUNCE, {
    fn() {
      dispatch('saveNote');
      dispatch('stopSaveDebounce');
    }
  });
};

export const stopSaveDebounce = ({ commit }) => {
  commit(mutations.STOP_SAVE_DEBOUNCE);
};

export const deleteNote = ({ commit, dispatch, state }, id) => {
  const data = { 
    id: id,
    _method: 'DELETE'
  };

  axios.post('/api/notes/delete', data).then(response => {
    dispatch('removeNoteFromList', id);

    if(state.note.id === id) {
      dispatch('setCurrentNote', {
        note: state.note, 
        getPreviousNote: true
      });
    }
  });
};

export const addNoteToList = ({ commit }, note) => {
  commit(mutations.ADD_NOTE_TO_LIST, note);
};

export const removeNoteFromList = ({ commit }, id) => {
  commit(mutations.REMOVE_NOTE_FROM_LIST, id);
};

export const setCurrentNote = ({ commit }, note) => {
  commit(mutations.SET_CURRENT_NOTE, note);
};