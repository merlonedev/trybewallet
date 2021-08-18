import { PEGOU_GASTOS, DELETA_GASTOS } from '../reducers/wallet';

const actionGastos = (state, total) => ({
  type: PEGOU_GASTOS,
  state,
  total,
});

export const actionDelete = (id, total) => ({
  type: DELETA_GASTOS,
  id,
  total,
});

export default actionGastos;
