export const formatDate = (date) => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  return new Intl.DateTimeFormat("id-ID", options).format(new Date(date));
};

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(amount);
};

export const formatCountdown = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.ceil(seconds % 60);
  return `${hours}:${minutes}:${secs}`;
};

export const formatTime = (date) => {
  return new Date(date).toLocaleTimeString("id-ID");
};
