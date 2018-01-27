/* globals __API_URL__ */
import superagent from 'superagent';
import cookie from 'react-cookies';

const API = `${__API_URL__}/visual_files`;

const initAction = payload => ({
  type: 'INIT',
  payload,
});

const createAction = payload => ({
  type: 'CREATE',
  payload,
});

const updateAction = payload => ({
  type: 'UPDATE',
  payload,
});

const deleteAction = id => ({
  type: 'DELETE',
  payload: id,
});

const bearerToken = () => cookie.load('auth');

export const init = () => (dispatch) => {
  superagent.get(API)
    .set('Authorization', `Bearer ${bearerToken()}`)
    .then(res => dispatch(initAction(res.body)))
    .catch(console.error);
};

export const create = payload => (dispatch) => {
  superagent.post(API)
    .set('Authorization', `Bearer ${bearerToken()}`)
    .send(payload)
    .then(res => dispatch(createAction(res.body)))
    .catch(console.error);
};

export const update = payload => (dispatch) => {
  const url = `${API}`;
  superagent.put(url)
    .set('Authorization', `Bearer ${bearerToken()}`)
    .send(payload)
    .then(() => dispatch(updateAction(payload)))
    .catch(console.error);
};

export const remove = id => (dispatch) => {
  const url = `${API}/${id}`;
  superagent.delete(url)
    .set('Authorization', `Bearer ${bearerToken()}`)
    .then(() => dispatch(deleteAction(id)))
    .catch(console.error);
};
