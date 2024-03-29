function validateRequest(req, res, next) {
  const { zone, organization_id, total_distance, item_type } = req.body;
  if (!zone || !organization_id || !total_distance || !item_type) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  next();
}

module.exports = {
  validateRequest,
};
