// Upload controller placeholder
exports.uploadProfile = async (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
  res.json({ filename: req.file.filename, path: req.file.path });
};
