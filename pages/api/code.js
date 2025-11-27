export default function handler(req, res) {
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  res.status(200).json({ code });
}
