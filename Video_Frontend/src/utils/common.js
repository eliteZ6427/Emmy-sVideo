import localforage from 'localforage';
import moment from 'moment';

export async function getBlobFromLocalForage(key) {
  try {
    // Retrieve blob file from localforage
    const url = await localforage.getItem(key);
    const blob = await fetch(url).then(r => r.blob());
    return blob;
  }
  catch (error) {
    console.error('Error retrieving blob from localforage:', error);
    return null;
  }
}


export const dateStartTime = (time) => {
  const date = new Date(time)
  const dateStr = moment(date).format('YYYY-MM-DD');
  const diff = (new Date()).getTimezoneOffset() * 60 * 1000;
  return new Date(dateStr).getTime() - diff;
}

export const dateFormat = (time) => {
  const date = new Date(time)
  const dateStr = moment(date).format('YYYY-MM-DD');
  return dateStr;
}

export const formatReportDate = (strDate) => {
  if (strDate && strDate.includes(':')) {
    const nodes = strDate.split(':');
    if (nodes.length == 3) {
      return nodes[0] + ':' + nodes[1];
    }
  }
  return strDate;
}