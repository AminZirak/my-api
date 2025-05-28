import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://competent-euclid-ixwf7wuga.liara.run/heartbeat')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error('خطا در دریافت داده‌ها:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>📈 مقادیر ضربان قلب</h1>
      {loading ? (
        <p>در حال دریافت داده‌ها...</p>
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              مقدار: {item.irValue} - زمان: {new Date(item.timestamp).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
