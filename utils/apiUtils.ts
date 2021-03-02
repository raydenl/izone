import axios from 'axios';

export const getSystemSettings = (ip: string) =>
  axios.get(`http://${ip}/SystemSettings`);

export const setCommand = (ip: string, command: string, value: any) => {
  var data = {} as any;
  data[command] = value;

  return axios.post(`http://${ip}/${command}`, data);
};
