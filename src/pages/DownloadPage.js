import React, { useState } from 'react';
import downloadService from '../services/download.service';

function DownloadPage() {
  const [url, setUrl] = useState('');
  const [format, setFormat] = useState('mp3');
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      await downloadService.download(url, format);
    } catch (error) {
      alert('Error al descargar: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <h1 className="mb-4 text-center">Descargador de Videos</h1>
      <input
        className="form-control mb-3"
        type="text"
        placeholder="Pega el enlace del video"
        value={url}
        onChange={e => setUrl(e.target.value)}
      />
      <select className="form-select mb-3" value={format} onChange={e => setFormat(e.target.value)}>
        <option value="mp3">MP3</option>
        <option value="mp4">MP4</option>
      </select>
      <button className="btn btn-primary" onClick={handleDownload} disabled={loading}>
        {loading ? 'Procesando...' : 'Descargar'}
      </button>
    </div>
  );
}

export default DownloadPage;
