const function getAddStyles() {
  let styleEl = document.getElementById(id);
  const memo = {};
  const id = 'atomic-fuel-styles';

  return (styles) => {
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = id;
      document.head.appendChild(styleEl);
    }

    const classes = styles.match(/.*[^{]/)[0];

    if (memo[classes] === undefined) {
      styleEl.sheet.insertRule(styles, styleSheet.cssRules.length);
    } else {
      memo[classes] = 1;
    }
  };
}

export getAddStyles();
