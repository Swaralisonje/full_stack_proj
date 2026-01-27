const User = require("../models/User");

exports.exportToCSV = async (req, res) => {
  const users = await User.find();

  let csv = "Name,Email,Phone,Age,Address\n";
  users.forEach(u => {
    csv += `${u.name},${u.email},${u.phone},${u.age},${u.address}\n`;
  });

  res.header("Content-Type", "text/csv");
  res.attachment("users.csv");
  res.send(csv);
};
