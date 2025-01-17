import user_datas_client from 'src/DataBase/connect/UserDatas';

export default async function FindRelationshipByBothId(Id1: any, Id2: any) {
  const find_relationship_query = `SELECT * FROM relationship WHERE user_id = ? AND receive_id = ?;`;
  const find_relationship_parmas = [Id1, Id2];
  const find_relationship_data = await user_datas_client.execute(
    find_relationship_query,
    find_relationship_parmas,
    { prepare: true },
  );
  if (find_relationship_data.wasApplied()) {
    return find_relationship_data.rows[0];
  } else {
    return false;
  }
}
