import Driver from '../model/driver';

export async function getAllUsers() {
  return await Driver.getAllDriver();
}