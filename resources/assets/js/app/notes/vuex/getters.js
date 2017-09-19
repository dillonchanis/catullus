import { pluralize } from '../../../helpers';

export const notes = state => state.notes;

export const note = state => state.note;

export const readTime = state => {
  const wordsPerMinute = 275;

  if (!state.note.body || state.note.body.trim() === '') {
    return 'No time!';
  }

  const wordCount = state.note.body.trim().split(' ').length;
  const time = Math.ceil(wordCount / wordsPerMinute);

  return `${time} ${pluralize(time, 'minute', 'minutes')}`;
};