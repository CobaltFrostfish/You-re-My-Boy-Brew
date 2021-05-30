module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },

  get_emoji: () => {
    const randomNum = Math.random();
    let star = "⭐";

    if (randomNum <= 5) {
      star = "⭐";
    } else if (randomNum < 5) {
      star = "⭐";
    }

    return `${star}`;
  },
};
