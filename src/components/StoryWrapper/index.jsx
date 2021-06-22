import React from 'react';

export default function StoryWrapper(props) {
  const { children } = props;

  return (
    <>
      <div>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </div>
      <div>
        {children}
      </div>
    </>
  );
}
