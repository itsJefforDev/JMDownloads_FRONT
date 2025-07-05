import axios from 'axios';

const API_URL = 'http://localhost:4000/api/download';

const download = async (url, format) => {
  const response = await axios.post(API_URL, { url, format }, { responseType: 'blob' });

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
