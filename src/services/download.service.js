import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const download = async (url, format) => {
  const response = await axios.post(`${API_URL}/api/download`, { url, format }, { responseType: 'blob' });

  const blob = new Blob([response.data]);
  const downloadUrl = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = downloadUrl;
  a.download = `video.${format}`;
  document.body.appendChild(a);
  a.click();
  a.remove();
};

export default { download };
