const formatISODate = (isoDate) => {
  // ISO tarihini Date nesnesine çevir
  const date = new Date(isoDate);

  // Tarihi yerel biçimde formatla
  return date.toLocaleString("tr-TR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    // second: "2-digit",
  });
};

export default formatISODate;